import { Bin, GetResultBin, TraitBin } from '@nju33/jsonbin-api'
import { pipe } from 'fp-ts/lib/function'
import { isNone, none, Option, some } from 'fp-ts/lib/Option'
import { map } from 'fp-ts/lib/TaskEither'
import { JsonBinLogRecordVo } from './jsonbin-logger'
import { FetchFn } from './logger'
import { TraitObserver } from './observer'

export interface JsonbinLogObserverContext {
  secretKey: string
}

export type JsonBinLogObserverOnChange = (entry: {
  binId: string
  current: GetResultBin<JsonBinLogRecordVo>
  prev: Option<GetResultBin<JsonBinLogRecordVo>>
}) => Promise<unknown>

export type TraitJsonbinLogObserver = TraitObserver<JsonbinLogObserverContext>

export class JsonbinLogObserver implements TraitJsonbinLogObserver {
  private readonly bin: TraitBin
  private readonly keys: Readonly<Set<string>>
  private prev: Option<GetResultBin<JsonBinLogRecordVo>>

  constructor(
    fetch: FetchFn,
    private readonly onChange: JsonBinLogObserverOnChange
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
    if (!this.keys.has(binId)) {
      return
    }

    await pipe(
      this.bin.get<JsonBinLogRecordVo>({
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

  async observe(
    binId: string,
    intervalMsec: number,
    context: JsonbinLogObserverContext
  ): Promise<void> {
    this.keys.add(binId)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const _ of this.createPeriodicallyProcess(
      binId,
      intervalMsec,
      context
    )) {
    }
  }

  unobserve(binId: string): void {
    this.keys.delete(binId)
  }

  disconnect(): void {
    this.keys.clear()
  }
}