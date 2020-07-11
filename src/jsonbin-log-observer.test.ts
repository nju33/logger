import * as O from 'fp-ts/lib/Option'
import {
  JsonbinLogObserver,
  TraitJsonbinLogObserver
} from './jsonbin-log-observer'

describe('JsonbiinLogObserver', () => {
  jest.useFakeTimers()

  let bin: Record<string, any>
  let fetch: jest.Mock
  let observer: TraitJsonbinLogObserver
  let onChange: jest.Mock

  beforeEach(() => {
    bin = {
      metadata: { id: 'foo' },
      record: { history: [] }
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

    jest.advanceTimersByTime(5000)

    setImmediate(() => {
      expect(onChange).toHaveBeenCalledWith({
        prev: O.none,
        current: bin
      })
    })
  })
})
