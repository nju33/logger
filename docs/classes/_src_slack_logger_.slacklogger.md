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

*Defined in [src/slack-logger.ts:149](https://github.com/nju33/logger/blob/9b2a4b5/src/slack-logger.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`fetch` | [FetchFn](../modules/_src_logger_.md#fetchfn) |

**Returns:** *[SlackLogger](_src_slack_logger_.slacklogger.md)*

## Properties

### `Private` `Readonly` fetch

• **fetch**: *[FetchFn](../modules/_src_logger_.md#fetchfn)*

*Defined in [src/slack-logger.ts:151](https://github.com/nju33/logger/blob/9b2a4b5/src/slack-logger.ts#L151)*

## Methods

###  createSession

▸ **createSession**(`__namedParameters`: object): *Generator‹[SlackLoggerNextFunction](../modules/_src_slack_logger_.md#slackloggernextfunction), [SlackLoggerNextFunction](../modules/_src_slack_logger_.md#slackloggernextfunction), boolean | undefined›*

*Defined in [src/slack-logger.ts:153](https://github.com/nju33/logger/blob/9b2a4b5/src/slack-logger.ts#L153)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`accessToken` | string |
`channelId` | string |
`rest` | rest |

**Returns:** *Generator‹[SlackLoggerNextFunction](../modules/_src_slack_logger_.md#slackloggernextfunction), [SlackLoggerNextFunction](../modules/_src_slack_logger_.md#slackloggernextfunction), boolean | undefined›*

___

### `Static` createBody

▸ **createBody**(`__namedParameters`: object): *string*

*Defined in [src/slack-logger.ts:77](https://github.com/nju33/logger/blob/9b2a4b5/src/slack-logger.ts#L77)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`asUser` | boolean |
`channelId` | string |
`fields` | object |
`text` | string |
`threadTs` | None &#124; Some‹string› |

**Returns:** *string*
