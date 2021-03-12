---
title: 'Objects and Functions'
dateUpdated: '27-02-2021'
summary: 'About the design and use of objects and functions'
tags: ['oop', 'functional programming', 'inheritance', 'prototyping', 'composition', 'closures']
chapter: '5'
---
# 5. Objects And Functions
1. ## Basic Principles
	1. ### Understand the Different Styles. 
		JavaScript can be used for both functional and object-oriented styles of programming and most projects use both to some extent. It is important to understand the difference between the two approaches. Functional programming approaches computer programs as consisting of data transformations, much like functions in math. Your program is a collection of functions. Each function takes some inputs and produces some outputs. Simple functions are used as building blocks for more complex ones. This is one of the earliest approaches to programming, dating back to the 1960s and based on math developed in the 1930s. 
		
		Object-oriented programming (OOP) arose through the 1970s to the early 1980s, with the key idea being that programs should model entities in the real world as “objects”, which join together data and behaviour and are linked through inheritance and aggregation. OOP promised to make programming more intuitive, through a better mapping between the software concepts and things in the real world. It seemed like a good idea at the time. OOP reached its peak sometime around the turn of the millennium and has been losing steam since. 
		
		It’s worth noting that OOP and FP both aim to tame complexity by hiding the details, but they do this in different ways. OOP hides complexity inside objects. You call a method on the object and you trust it to do the right thing. How the object represents its data is none of your business in this approach. FP aims to hide the complexity inside individual functions. In this approach, data structures are usually kept simple, transparent, and ideally, immutable. You give a function some simple data, and you expect it to give you some data back. Ideally, a function would always give the same output for a specific input. 
		
		Proponents of FP believe that, while OOP may appear more intuitive in some cases, software using OOP can be hard to reason about because of its dependence on the internal state of the objects. Additionally, attempts to strictly model the world in terms of “objects” can often get quite messy, as illustrated by Steve Yegge’s essay [Execution in the Kingdom of Nouns], which provides a rather hilarious take on the difference in the philosophy between OOP and functional approaches (with most of the jokes being at the expense of OOP).
	2. ### Use Functional Approaches. 
		We prefer functional solutions over object-oriented ones. The functional style is more flexible, and makes testing and debugging easier.
	3. ### Be Pragmatic. 
		It doesn’t need to be a religious war, however, some problems are easier to solve using an object-oriented approach.
2. ## Objects
	1. ### Use `{}` and `[]`. 
		Use `{}` to define blank objects and `[]` to create arrays. It’s the same new Object() and new Array(), but simpler. It’s worth noting, though, that ES5’s Object.create() offers a potential advantage over plain `{}`, which is the ability to create objects with no inherited properties at all.
	2. ### Avoid Inheritance. 
		A generation of software engineers were raised with the idea that inheritance equals code reuse. JavaScript’s support for inheritance was an afterthought and there are better ways to reuse code. It should either be avoided altogether or used very carefully. Definitely avoid multi-level prototype hierarchies, i.e. situations where you have objects that instantiate a class that has another class as a prototype. To the extent that you are relying on objects, consider use of delegation as an alternative to inheritance.
	3. ### Avoid Newable Functions. 
		As a general rule, avoid writing functions that would need to be called with `new`. The main exception is when you will be generating a very large number of objects of the same kind. When you do use a newable function, consider what will happen if the caller omits new by mistake. Instead, write non-newable functions that start with “make”: `makeWidget()` rather than `new Widget()`. If you want to get back an object of type Widget, implement `Widget()` constructor as internal to `makeWidget()` and have `makeWidget()` create the object for you. In other words: 
		
		```javascript
		function makeWidget() {
		  const Widget = function() {};
		  return new Widget();
		}
		```

	4. ### Consider Prototypes for Efficiency. 
		Consider using prototypes when you need to construct many (e.g., hundreds) objects of the same kind. This is one of a few situations when using prototypes is worth it.
	5. ### Keep Your Hands Off the Prototypes of Built-in Objects. 
		Never modify the prototypes of built-in objects.
	6. ### Set to Null to Delete. 
		Assigning a property to null is often faster than using delete.
	7. ### Everything is an Object, But… 
		Functions, strings, numbers, arrays are all objects and can have properties, but making use of this must be done with care. In particular, it is rarely a good idea to use arrays as objects. The fact that you can attach properties to functions is used by React in several cases (example hooks based `Component.propTypes = {}`; for your code, do so only if you know what you are doing.
3. ## Functional JavaScript
	1. ### Embrace Functional Style. 
		JavaScript is a functional language. Embrace this.
	2. ### Aim For Pure Functions. 
		Whenever possible, stick with “pure functions”, that is functions that return a value but have no side effect. Pure functions do not change the state of the system. If you call a pure function and throw away the returned value, it’s as if you haven’t called it.
	3. ### Use `map`, `filter`, and `reduce`. 
		Use higher-order functions `map()` or `filter()` to convert one array into another. Use `reduce()` to convert an array into a single value.
	4. ### Use `foreach` When You Cannot Use `map`. 
		When not using functions such as map and filter, `forEach()` is usually preferred to the `for` loop. However, whenever you want to use `forEach`, consider whether this can be achieved with `map`, `filter`, or `reduce`. The disadvantage of `forEach` relative to those other functions is that it requires a non-pure function to do anything useful.
	5. ### Use Functional Composition. 
		Functional composition is an operation that takes functions `f` and `g`, returns a function h such that: ```f(x) = f(g(x))```. For example Redux provides `compose()` as do many other functional modules [https://redux.js.org/api/compose] or [https://github.com/ramda/ramda].
	6. ### Use Partial Application and Currying. 
		This examplePartial application means converting a function that takes some arguments into one that takes fewer arguments, “fixing” the other ones. Curried functions are functions that can return a partially-applied version of themselves if you skip some of the arguments. E.g., if you have an curried function `post()` that is supposed to take two arguments `channel` and `message` to post the message to the channel, you would be able to call it with just one argument (channel) to get back a function that can later be called with a message to post the message to that channel. In other words instead of this: `post('dev', 'hello'); `you can do this: 

		```javascript
		const postToDev = post('dev'); // Get a function that posts to 'dev'
		postToDev('hello'); // Use it to post a message.
		```
		
		Curried functions come in very handy when combined with other functional techniques such as composition. For example: 
		
		```javascript
		const runTestsAndPostResults = R.compose(
			post(channel),  formatResult,  runTest);
		```

		See [Ramda](https://ramdajs.com/docs/) documentation for more examples.
	7. ### Write Functions That Take Functions as Arguments. 
		Functions that take functions as arguments are normal in today’s JavaScript. Don’t be afraid of writing your own. However, do consider using promises instead of callbacks.
	8. ### Use Functions as Return Values. 
		Functions returning functions can be tremendously effective and are worth using. However, they can confuse some developers, so make sure to provide necessary comments and name such functions well. For example, `handleError()` is a very poor name for a function that returns an error handler function. `makeErrorHandler()` is better. `makeErrorHandlerFunction()` is better yet.
	9. ### Use Closures for Encapsulation. 
		Variables defined inside the function are only accessible inside that function. They also remain accessible after the function returns. This is called “functional closure” and it provides the most important method for encapsulation in JavaScript. Consider this example: 
		
		```javascript
			function getFooBar() {  
				function getFoo() {
					// some logic.  
				}  
				function getBar() {
					// some logic.  
				}
				return getFoo(getBar());
			}
			getFooBar(); // => returns a value
			getFoo(); // => "getFoo is not defined"
		```
		
		Here functions `getFoo()` and `getBar()` are defined inside `getFooBar()` and cannot be called outside of its scope. In addition to avoiding “pollution” of the namespace, this provides us with an assurance that there won’t be any unexpected calls to those functions. Now consider a more complex example: 
		
		```javascript
			function makeFooBarGetter(options) {
				function getFoo() {
					// some logic using options
				  }
				function getBar() {
					// some logic.
				}
				return function() {
					return getFoo(getBar());
				};
			}
			const getFooBarQuickly = makeFooBarGetter({quickly: true});
			getFooBarQuickly(); // => returns a value
			getFoo(); // => "getFoo is not defined"
		```
		
		Here the initial call to `makeFooBarGetter()` does not result in `getFoo()` or `getBar()` getting called. Instead, we get back a function that will call `getFoo()` or `getBar()` later. The returned function is able to call those functions even though they are not accessible directly from outside the scope of `makeFooBarGetter()`. Additionally, when `getFoo()` is called, it can have access to the options argument that was passed to `makeFooBarGetter()` during the initial invocation. This is because the scope of `makeFooBarGetter()` still exists after the initial return, even though it is only accessible to the functions defined in that scope.
	10. ### Limit the Use of Stateful Closures. 
		Functional closures can also be used to sneak state into functional programming. This has to be done sometimes, but be mindful of the downsides of stateful functions and use them sparingly. Compare the example in 4.3.9 to another common illustration of functional closure: 
		
		```javascript
			function makeCounter() {
				let count = 0;
				return {
			    increment: function() {
						count += 1;
					},
					getCount: function() {
						return count;
					},
				}
			}
			const counter = makeCounter();
			counter.increment();
			counter.increment();
			counter.getCount(); // => returns 2;
		```
			
		This example provides us with encapsulation: we can increment the value of `count` by calling `counter.increment` but we have no way to modify it otherwise. This is good. However, this example also does something else: it makes the closure stateful. The value returned by `counter.getCount()` will be different depending on how many times `counter.increment()` has been called before that. Maintaining state is important sometimes, but it has a major drawback: stateful code is harder to test and debug. If your code is relying on a stateful counter as shown above, perhaps you should consider refactoring it instead. For example, if you are using a stateful counter inside a for loop to count items that satisfy a certain criterion, then consider using `filter()` to pull out the desired items and then get the length of the resulting array.