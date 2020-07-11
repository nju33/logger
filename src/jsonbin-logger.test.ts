import * as E from 'fp-ts/lib/Either'
import { JsonbinLogger, TraitJsonbinLogger } from './jsonbin-logger'

describe('JsonbinLogger', () => {
  let fetch: jest.Mock
  let history: any[] = []
  const resetFetch = (): void => {
    history = []

    fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        metadata: { id: 'foo' },
        record: { history }
      })
    })
  }
  let logger: TraitJsonbinLogger

  beforeEach(() => {
    resetFetch()

    logger = new JsonbinLogger(fetch)
  })

  test('create', async () => {
    const logSession = logger.createSession({
      secretKey: 'secretKey',
      binPrivate: true,
      collectionId: 'collectionId',
      partialFields: { foo: 'bar' }
    })

    const bin = await logSession.next().value({
      type: 'info',
      message: 'info message'
    })

    expect(bin).toMatchObject(
      E.right({
        metadata: {
          id: 'foo'
        }
      })
    )

    expect(fetch).toHaveBeenNthCalledWith(1, 'https://api.jsonbin.io/v3/b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Master-Key': 'secretKey',
        'X-Bin-Private': 'true',
        'X-Collection-Id': 'collectionId'
      },
      body: JSON.stringify({
        history: [
          {
            emoji: 'ℹ️',
            type: 'info',
            message: 'info message',
            fields: { foo: 'bar' }
          }
        ]
      })
    })

    history.length = 0

    await logSession.next().value({
      type: 'warn',
      message: 'warn message'
    })

    expect(fetch).toHaveBeenNthCalledWith(
      2,
      'https://api.jsonbin.io/v3/b/foo',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-Master-Key': 'secretKey'
        }
      }
    )

    expect(fetch).toHaveBeenNthCalledWith(
      3,
      'https://api.jsonbin.io/v3/b/foo',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-Master-Key': 'secretKey'
        },
        body: JSON.stringify({
          history: [
            {
              emoji: '⚠️',
              type: 'warn',
              message: 'warn message',
              fields: { foo: 'bar' }
            }
          ]
        })
      }
    )

    history.length = 0

    await logSession.next().value({
      type: 'error',
      message: 'error message'
    })

    expect(fetch).toHaveBeenNthCalledWith(
      5,
      'https://api.jsonbin.io/v3/b/foo',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-Master-Key': 'secretKey'
        },
        body: JSON.stringify({
          history: [
            {
              emoji: '🚨',
              type: 'error',
              message: 'error message',
              fields: { foo: 'bar' }
            }
          ]
        })
      }
    )

    history.length = 0

    await logSession.next(true).value({
      type: 'complete',
      message: 'complete message'
    })

    expect(fetch).toHaveBeenNthCalledWith(
      7,
      'https://api.jsonbin.io/v3/b/foo',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-Master-Key': 'secretKey'
        },
        body: JSON.stringify({
          history: [
            {
              emoji: '✅',
              type: 'complete',
              message: 'complete message',
              fields: { foo: 'bar' }
            }
          ]
        })
      }
    )

    expect(logSession.next()).toMatchObject({
      done: true
    })
  })
})
