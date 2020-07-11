import { Either } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { fold, fromEither, isNone, map, none, Option } from 'fp-ts/lib/Option'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import createHttpError, { HttpError } from 'http-errors'
import {
  FetchFn,
  getEmojiFrom,
  LoggerNextFunction,
  TraitLogger
} from './logger'

export interface SlackLoggerContext {
  accessToken: string
  asUser?: boolean
  channelId: string
  partialFields?: Record<string, string>
}

export const SLACK_LOGGER_POST_URL = 'https://slack.com/api/chat.postMessage'

export interface PostMessageResultAsBotVo {
  channel: string
  message: {
    bot_id: string
    subtype: string
    text: string
    ts: string
    type: string
    username: string
  }
  ok: boolean
  ts: string
}

export interface PostMesssageResultAsUserVo {
  channel: string
  message: {
    bot_id: string
    bot_profile: {
      app_id: string
      deleted: boolean
      icons: {
        image_36: string
        image_48: string
        image_72: string
      }
      id: string
      name: string
      team_id: string
      updated: number
    }
    team: string
    text: string
    ts: string
    type: string
    user: string
  }
  ok: boolean
  ts: string
}

export type PostMessageResultVo =
  | PostMessageResultAsBotVo
  | PostMesssageResultAsUserVo

export type SlackLoggerNextFunction = LoggerNextFunction<
  Either<HttpError | TypeError, PostMessageResultVo>
>

export type TraitSlackLogger = TraitLogger<
  SlackLoggerContext,
  Either<HttpError | TypeError, PostMessageResultVo>
>

export class SlackLogger implements TraitSlackLogger {
  static createBody({
    asUser,
    channelId,
    fields,
    text,
    threadTs
  }: {
    asUser: boolean
    channelId: string
    fields: Record<string, string>
    text: string
    threadTs: Option<string>
  }): string {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const thread_ts: Record<string, string> = pipe(
      threadTs,
      fold(
        () => {
          return {}
        },
        (ts) => {
          return { thread_ts: ts }
        }
      )
    )

    return JSON.stringify({
      channel: channelId,
      as_user: asUser,
      ...thread_ts,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text,
            emoji: true
          }
        },
        {
          type: 'divider'
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: Object.entries(fields)
                .map(([key, value]) => {
                  return `${key}: ${value}`
                })
                .join('\n')
            }
          ]
        }
      ]
    })
  }

  constructor(private readonly fetch: FetchFn) {}

  *createSession({
    accessToken,
    channelId,
    ...rest
  }: SlackLoggerContext): Generator<
    SlackLoggerNextFunction,
    SlackLoggerNextFunction,
    boolean | undefined
  > {
    const headers: Record<string, string> = {
      'content-type': 'application/json; charset=utf-8',
      authorization: `Bearer ${accessToken}`
    }
    const partialFields = rest.partialFields ?? {}
    const asUser = rest.asUser ?? false

    let threadTs: Option<string> = none
    const postMessage: SlackLoggerNextFunction = async (log) => {
      const emoji = getEmojiFrom(log)

      const text = [emoji, log.message].join(' ')
      const fields = { ...partialFields, ...(log.fields ?? {}) }

      const fetching = this.fetch(SLACK_LOGGER_POST_URL, {
        method: 'POST',
        headers,
        body: SlackLogger.createBody({
          channelId,
          text,
          fields,
          threadTs,
          asUser
        })
      }).then<PostMessageResultVo>(async (response) => {
        if (response.ok) {
          return await response.json()
        }

        throw createHttpError(response.status, response.statusText)
      })

      const postMessageResult = await tryCatch(
        async () => await fetching,
        (error) => error as HttpError | TypeError
      )()

      if (isNone(threadTs)) {
        threadTs = pipe(
          fromEither(postMessageResult),
          map((result) => {
            return result.ts
          })
        )
      }

      return postMessageResult
    }

    let complete = false
    while (!complete) {
      complete = (yield postMessage) ?? false
    }

    return postMessage
  }
}
