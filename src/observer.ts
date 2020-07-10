export interface TraitObserver<Context extends object> {
  disconnect: () => void
  observe: (
    key: string,
    intervalMsec: number,
    context: Context
  ) => void | PromiseLike<void>
  unobserve: (key: string) => void
}
