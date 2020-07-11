[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/logger"](../modules/_src_logger_.md) › [TraitLogger](_src_logger_.traitlogger.md)

# Interface: TraitLogger ‹**Context, LoggerNextFunctionResult**›

## Type parameters

▪ **Context**: *object*

▪ **LoggerNextFunctionResult**

## Hierarchy

* **TraitLogger**

## Implemented by

* [JsonbinLogger](../classes/_src_jsonbin_logger_.jsonbinlogger.md)
* [SlackLogger](../classes/_src_slack_logger_.slacklogger.md)

## Index

### Properties

* [createSession](_src_logger_.traitlogger.md#createsession)

## Properties

###  createSession

• **createSession**: *function*

*Defined in [src/logger.ts:53](https://github.com/nju33/logger/blob/7022c1f/src/logger.ts#L53)*

#### Type declaration:

▸ (`context`: Context): *Generator‹[LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion)‹LoggerNextFunctionResult›, [LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion)‹LoggerNextFunctionResult›, boolean | undefined›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | Context |
