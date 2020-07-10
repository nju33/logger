[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/jsonbin-logger"](_src_jsonbin_logger_.md)

# Module: "src/jsonbin-logger"

## Index

### Classes

* [JsonbinLogger](../classes/_src_jsonbin_logger_.jsonbinlogger.md)

### Interfaces

* [JsonBinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)
* [JsonBinLogVo](../interfaces/_src_jsonbin_logger_.jsonbinlogvo.md)
* [JsonbinLoggerContext](../interfaces/_src_jsonbin_logger_.jsonbinloggercontext.md)

### Type aliases

* [JsonBinLogRecordHistoryVo](_src_jsonbin_logger_.md#jsonbinlogrecordhistoryvo)
* [JsonbinLoggerNextFunction](_src_jsonbin_logger_.md#jsonbinloggernextfunction)
* [TraitJsonBinLogger](_src_jsonbin_logger_.md#traitjsonbinlogger)

## Type aliases

###  JsonBinLogRecordHistoryVo

Ƭ **JsonBinLogRecordHistoryVo**: *[LoggerLogVo](_src_logger_.md#loggerlogvo) & [JsonBinLogVo](../interfaces/_src_jsonbin_logger_.jsonbinlogvo.md)*

*Defined in [src/jsonbin-logger.ts:34](https://github.com/nju33/logger/blob/8580ee0/src/jsonbin-logger.ts#L34)*

___

###  JsonbinLoggerNextFunction

Ƭ **JsonbinLoggerNextFunction**: *[LoggerNextFunctiion](_src_logger_.md#loggernextfunctiion)‹Either‹HttpError | TypeError, PostResultBin‹[JsonBinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)› | PutResultBin‹[JsonBinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)›››*

*Defined in [src/jsonbin-logger.ts:40](https://github.com/nju33/logger/blob/8580ee0/src/jsonbin-logger.ts#L40)*

___

###  TraitJsonBinLogger

Ƭ **TraitJsonBinLogger**: *[TraitLogger](../interfaces/_src_logger_.traitlogger.md)‹[JsonbinLoggerContext](../interfaces/_src_jsonbin_logger_.jsonbinloggercontext.md), Either‹HttpError | TypeError, PostResultBin‹[JsonBinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)› | PutResultBin‹[JsonBinLogRecordVo](../interfaces/_src_jsonbin_logger_.jsonbinlogrecordvo.md)›››*

*Defined in [src/jsonbin-logger.ts:22](https://github.com/nju33/logger/blob/8580ee0/src/jsonbin-logger.ts#L22)*
