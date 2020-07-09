[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/jsonbin-logger"](../modules/_src_jsonbin_logger_.md) › [JsonbinLogger](_src_jsonbin_logger_.jsonbinlogger.md)

# Class: JsonbinLogger

## Hierarchy

* **JsonbinLogger**

## Implements

* [TraitLogger](../interfaces/_src_logger_.traitlogger.md)

## Index

### Constructors

* [constructor](_src_jsonbin_logger_.jsonbinlogger.md#constructor)

### Properties

* [bin](_src_jsonbin_logger_.jsonbinlogger.md#bin)

### Methods

* [createSession](_src_jsonbin_logger_.jsonbinlogger.md#createsession)

## Constructors

###  constructor

\+ **new JsonbinLogger**(`fetch`: [FetchFn](../modules/_src_logger_.md#fetchfn)): *[JsonbinLogger](_src_jsonbin_logger_.jsonbinlogger.md)*

*Defined in [src/jsonbin-logger.ts:33](https://github.com/nju33/logger/blob/22b1f74/src/jsonbin-logger.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`fetch` | [FetchFn](../modules/_src_logger_.md#fetchfn) |

**Returns:** *[JsonbinLogger](_src_jsonbin_logger_.jsonbinlogger.md)*

## Properties

###  bin

• **bin**: *TraitBin*

*Defined in [src/jsonbin-logger.ts:33](https://github.com/nju33/logger/blob/22b1f74/src/jsonbin-logger.ts#L33)*

## Methods

###  createSession

▸ **createSession**(`__namedParameters`: object): *Generator‹[LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), [LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), boolean | undefined›*

*Defined in [src/jsonbin-logger.ts:39](https://github.com/nju33/logger/blob/22b1f74/src/jsonbin-logger.ts#L39)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`binPrivate` | undefined &#124; false &#124; true |
`collectionId` | undefined &#124; string |
`rest` | rest |
`secretKey` | string |

**Returns:** *Generator‹[LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), [LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), boolean | undefined›*
