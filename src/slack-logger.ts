import { isNone, none, Option, some } from 'fp-ts/lib/Option'
import createHttpError from 'http-errors'
import {
  FetchFn,
  getEmojiFrom,
  LoggerLogVo,
  LoggerNextFunctiion,
  TraitLogger
} from './logger'

export interface SlackLoggerContext {
  accessToken: string
  channelId: string
  partialFields?: Record<string, string>
}

export const SLACK_LOGGER_POST_URL = 'https://slack.com/api/chat.postMessage'

export type TraitSlackLogger = TraitLogger<SlackLoggerContext>

export class SlackLogger implements TraitSlackLogger {
  static createBody({
    channelId,
    fields,
    text
  }: {
    channelId: string
    fields: Record<string, string>
    text: string
  }): string {
    return JSON.stringify({
      channel: channelId,
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
    LoggerNextFunctiion,
    LoggerNextFunctiion,
    boolean | undefined
  > {
    const headers: Record<string, string> = {
      'content-type': 'application/json; charset=utf-8',
      authorization: `Bearer ${accessToken}`
    }
    const partialFields = rest.partialFields ?? {}

    let threadTs: Option<string> = none
    const postMessage = async (log: LoggerLogVo): Promise<void> => {
      const emoji = getEmojiFrom(log)

      const text = [emoji, log.message].join(' ')
      const fields = { ...partialFields, ...(log.fields ?? {}) }

      const fetching = this.fetch(SLACK_LOGGER_POST_URL, {
        method: 'POST',
        headers,
        body: SlackLogger.createBody({ channelId, text, fields })
      }).then<{ ts: string }>(async (response) => {
        if (response.ok) {
          return await response.json()
        }

        throw createHttpError(response.status, response.statusText)
      })

      if (isNone(threadTs)) {
        threadTs = some((await fetching).ts)
      }
    }

    let complete = false
    while (!complete) {
      complete = (yield postMessage) ?? false
    }

    return postMessage
  }
}
