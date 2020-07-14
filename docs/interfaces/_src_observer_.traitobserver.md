[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/observer"](../modules/_src_observer_.md) › [TraitObserver](_src_observer_.traitobserver.md)

# Interface: TraitObserver ‹**Context**›

## Type parameters

▪ **Context**: *object*

## Hierarchy

* **TraitObserver**

## Implemented by

* [JsonbinLogObserver](../classes/_src_jsonbin_log_observer_.jsonbinlogobserver.md)

## Index

### Properties

* [disconnect](_src_observer_.traitobserver.md#disconnect)
* [observe](_src_observer_.traitobserver.md#observe)
* [unobserve](_src_observer_.traitobserver.md#unobserve)

## Properties

###  disconnect

• **disconnect**: *function*

*Defined in [src/observer.ts:2](https://github.com/nju33/logger/blob/2cda14a/src/observer.ts#L2)*

#### Type declaration:

▸ (): *void*

___

###  observe

• **observe**: *function*

*Defined in [src/observer.ts:3](https://github.com/nju33/logger/blob/2cda14a/src/observer.ts#L3)*

#### Type declaration:

▸ (`key`: string, `intervalMsec`: number, `context`: Context): *void | PromiseLike‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`intervalMsec` | number |
`context` | Context |

___

###  unobserve

• **unobserve**: *function*

*Defined in [src/observer.ts:8](https://github.com/nju33/logger/blob/2cda14a/src/observer.ts#L8)*

#### Type declaration:

▸ (`key`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
