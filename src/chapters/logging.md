---
title: 'Logging'
dateUpdated: '27-02-2021'
summary: 'About writing and using log messages'
tags: ['logs', 'console', 'trace', 'error', 'debugging']
chapter: '11'
---
# 11. Logging
1. ## Do Log
	Logging is important. It just needs to be done right.
2. ## Avoid `console.log()`
	Do not commit code that uses `console.log()` or any of the other console logging functions. Instead, use a library that allows logging at different levels and make it easy to direct logs to specific destinations. Across the board we default to a logging package like [https://www.npmjs.com/package/loglevel].
3. ## Write Good Messages
	When writing log messages, consider the people who will see them. Use good English. Avoid slang.
4. ## Identify the Source of the Message
	Make it easy to figure out which module the message came from.
5. ## Use the Right Levels
	Use the correct logging level for what you are logging: [https://www.npmjs.com/package/loglevel] contains:
	- `trace`
	- `debug`
	- `info`
	- `warn`
	- `error`
6. ## Use Environments to Set Logging Levels
	Don’t log everything you use for debugging in production. Instead turn off logging below a certain level based on where the code is running.