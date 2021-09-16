import { LoggerLogVo, TraitLogger } from './logger'

export interface TraitIssuer {
  compose: (
    ...loggerSessions: Array<ReturnType<TraitLogger<object>['createSession']>>
  ) => {
    issue: (log: LoggerLogVo) => Promise<void>
  }
}

export class Issuer implements TraitIssuer {
  compose(
    ...loggerSessions: Array<ReturnType<TraitLogger<object>['createSession']>>
  ): {
    issue: (log: LoggerLogVo) => Promise<void>
  } {
    return {
      async issue(log) {
        loggerSessions.map((loggerSession) => {
          const next = loggerSession.next()
          if (typeof next.value === 'function') {
            return next.value(log)
          }

          return Promise.resolve()
        })
      }
    }
  }
}
