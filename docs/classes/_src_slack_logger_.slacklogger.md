[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/slack-logger"](../modules/_src_slack_logger_.md) › [SlackLogger](_src_slack_logger_.slacklogger.md)

# Class: SlackLogger

## Hierarchy

* **SlackLogger**

## Implements

* [TraitSlackLogger](../interfaces/_src_slack_logger_.traitslacklogger.md)

## Index

### Constructors

* [constructor](_src_slack_logger_.slacklogger.md#constructor)

### Properties

* [fetch](_src_slack_logger_.slacklogger.md#private-readonly-fetch)

### Methods

* [createSession](_src_slack_logger_.slacklogger.md#createsession)
* [createBody](_src_slack_logger_.slacklogger.md#static-createbody)
* [getEmojiFrom](_src_slack_logger_.slacklogger.md#static-getemojifrom)

## Constructors

###  constructor

\+ **new SlackLogger**(`fetch`: [FetchFn](../modules/_src_slack_logger_.md#fetchfn)): *[SlackLogger](_src_slack_logger_.slacklogger.md)*

*Defined in [src/slack-logger.ts:121](https://github.com/nju33/logger/blob/0e8d412/src/slack-logger.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`fetch` | [FetchFn](../modules/_src_slack_logger_.md#fetchfn) |

**Returns:** *[SlackLogger](_src_slack_logger_.slacklogger.md)*

## Properties

### `Private` `Readonly` fetch

• **fetch**: *[FetchFn](../modules/_src_slack_logger_.md#fetchfn)*

*Defined in [src/slack-logger.ts:123](https://github.com/nju33/logger/blob/0e8d412/src/slack-logger.ts#L123)*

## Methods

###  createSession

▸ **createSession**(`__namedParameters`: object): *Generator‹[SlackLoggerNextFunctiion](../modules/_src_slack_logger_.md#slackloggernextfunctiion), [SlackLoggerNextFunctiion](../modules/_src_slack_logger_.md#slackloggernextfunctiion), boolean | undefined›*

*Defined in [src/slack-logger.ts:125](https://github.com/nju33/logger/blob/0e8d412/src/slack-logger.ts#L125)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`accessToken` | string |
`channelId` | string |
`rest` | rest |

**Returns:** *Generator‹[SlackLoggerNextFunctiion](../modules/_src_slack_logger_.md#slackloggernextfunctiion), [SlackLoggerNextFunctiion](../modules/_src_slack_logger_.md#slackloggernextfunctiion), boolean | undefined›*

___

### `Static` createBody

▸ **createBody**(`__namedParameters`: object): *string*

*Defined in [src/slack-logger.ts:83](https://github.com/nju33/logger/blob/0e8d412/src/slack-logger.ts#L83)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`channelId` | string |
`fields` | object |
`text` | string |

**Returns:** *string*

___

### `Static` getEmojiFrom

▸ **getEmojiFrom**(`log`: [SlackLog](../modules/_src_slack_logger_.md#slacklog)): *string*

*Defined in [src/slack-logger.ts:63](https://github.com/nju33/logger/blob/0e8d412/src/slack-logger.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`log` | [SlackLog](../modules/_src_slack_logger_.md#slacklog) |

**Returns:** *string*
