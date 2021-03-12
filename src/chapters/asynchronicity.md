---
title: 'Asynchronicity'
dateUpdated: '27-02-2021'
summary: 'About async and await, callbacks and the event loop'
tags: ['event loop', 'async', 'await', 'promises', 'callbacks']
chapter: '6'
---
# 6. Asynchronicity
1. ## The Basics
	1. ### Understand the Event Loop. 
		Understand that JavaScript does not use preemptive multitasking like C or Java. It relies on cooperative multitasking using the event loop. When you have control, it’s yours until you relinquish it. After that, the next item in the queue is executed.  See the Concurrency model and Event Loop on MDN for more information.
	2. ### Avoid Optimistic Code. 
		Avoid code that assumes that the results of an earlier request will be available at a specific time, e.g. after some fixed delay.
	3. ### When in Doubt, Use an  Asynchronous Interface. 
		If you are not sure whether the result can always be returned synchronously, go with an asynchronous API. In other words, return a promise. Suppose you are writing a function that will return configurations. Right now the configurations are specified in your JavaScript code. However, you should consider whether they may later need to come from a server. Making a request to the server will necessitate an asynchronous call. In this case, you are better off returning a promise from the start.
	4. ### An Asynchronous Interface Should Always Act Acsynchronously. 
		If your function returns a promise from any code path, it should return a promise from every code path.
	5. ### Test in Slow Motion. 
		Artificial delays (e.g. in server response) can help reveal async problems.Such delays can be easily simulated either on the server side or on the client. For a client-side solution, wrap your HTTP calls in a function that inserts a delay either before or after the call, like so:
		
		```js
		return $timeout(
			function() {  
				return axios.get(endpoint);
			}, 
			DELAY);
		```
		
		Most effectively, this can be built into a low level library for making HTTP requests which would allow turning the delay on and off for the whole app by changing a configuration setting.
	6. ### Do Not Keep Control. 
		For code running in the browser or in a server, no code segment should ever take more than 10 milliseconds. Understand that simply scheduling an expensive task to happen later merely postpones the problem. Large tasks need to be broken up so that different parts can be scheduled separately.
2. ## Callbacks and Promises
	1. ### Use Promises Over Callbacks. 
		Avoid callbacks - use promises instead.
	2. ### Use ES6 Native Promises. 
		ES6+ supports native promises use native JavaScript as much as possible.
	3. ### Simplify With `async` and `await`