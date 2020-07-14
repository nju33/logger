[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/logger"](_src_logger_.md)

# Module: "src/logger"

## Index

### Interfaces

* [LoggerCompleteLogVo](../interfaces/_src_logger_.loggercompletelogvo.md)
* [LoggerErrorLogVo](../interfaces/_src_logger_.loggererrorlogvo.md)
* [LoggerInfoLogVo](../interfaces/_src_logger_.loggerinfologvo.md)
* [LoggerLogCommonVo](../interfaces/_src_logger_.loggerlogcommonvo.md)
* [LoggerWarnLogVo](../interfaces/_src_logger_.loggerwarnlogvo.md)
* [TraitLogger](../interfaces/_src_logger_.traitlogger.md)

### Type aliases

* [FetchFn](_src_logger_.md#fetchfn)
* [LoggerLogVo](_src_logger_.md#loggerlogvo)
* [LoggerNextFunction](_src_logger_.md#loggernextfunction)

### Functions

* [getEmojiFrom](_src_logger_.md#getemojifrom)

## Type aliases

###  FetchFn

Ƭ **FetchFn**: *typeof fetch*

*Defined in [src/logger.ts:4](https://github.com/nju33/logger/blob/1e8320c/src/logger.ts#L4)*

___

###  LoggerLogVo

Ƭ **LoggerLogVo**: *[LoggerInfoLogVo](../interfaces/_src_logger_.loggerinfologvo.md) | [LoggerWarnLogVo](../interfaces/_src_logger_.loggerwarnlogvo.md) | [LoggerErrorLogVo](../interfaces/_src_logger_.loggererrorlogvo.md) | [LoggerCompleteLogVo](../interfaces/_src_logger_.loggercompletelogvo.md)*

*Defined in [src/logger.ts:33](https://github.com/nju33/logger/blob/1e8320c/src/logger.ts#L33)*

___

###  LoggerNextFunction

Ƭ **LoggerNextFunction**: *function*

*Defined in [src/logger.ts:39](https://github.com/nju33/logger/blob/1e8320c/src/logger.ts#L39)*

#### Type declaration:

▸ (`log`: [LoggerLogVo](_src_logger_.md#loggerlogvo)): *PromiseLike‹LoggerNextFunctionResult›*

**Parameters:**

Name | Type |
------ | ------ |
`log` | [LoggerLogVo](_src_logger_.md#loggerlogvo) |

## Functions

###  getEmojiFrom

▸ **getEmojiFrom**(`log`: [LoggerLogVo](_src_logger_.md#loggerlogvo)): *string*

*Defined in [src/logger.ts:60](https://github.com/nju33/logger/blob/1e8320c/src/logger.ts#L60)*

Returns the specific symbol

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`log` | [LoggerLogVo](_src_logger_.md#loggerlogvo) | target log  |

**Returns:** *string*
