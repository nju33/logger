[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/slack-logger"](_src_slack_logger_.md)

# Module: "src/slack-logger"

## Index

### Classes

* [SlackLogger](../classes/_src_slack_logger_.slacklogger.md)

### Interfaces

* [SlackCompleteLog](../interfaces/_src_slack_logger_.slackcompletelog.md)
* [SlackErrorLog](../interfaces/_src_slack_logger_.slackerrorlog.md)
* [SlackInfoLog](../interfaces/_src_slack_logger_.slackinfolog.md)
* [SlackLogCommon](../interfaces/_src_slack_logger_.slacklogcommon.md)
* [SlackLoggerContext](../interfaces/_src_slack_logger_.slackloggercontext.md)
* [SlackWarnLog](../interfaces/_src_slack_logger_.slackwarnlog.md)
* [TraitSlackLogger](../interfaces/_src_slack_logger_.traitslacklogger.md)

### Type aliases

* [FetchFn](_src_slack_logger_.md#fetchfn)
* [SlackLog](_src_slack_logger_.md#slacklog)
* [SlackLoggerNextFunctiion](_src_slack_logger_.md#slackloggernextfunctiion)

### Variables

* [POST_URL](_src_slack_logger_.md#const-post_url)

## Type aliases

###  FetchFn

Ƭ **FetchFn**: *typeof fetch*

*Defined in [src/slack-logger.ts:60](https://github.com/nju33/logger/blob/0e8d412/src/slack-logger.ts#L60)*

___

###  SlackLog

Ƭ **SlackLog**: *[SlackInfoLog](../interfaces/_src_slack_logger_.slackinfolog.md) | [SlackWarnLog](../interfaces/_src_slack_logger_.slackwarnlog.md) | [SlackErrorLog](../interfaces/_src_slack_logger_.slackerrorlog.md) | [SlackCompleteLog](../interfaces/_src_slack_logger_.slackcompletelog.md)*

*Defined in [src/slack-logger.ts:52](https://github.com/nju33/logger/blob/0e8d412/src/slack-logger.ts#L52)*

___

###  SlackLoggerNextFunctiion

Ƭ **SlackLoggerNextFunctiion**: *function*

*Defined in [src/slack-logger.ts:13](https://github.com/nju33/logger/blob/0e8d412/src/slack-logger.ts#L13)*

#### Type declaration:

▸ (`log`: [SlackLog](_src_slack_logger_.md#slacklog)): *PromiseLike‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`log` | [SlackLog](_src_slack_logger_.md#slacklog) |

## Variables

### `Const` POST_URL

• **POST_URL**: *"https://slack.com/api/chat.postMessage"* = "https://slack.com/api/chat.postMessage"

*Defined in [src/slack-logger.ts:58](https://github.com/nju33/logger/blob/0e8d412/src/slack-logger.ts#L58)*
