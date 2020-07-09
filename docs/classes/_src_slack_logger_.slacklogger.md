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

*Defined in [src/slack-logger.ts:126](https://github.com/nju33/logger/blob/3d09c9d/src/slack-logger.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`fetch` | [FetchFn](../modules/_src_slack_logger_.md#fetchfn) |

**Returns:** *[SlackLogger](_src_slack_logger_.slacklogger.md)*

## Properties

### `Private` `Readonly` fetch

• **fetch**: *[FetchFn](../modules/_src_slack_logger_.md#fetchfn)*

*Defined in [src/slack-logger.ts:128](https://github.com/nju33/logger/blob/3d09c9d/src/slack-logger.ts#L128)*

## Methods

###  createSession

▸ **createSession**(`__namedParameters`: object): *Generator‹[SlackLoggerNextFunctiion](../modules/_src_slack_logger_.md#slackloggernextfunctiion), [SlackLoggerNextFunctiion](../modules/_src_slack_logger_.md#slackloggernextfunctiion), boolean | undefined›*

*Defined in [src/slack-logger.ts:130](https://github.com/nju33/logger/blob/3d09c9d/src/slack-logger.ts#L130)*

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

*Defined in [src/slack-logger.ts:88](https://github.com/nju33/logger/blob/3d09c9d/src/slack-logger.ts#L88)*

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

*Defined in [src/slack-logger.ts:68](https://github.com/nju33/logger/blob/3d09c9d/src/slack-logger.ts#L68)*

Returns the specific symbol

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`log` | [SlackLog](../modules/_src_slack_logger_.md#slacklog) | target log  |

**Returns:** *string*
