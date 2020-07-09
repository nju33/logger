import {
  SLACK_LOGGER_POST_URL,
  SlackLogger,
  TraitSlackLogger
} from './slack-logger'

const divider = {
  type: 'divider'
}

describe('SlackLogger', () => {
  let fetch: jest.Mock
  let logger: TraitSlackLogger

  beforeEach(() => {
    fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        ts: '0000000000'
      })
    })

    logger = new SlackLogger(fetch)
  })

  test('create', async () => {
    const logSession = logger.createSession({
      accessToken: 'accessToken',
      channelId: 'channelId',
      partialFields: {
        url: 'url'
      }
    })

    const result = await logSession.next().value({
      type: 'info',
      message: 'info message'
    })
    expect(result)

    await logSession.next().value({
      type: 'warn',
      message: 'warn message'
    })

    await logSession.next().value({
      type: 'error',
      message: 'error message'
    })

    await logSession.next(true).value({
      type: 'complete',
      message: 'complete message'
    })

    expect(logSession.next()).toMatchObject({
      done: true
    })

    expect(fetch).toHaveBeenNthCalledWith(1, SLACK_LOGGER_POST_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        authorization: 'Bearer accessToken'
      },
      body: JSON.stringify({
        channel: 'channelId',
        as_user: false,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: 'ℹ️ info message',
              emoji: true
            }
          },
          divider,
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: Object.entries({ url: 'url' })
                  .map(([key, value]) => {
                    return `${key}: ${value}`
                  })
                  .join('\n')
              }
            ]
          }
        ]
      })
    })

    expect(fetch).toHaveBeenNthCalledWith(2, SLACK_LOGGER_POST_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        authorization: 'Bearer accessToken'
      },
      body: JSON.stringify({
        channel: 'channelId',
        as_user: false,
        thread_ts: '0000000000',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: '⚠️ warn message',
              emoji: true
            }
          },
          divider,
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: Object.entries({ url: 'url' })
                  .map(([key, value]) => {
                    return `${key}: ${value}`
                  })
                  .join('\n')
              }
            ]
          }
        ]
      })
    })

    expect(fetch).toHaveBeenNthCalledWith(3, SLACK_LOGGER_POST_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        authorization: 'Bearer accessToken'
      },
      body: JSON.stringify({
        channel: 'channelId',
        as_user: false,
        thread_ts: '0000000000',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: '🚨 error message',
              emoji: true
            }
          },
          divider,
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: Object.entries({ url: 'url' })
                  .map(([key, value]) => {
                    return `${key}: ${value}`
                  })
                  .join('\n')
              }
            ]
          }
        ]
      })
    })

    expect(fetch).toHaveBeenNthCalledWith(4, SLACK_LOGGER_POST_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8',
        authorization: 'Bearer accessToken'
      },
      body: JSON.stringify({
        channel: 'channelId',
        as_user: false,
        thread_ts: '0000000000',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: '✅ complete message',
              emoji: true
            }
          },
          divider,
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: Object.entries({ url: 'url' })
                  .map(([key, value]) => {
                    return `${key}: ${value}`
                  })
                  .join('\n')
              }
            ]
          }
        ]
      })
    })
  })
})
