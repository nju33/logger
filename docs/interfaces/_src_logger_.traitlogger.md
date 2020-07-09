[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/logger"](../modules/_src_logger_.md) › [TraitLogger](_src_logger_.traitlogger.md)

# Interface: TraitLogger ‹**Context**›

## Type parameters

▪ **Context**: *object*

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

*Defined in [src/logger.ts:48](https://github.com/nju33/logger/blob/22b1f74/src/logger.ts#L48)*

#### Type declaration:

▸ (`context`: Context): *Generator‹[LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), [LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), boolean | undefined›*

**Parameters:**

Name | Type |
------ | ------ |
`context` | Context |
