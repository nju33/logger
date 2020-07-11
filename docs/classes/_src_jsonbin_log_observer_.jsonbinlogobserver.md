[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/jsonbin-log-observer"](../modules/_src_jsonbin_log_observer_.md) › [JsonbinLogObserver](_src_jsonbin_log_observer_.jsonbinlogobserver.md)

# Class: JsonbinLogObserver

## Hierarchy

* **JsonbinLogObserver**

## Implements

* [TraitObserver](../interfaces/_src_observer_.traitobserver.md)

## Index

### Constructors

* [constructor](_src_jsonbin_log_observer_.jsonbinlogobserver.md#constructor)

### Properties

* [bin](_src_jsonbin_log_observer_.jsonbinlogobserver.md#private-readonly-bin)
* [keys](_src_jsonbin_log_observer_.jsonbinlogobserver.md#private-readonly-keys)
* [onChange](_src_jsonbin_log_observer_.jsonbinlogobserver.md#private-readonly-onchange)
* [prev](_src_jsonbin_log_observer_.jsonbinlogobserver.md#private-prev)

### Methods

* [createPeriodicallyProcess](_src_jsonbin_log_observer_.jsonbinlogobserver.md#private-createperiodicallyprocess)
* [disconnect](_src_jsonbin_log_observer_.jsonbinlogobserver.md#disconnect)
* [observe](_src_jsonbin_log_observer_.jsonbinlogobserver.md#observe)
* [unobserve](_src_jsonbin_log_observer_.jsonbinlogobserver.md#unobserve)

## Constructors

###  constructor

\+ **new JsonbinLogObserver**(`fetch`: [FetchFn](../modules/_src_logger_.md#fetchfn), `onChange`: [JsonBinLogObserverOnChange](../modules/_src_jsonbin_log_observer_.md#jsonbinlogobserveronchange)): *[JsonbinLogObserver](_src_jsonbin_log_observer_.jsonbinlogobserver.md)*

*Defined in [src/jsonbin-log-observer.ts:23](https://github.com/nju33/logger/blob/54eead8/src/jsonbin-log-observer.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`fetch` | [FetchFn](../modules/_src_logger_.md#fetchfn) |
`onChange` | [JsonBinLogObserverOnChange](../modules/_src_jsonbin_log_observer_.md#jsonbinlogobserveronchange) |

**Returns:** *[JsonbinLogObserver](_src_jsonbin_log_observer_.jsonbinlogobserver.md)*

## Properties

### `Private` `Readonly` bin

• **bin**: *TraitBin*

*Defined in [src/jsonbin-log-observer.ts:21](https://github.com/nju33/logger/blob/54eead8/src/jsonbin-log-observer.ts#L21)*

___

### `Private` `Readonly` keys

• **keys**: *Readonly‹Set‹string››*

*Defined in [src/jsonbin-log-observer.ts:22](https://github.com/nju33/logger/blob/54eead8/src/jsonbin-log-observer.ts#L22)*

___

### `Private` `Readonly` onChange

• **onChange**: *[JsonBinLogObserverOnChange](../modules/_src_jsonbin_log_observer_.md#jsonbinlogobserveronchange)*

*Defined in [src/jsonbin-log-observer.ts:27](https://github.com/nju33/logger/blob/54eead8/src/jsonbin-log-observer.ts#L27)*

___

### `Private` prev

• **prev**: *Option‹GetResultBin‹[JsonBinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)››*

*Defined in [src/jsonbin-log-observer.ts:23](https://github.com/nju33/logger/blob/54eead8/src/jsonbin-log-observer.ts#L23)*

## Methods

### `Private` createPeriodicallyProcess

▸ **createPeriodicallyProcess**(`binId`: string, `intervalMsec`: number, `__namedParameters`: object): *AsyncGenerator‹void, void, void›*

*Defined in [src/jsonbin-log-observer.ts:34](https://github.com/nju33/logger/blob/54eead8/src/jsonbin-log-observer.ts#L34)*

**Parameters:**

▪ **binId**: *string*

▪ **intervalMsec**: *number*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`secretKey` | string |

**Returns:** *AsyncGenerator‹void, void, void›*

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [src/jsonbin-log-observer.ts:98](https://github.com/nju33/logger/blob/54eead8/src/jsonbin-log-observer.ts#L98)*

**Returns:** *void*

___

###  observe

▸ **observe**(`binId`: string, `intervalMsec`: number, `context`: [JsonbinLogObserverContext](../interfaces/_src_jsonbin_log_observer_.jsonbinlogobservercontext.md)): *Promise‹void›*

*Defined in [src/jsonbin-log-observer.ts:78](https://github.com/nju33/logger/blob/54eead8/src/jsonbin-log-observer.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`binId` | string |
`intervalMsec` | number |
`context` | [JsonbinLogObserverContext](../interfaces/_src_jsonbin_log_observer_.jsonbinlogobservercontext.md) |

**Returns:** *Promise‹void›*

___

###  unobserve

▸ **unobserve**(`binId`: string): *void*

*Defined in [src/jsonbin-log-observer.ts:94](https://github.com/nju33/logger/blob/54eead8/src/jsonbin-log-observer.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`binId` | string |

**Returns:** *void*
