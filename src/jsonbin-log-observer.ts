import { Bin, GetResultBin, TraitBin } from '@nju33/jsonbin-api'
import { pipe } from 'fp-ts/lib/function'
import { isNone, none, Option, some } from 'fp-ts/lib/Option'
import { map } from 'fp-ts/lib/TaskEither'
import { JsonbinLogRecordVo } from './jsonbin-logger'
import { FetchFn } from './logger'
import { TraitObserver } from './observer'

export interface JsonbinLogObserverContext {
  secretKey: string
}

export type JsonbinLogObserverOnChange = (entry: {
  binId: string
  current: GetResultBin<JsonbinLogRecordVo>
  prev: Option<GetResultBin<JsonbinLogRecordVo>>
}) => Promise<unknown>

export type TraitJsonbinLogObserver = TraitObserver<JsonbinLogObserverContext>

export class JsonbinLogObserver implements TraitJsonbinLogObserver {
  private readonly bin: TraitBin
  private readonly keys: Readonly<Set<string>>
  private prev: Option<GetResultBin<JsonbinLogRecordVo>>

  constructor(
    fetch: FetchFn,
    private readonly onChange: JsonbinLogObserverOnChange
  ) {
    this.bin = new Bin(fetch)
    this.keys = new Set()
    this.prev = none
  }

  private async *createPeriodicallyProcess(
    binId: string,
    intervalMsec: number,
    { secretKey }: JsonbinLogObserverContext
  ): AsyncGenerator<void, void, void> {
    while (true) {
      if (!this.keys.has(binId)) {
        return
      }

      await pipe(
        this.bin.get<JsonbinLogRecordVo>({
          id: binId,
          secretKey
        }),
        map((bin) => {
          if (isNone(this.prev)) {
            this.prev = some(bin)

            // eslint-disable-next-line no-void
            void this.onChange({
              binId: binId,
              current: bin,
              prev: this.prev
            })
          } else if (
            this.prev.value.record.history.length < bin.record.history.length
          ) {
            // eslint-disable-next-line no-void
            void this.onChange({
              binId: binId,
              current: bin,
              prev: this.prev
            })

            this.prev = some(bin)
          }
        })
      )()

      await new Promise((resolve) => {
        setTimeout(resolve, intervalMsec)
      })

      yield
    }
  }

  async observe(
    binId: string,
    intervalMsec: number,
    context: JsonbinLogObserverContext
  ): Promise<void> {
    this.keys.add(binId)

    const process = this.createPeriodicallyProcess(binId, intervalMsec, context)
    let next = await process.next()
    while (!(typeof next.done === 'boolean' && next.done)) {
      next = await process.next()
    }
    /**
     * 以下は commonjs 化し、`regenerator-runtime`と共に使うと
     * 以下のエラーを引き起こす
     *
     * "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed
     *   - JavaScript heap out of memory"
     */
    // for await (const _ of this.createPeriodicallyProcess(
    //   binId,
    //   intervalMsec,
    //   context
    // )) {
    // }
  }

  unobserve(binId: string): void {
    this.keys.delete(binId)
    this.prev = none
  }

  disconnect(): void {
    this.keys.clear()
    this.prev = none
  }
}
