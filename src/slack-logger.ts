// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference lib="dom" />

import { isNone, none, Option, some } from 'fp-ts/lib/Option'
import createHttpError from 'http-errors'

export interface SlackLoggerContext {
  accessToken: string
  channelId: string
  partialFields?: Record<string, string>
}

export type SlackLoggerNextFunctiion = (log: SlackLog) => PromiseLike<void>

export interface TraitSlackLogger {
  createSession: (
    context: SlackLoggerContext
  ) => Generator<
    SlackLoggerNextFunctiion,
    SlackLoggerNextFunctiion,
    boolean | undefined
  >
}

export interface SlackLogCommon {
  /**
   * 追加フィールド
   */
  fields?: Record<string, string>
  /**
   * メインメッセージ
   */
  message: string
}

export interface SlackInfoLog extends SlackLogCommon {
  type: 'info'
}

export interface SlackWarnLog extends SlackLogCommon {
  type: 'warn'
}

export interface SlackErrorLog extends SlackLogCommon {
  type: 'error'
}

export interface SlackCompleteLog extends SlackLogCommon {
  type: 'complete'
}

export type SlackLog =
  | SlackInfoLog
  | SlackWarnLog
  | SlackErrorLog
  | SlackCompleteLog

export const POST_URL = 'https://slack.com/api/chat.postMessage'

export type FetchFn = typeof fetch

export class SlackLogger implements TraitSlackLogger {
  static getEmojiFrom(log: SlackLog): string {
    if (log.type === 'info') {
      return 'ℹ️'
    }

    if (log.type === 'warn') {
      return '⚠️'
    }

    if (log.type === 'error') {
      return '🚨'
    }

    if (log.type === 'complete') {
      return '✅'
    }

    return '🤕'
  }

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
    SlackLoggerNextFunctiion,
    SlackLoggerNextFunctiion,
    boolean | undefined
  > {
    const headers: Record<string, string> = {
      'content-type': 'application/json; charset=utf-8',
      authorization: `Bearer ${accessToken}`
    }
    const partialFields = rest.partialFields ?? {}

    let threadTs: Option<string> = none
    const postMessage = async (log: SlackLog): Promise<void> => {
      const emoji = SlackLogger.getEmojiFrom(log)

      const text = [emoji, log.message].join(' ')
      const fields = { ...partialFields, ...(log.fields ?? {}) }

      const fetching = this.fetch(POST_URL, {
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
