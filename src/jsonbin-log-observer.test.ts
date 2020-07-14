import * as O from 'fp-ts/lib/Option'
import {
  JsonbinLogObserver,
  TraitJsonbinLogObserver
} from './jsonbin-log-observer'

describe('JsonbiinLogObserver', () => {
  jest.useFakeTimers()

  const metadata = { id: 'foo' }
  let prevBin: O.Option<Record<string, any>>
  let bin: Record<string, any>
  let fetch: jest.Mock
  let observer: TraitJsonbinLogObserver
  let onChange: jest.Mock

  beforeEach(() => {
    prevBin = O.none
    bin = {
      metadata,
      record: {
        history: []
      }
    }
    fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(bin)
    })
    onChange = jest.fn()

    observer = new JsonbinLogObserver(fetch, onChange)
  })

  test('observe', async () => {
    // eslint-disable-next-line no-void
    void observer.observe('key', 2000, { secretKey: 'secretKey' })

    jest.advanceTimersByTime(2000)
    await new Promise((resolve) => {
      setImmediate(() => {
        expect(onChange).toHaveBeenNthCalledWith(1, {
          binId: 'key',
          prev: prevBin,
          current: bin
        })
      })

      prevBin = O.some(bin)
      bin = {
        metadata,
        record: {
          history: [{ type: 'info', message: 'foo' }]
        }
      }

      resolve()
    })

    jest.advanceTimersByTime(2000)
    await new Promise((resolve) => {
      setImmediate(() => {
        expect(onChange).toHaveBeenNthCalledWith(2, {
          binId: 'key',
          prev: prevBin,
          current: bin
        })
      })

      prevBin = O.some(bin)
      bin = {
        metadata,
        record: {
          history: [{ type: 'info', message: 'foo' }]
        }
      }

      resolve()
    })

    observer.unobserve('foo')
    onChange.mockClear()
    await new Promise((resolve) => {
      setImmediate(() => {
        expect(onChange).not.toHaveBeenCalled()
      })

      resolve()
    })
  })
})
