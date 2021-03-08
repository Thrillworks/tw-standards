---
title: 'Debugging'
dateUpdated: '27-02-2021'
summary: 'About debugging, debugging tools and memory usage'
tags: ['debugging', 'debugger', 'memory', 'memwatch', 'heapdump']
chapter: '12'
---
# 12. Debugging
1. ## Get Comfortable With a Debugger
	Modern browsers provide developer tools that include a graphical debugger. This is often a much easier way to track down bugs than adding lots of log entries. The same debugger can be used to debug NodeJS code.
	1. Using the browser’s debugger, you can set breakpoints on arbitrary statements in your code; when such a statement is about to be executed the program will pause, allowing you to inspect the stack, current values of variables, etc. You can then step through the running program one statement at a time.
	2. In cases where you need a breakpoint on startup (i.e. before you have a chance to manually set one in the UI), you can add a debugger statement to your code.
	3. Use node-inspector to debug your NodeJS code using all the features of Chrome Developer Tools.
	4. For TypeScript with Node follow this to set up your debugging environment for VSCode: [https://code.visualstudio.com/docs/typescript/typescript-debugging]
2. ## Don’t Commit Debugging Code
	No one needs to see and deal with a debugger; statement that is not theirs or excessive use of `log.trace`/`debug.log` statements and files. Remove them before submitting a Pull Request.
3. ## Debug in Realistic Environments
	If you are developing a browser application, your browser’s dev tools will allow you to debug there. However, if you are developing a mobile application, it’s worth learning how to debug on the actual target device. To debug on mobile devices, try one of the following:
	1. iOS and iOS Simulator: On the device/sim: settings -> Safari -> advanced -> web inspector. Then connect the device to the computer. Finally, on desktop Safari, develop -> iPhone/iPad/Simulator
	2. Android: Enable USB debugging, connect device to computer, and then go to chrome://inspect/#devices
4. ## Profile Memory Usage
	Memory leaks in the browser can degrade your application’s performance, resulting in a negative user experience. Memory leaks on the server can cause the host to run out of resources, denying service to all clients until the server is restarted. It’s a good idea to understand how your server’s memory usage changes over time in order to help keep it stable for long periods of time.There are several tools to help you profile memory usage.
	1. *In the browser:* Modern browsers’ dev tools all have the ability to capture heap dumps and inspect them. In particular, look for detached DOM subtrees that can’t be garbage collected because your script is still holding references to them. See here for an example using Chrome.
	2. *On the server:* heapdump allows you to generate memory heap snapshots by sending the NodeJS process a SIGUSR2 signal ($ kill -USR2 <pid of node process>). The resulting .heapdump file can then be opened in opened in Chrome’s DevTools profile tab.
	3. There is also memwatch, which will try to automatically detect memory leaks as the program runs. It provides:
		- A leak event, emitted when it appears your code is leaking memory.
		- A stats event, emitted occasionally, giving you data describing your heap usage and trends over time.
		- A HeapDiff class that lets you compare the state of your heap between two points in time, telling you what has been allocated, and what has been released.