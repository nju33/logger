[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/jsonbin-logger"](_src_jsonbin_logger_.md)

# Module: "src/jsonbin-logger"

## Index

### Classes

* [JsonbinLogger](../classes/_src_jsonbin_logger_.jsonbinlogger.md)

### Interfaces

* [JsonbinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)
* [JsonbinLogVo](../interfaces/_src_jsonbin_logger_.jsonbinlogvo.md)
* [JsonbinLoggerContext](../interfaces/_src_jsonbin_logger_.jsonbinloggercontext.md)

### Type aliases

* [JsonbinLogRecordHistoryVo](_src_jsonbin_logger_.md#jsonbinlogrecordhistoryvo)
* [JsonbinLoggerNextFunction](_src_jsonbin_logger_.md#jsonbinloggernextfunction)
* [TraitJsonbinLogger](_src_jsonbin_logger_.md#traitjsonbinlogger)

## Type aliases

###  JsonbinLogRecordHistoryVo

Ƭ **JsonbinLogRecordHistoryVo**: *[LoggerLogVo](_src_logger_.md#loggerlogvo) & [JsonbinLogVo](../interfaces/_src_jsonbin_logger_.jsonbinlogvo.md)*

*Defined in [src/jsonbin-logger.ts:35](https://github.com/nju33/logger/blob/4fb201c/src/jsonbin-logger.ts#L35)*

___

###  JsonbinLoggerNextFunction

Ƭ **JsonbinLoggerNextFunction**: *[LoggerNextFunction](_src_logger_.md#loggernextfunction)‹Either‹HttpError | TypeError, PostResultBin‹[JsonbinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)› | PutResultBin‹[JsonbinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)›››*

*Defined in [src/jsonbin-logger.ts:41](https://github.com/nju33/logger/blob/4fb201c/src/jsonbin-logger.ts#L41)*

___

###  TraitJsonbinLogger

Ƭ **TraitJsonbinLogger**: *[TraitLogger](../interfaces/_src_logger_.traitlogger.md)‹[JsonbinLoggerContext](../interfaces/_src_jsonbin_logger_.jsonbinloggercontext.md), Either‹HttpError | TypeError, PostResultBin‹[JsonbinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)› | PutResultBin‹[JsonbinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)›››*

*Defined in [src/jsonbin-logger.ts:23](https://github.com/nju33/logger/blob/4fb201c/src/jsonbin-logger.ts#L23)*
