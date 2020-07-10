[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/jsonbin-log-observer"](_src_jsonbin_log_observer_.md)

# Module: "src/jsonbin-log-observer"

## Index

### Classes

* [JsonbinLogObservre](../classes/_src_jsonbin_log_observer_.jsonbinlogobservre.md)

### Interfaces

* [JsonbinLogObserverContext](../interfaces/_src_jsonbin_log_observer_.jsonbinlogobservercontext.md)

### Type aliases

* [JsonBinLogObserverOnChange](_src_jsonbin_log_observer_.md#jsonbinlogobserveronchange)
* [TraitJsonbinLogObserver](_src_jsonbin_log_observer_.md#traitjsonbinlogobserver)

## Type aliases

###  JsonBinLogObserverOnChange

Ƭ **JsonBinLogObserverOnChange**: *function*

*Defined in [src/jsonbin-log-observer.ts:13](https://github.com/nju33/logger/blob/8580ee0/src/jsonbin-log-observer.ts#L13)*

#### Type declaration:

▸ (`entry`: object): *Promise‹unknown›*

**Parameters:**

▪ **entry**: *object*

Name | Type |
------ | ------ |
`current` | GetResultBin‹[JsonBinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)› |
`prev` | Option‹GetResultBin‹[JsonBinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)›› |

___

###  TraitJsonbinLogObserver

Ƭ **TraitJsonbinLogObserver**: *[TraitObserver](../interfaces/_src_observer_.traitobserver.md)‹[JsonbinLogObserverContext](../interfaces/_src_jsonbin_log_observer_.jsonbinlogobservercontext.md)›*

*Defined in [src/jsonbin-log-observer.ts:18](https://github.com/nju33/logger/blob/8580ee0/src/jsonbin-log-observer.ts#L18)*
