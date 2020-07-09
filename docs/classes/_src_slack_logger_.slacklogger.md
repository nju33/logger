[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/slack-logger"](../modules/_src_slack_logger_.md) › [SlackLogger](_src_slack_logger_.slacklogger.md)

# Class: SlackLogger

## Hierarchy

* **SlackLogger**

## Implements

* [TraitLogger](../interfaces/_src_logger_.traitlogger.md)

## Index

### Constructors

* [constructor](_src_slack_logger_.slacklogger.md#constructor)

### Properties

* [fetch](_src_slack_logger_.slacklogger.md#private-readonly-fetch)

### Methods

* [createSession](_src_slack_logger_.slacklogger.md#createsession)
* [createBody](_src_slack_logger_.slacklogger.md#static-createbody)

## Constructors

###  constructor

\+ **new SlackLogger**(`fetch`: [FetchFn](../modules/_src_logger_.md#fetchfn)): *[SlackLogger](_src_slack_logger_.slacklogger.md)*

*Defined in [src/slack-logger.ts:60](https://github.com/nju33/logger/blob/22b1f74/src/slack-logger.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`fetch` | [FetchFn](../modules/_src_logger_.md#fetchfn) |

**Returns:** *[SlackLogger](_src_slack_logger_.slacklogger.md)*

## Properties

### `Private` `Readonly` fetch

• **fetch**: *[FetchFn](../modules/_src_logger_.md#fetchfn)*

*Defined in [src/slack-logger.ts:62](https://github.com/nju33/logger/blob/22b1f74/src/slack-logger.ts#L62)*

## Methods

###  createSession

▸ **createSession**(`__namedParameters`: object): *Generator‹[LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), [LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), boolean | undefined›*

*Defined in [src/slack-logger.ts:64](https://github.com/nju33/logger/blob/22b1f74/src/slack-logger.ts#L64)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`accessToken` | string |
`channelId` | string |
`rest` | rest |

**Returns:** *Generator‹[LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), [LoggerNextFunctiion](../modules/_src_logger_.md#loggernextfunctiion), boolean | undefined›*

___

### `Static` createBody

▸ **createBody**(`__namedParameters`: object): *string*

*Defined in [src/slack-logger.ts:22](https://github.com/nju33/logger/blob/22b1f74/src/slack-logger.ts#L22)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`channelId` | string |
`fields` | object |
`text` | string |

**Returns:** *string*
