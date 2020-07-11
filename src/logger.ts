// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference lib="dom" />

export type FetchFn = typeof fetch

export interface LoggerLogCommonVo {
  /**
   * 追加フィールド
   */
  fields?: Record<string, string>
  /**
   * メインメッセージ
   */
  message: string
}

export interface LoggerInfoLogVo extends LoggerLogCommonVo {
  type: 'info'
}

export interface LoggerWarnLogVo extends LoggerLogCommonVo {
  type: 'warn'
}

export interface LoggerErrorLogVo extends LoggerLogCommonVo {
  type: 'error'
}

export interface LoggerCompleteLogVo extends LoggerLogCommonVo {
  type: 'complete'
}

// export interface LoggerContext {
//   accessToken: string
//   channelId: string
//   partialFields?: Record<string, string>
// }

export type LoggerLogVo =
  | LoggerInfoLogVo
  | LoggerWarnLogVo
  | LoggerErrorLogVo
  | LoggerCompleteLogVo

export type LoggerNextFunction<LoggerNextFunctionResult> = (
  log: LoggerLogVo
) => PromiseLike<LoggerNextFunctionResult>

export interface TraitLogger<
  Context extends object,
  LoggerNextFunctionResult = unknown
> {
  createSession: (
    context: Context
  ) => Generator<
    LoggerNextFunction<LoggerNextFunctionResult>,
    LoggerNextFunction<LoggerNextFunctionResult>,
    boolean | undefined
  >
}
/**
 * Returns the specific symbol
 *
 * @param log - target log
 */
export function getEmojiFrom(log: LoggerLogVo): string {
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
