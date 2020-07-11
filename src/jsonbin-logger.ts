import { Bin, PostResultBin, PutResultBin, TraitBin } from '@nju33/jsonbin-api'
import { Either } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import { fold, isNone, none, Option, some } from 'fp-ts/lib/Option'
import { map, TaskEither } from 'fp-ts/lib/TaskEither'
import { HttpError } from 'http-errors'
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

export type TraitJsonbinLogger = TraitLogger<
  JsonbinLoggerContext,
  Either<
    HttpError | TypeError,
    PostResultBin<JsonbinLogRecordVo> | PutResultBin<JsonbinLogRecordVo>
  >
>

export interface JsonbinLogVo {
  emoji: string
}

export type JsonbinLogRecordHistoryVo = LoggerLogVo & JsonbinLogVo

export interface JsonbinLogRecordVo {
  history: JsonbinLogRecordHistoryVo[]
}

export type JsonbinLoggerNextFunction = LoggerNextFunctiion<
  Either<
    HttpError | TypeError,
    PostResultBin<JsonbinLogRecordVo> | PutResultBin<JsonbinLogRecordVo>
  >
>

export class JsonbinLogger implements TraitJsonbinLogger {
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
    JsonbinLoggerNextFunction,
    JsonbinLoggerNextFunction,
    boolean | undefined
  > {
    const partialFields = rest.partialFields ?? {}

    let binId: Option<string> = none
    const postMessage: JsonbinLoggerNextFunction = async (log) => {
      const emoji = getEmojiFrom(log)

      return await pipe(
        binId,
        fold<
          string,
          TaskEither<
            HttpError | TypeError,
            PostResultBin<JsonbinLogRecordVo> | PutResultBin<JsonbinLogRecordVo>
          >
        >(
          () => {
            return pipe(
              this.bin.post<JsonbinLogRecordVo>({
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

                return bin
              })
            )
          },
          (id) => {
            return pipe(
              this.bin.update<JsonbinLogRecordVo>(
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
              map((bin) => bin)
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
