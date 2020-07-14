[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/jsonbin-log-observer"](_src_jsonbin_log_observer_.md)

# Module: "src/jsonbin-log-observer"

## Index

### Classes

* [JsonbinLogObserver](../classes/_src_jsonbin_log_observer_.jsonbinlogobserver.md)

### Interfaces

* [JsonbinLogObserverContext](../interfaces/_src_jsonbin_log_observer_.jsonbinlogobservercontext.md)

### Type aliases

* [JsonbinLogObserverOnChange](_src_jsonbin_log_observer_.md#jsonbinlogobserveronchange)
* [TraitJsonbinLogObserver](_src_jsonbin_log_observer_.md#traitjsonbinlogobserver)

## Type aliases

###  JsonbinLogObserverOnChange

Ƭ **JsonbinLogObserverOnChange**: *function*

*Defined in [src/jsonbin-log-observer.ts:13](https://github.com/nju33/logger/blob/ae39cd9/src/jsonbin-log-observer.ts#L13)*

#### Type declaration:

▸ (`entry`: object): *Promise‹unknown›*

**Parameters:**

▪ **entry**: *object*

Name | Type |
------ | ------ |
`binId` | string |
`current` | GetResultBin‹[JsonbinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)› |
`prev` | Option‹GetResultBin‹[JsonbinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)›› |

___

###  TraitJsonbinLogObserver

Ƭ **TraitJsonbinLogObserver**: *[TraitObserver](../interfaces/_src_observer_.traitobserver.md)‹[JsonbinLogObserverContext](../interfaces/_src_jsonbin_log_observer_.jsonbinlogobservercontext.md)›*

*Defined in [src/jsonbin-log-observer.ts:19](https://github.com/nju33/logger/blob/ae39cd9/src/jsonbin-log-observer.ts#L19)*
