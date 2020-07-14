[@nju33/logger](../README.md) › [Globals](../globals.md) › ["src/slack-logger"](_src_slack_logger_.md)

# Module: "src/slack-logger"

## Index

### Classes

* [SlackLogger](../classes/_src_slack_logger_.slacklogger.md)

### Interfaces

* [PostMessageResultAsBotVo](../interfaces/_src_slack_logger_.postmessageresultasbotvo.md)
* [PostMesssageResultAsUserVo](../interfaces/_src_slack_logger_.postmesssageresultasuservo.md)
* [SlackLoggerContext](../interfaces/_src_slack_logger_.slackloggercontext.md)

### Type aliases

* [PostMessageResultVo](_src_slack_logger_.md#postmessageresultvo)
* [SlackLoggerNextFunction](_src_slack_logger_.md#slackloggernextfunction)
* [TraitSlackLogger](_src_slack_logger_.md#traitslacklogger)

### Variables

* [SLACK_LOGGER_POST_URL](_src_slack_logger_.md#const-slack_logger_post_url)

## Type aliases

###  PostMessageResultVo

Ƭ **PostMessageResultVo**: *[PostMessageResultAsBotVo](../interfaces/_src_slack_logger_.postmessageresultasbotvo.md) | [PostMesssageResultAsUserVo](../interfaces/_src_slack_logger_.postmesssageresultasuservo.md)*

*Defined in [src/slack-logger.ts:63](https://github.com/nju33/logger/blob/4fb201c/src/slack-logger.ts#L63)*

___

###  SlackLoggerNextFunction

Ƭ **SlackLoggerNextFunction**: *[LoggerNextFunction](_src_logger_.md#loggernextfunction)‹Either‹HttpError | TypeError, [PostMessageResultVo](_src_slack_logger_.md#postmessageresultvo)››*

*Defined in [src/slack-logger.ts:67](https://github.com/nju33/logger/blob/4fb201c/src/slack-logger.ts#L67)*

___

###  TraitSlackLogger

Ƭ **TraitSlackLogger**: *[TraitLogger](../interfaces/_src_logger_.traitlogger.md)‹[SlackLoggerContext](../interfaces/_src_slack_logger_.slackloggercontext.md), Either‹HttpError | TypeError, [PostMessageResultVo](_src_slack_logger_.md#postmessageresultvo)››*

*Defined in [src/slack-logger.ts:71](https://github.com/nju33/logger/blob/4fb201c/src/slack-logger.ts#L71)*

## Variables

### `Const` SLACK_LOGGER_POST_URL

• **SLACK_LOGGER_POST_URL**: *"https://slack.com/api/chat.postMessage"* = "https://slack.com/api/chat.postMessage"

*Defined in [src/slack-logger.ts:20](https://github.com/nju33/logger/blob/4fb201c/src/slack-logger.ts#L20)*
