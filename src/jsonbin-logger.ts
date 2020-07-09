import { Bin, TraitBin } from '@nju33/jsonbin-api'
import { pipe } from 'fp-ts/lib/function'
import { fold, isNone, none, Option, some } from 'fp-ts/lib/Option'
import { map } from 'fp-ts/lib/TaskEither'
import {
  FetchFn,
  getEmojiFrom,
  LoggerLogVo,
  LoggerNextFunctiion,
  TraitLogger
} from './logger'

export interface JsonbinLoggerContext {
  binPrivate?: boolean
  collectionId?: string
  partialFields?: Record<string, string>
  secretKey: string
}

export type TraitJsonBinLogger = TraitLogger<JsonbinLoggerContext>

export interface JsonBinLogVo {
  emoji: string
}

export type JsonBinLogRecordHistoryVo = LoggerLogVo & JsonBinLogVo

export interface JsonBinLogRecordVo {
  history: JsonBinLogRecordHistoryVo[]
}

export class JsonbinLogger implements TraitJsonBinLogger {
  bin: TraitBin

  constructor(fetch: FetchFn) {
    this.bin = new Bin(fetch)
  }

  *createSession({
    binPrivate,
    collectionId,
    secretKey,
    ...rest
  }: JsonbinLoggerContext): Generator<
    LoggerNextFunctiion,
    LoggerNextFunctiion,
    boolean | undefined
  > {
    const partialFields = rest.partialFields ?? {}

    let binId: Option<string> = none
    const postMessage = async (log: LoggerLogVo): Promise<void> => {
      const emoji = getEmojiFrom(log)

      await pipe(
        binId,
        fold(
          () => {
            return pipe(
              this.bin.post<JsonBinLogRecordVo>({
                binPrivate,
                collectionId,
                secretKey,
                record: {
                  history: [
                    {
                      emoji,
                      type: log.type,
                      message: log.message,
                      fields: { ...partialFields, ...(log.fields ?? {}) }
                    }
                  ]
                }
              }),
              map((bin) => {
                if (isNone(binId)) {
                  binId = some(bin.metadata.id)
                }
              })
            )
          },
          (id) => {
            return pipe(
              this.bin.update<JsonBinLogRecordVo>(
                {
                  id,
                  secretKey
                },
                (getBin) => {
                  const newRecord = { ...getBin.record }

                  newRecord.history.push({
                    emoji,
                    type: log.type,
                    message: log.message,
                    fields: { ...partialFields, ...(log.fields ?? {}) }
                  })

                  return newRecord
                }
              ),
              map(() => {})
            )
          }
        )
      )()
    }

    let complete = false
    while (!complete) {
      complete = (yield postMessage) ?? false
    }

    return postMessage
  }
}
