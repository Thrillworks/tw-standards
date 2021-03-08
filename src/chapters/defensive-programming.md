---
title: 'Defensive Programming'
dateUpdated: '27-02-2021'
summary: 'About defensive programming and general best programming practices'
tags: ['defensive', 'global', 'destructuring', 'assertions', 'errors', 'linting']
chapter: '3'
---
# 3. Defensive Programming
1. ## The Basics
	1. ### Practice Defensive Coding. 
		Write code with an assumption that you and your co-workers will make mistakes. Use approaches that will minimize the chance of such mistakes and will help catch them early when they do occur.
	2. ### Use “The Good Parts.” 
		JavaScript has a number of features that make it easy to write error-prone code. Avoid them. Use “the good parts” of JavaScript instead. The idea of focusing on “the good parts” of JavaScript comes from Douglas Crawford’s book JavaScript: The Good Parts. This book is well worth a read.
	3. ### Use Tools. 
		When possible, use software to enforce best practices. In particular, make use of strict mode and linting tools.
2. ## Declarations
	1. ### Do Not Use Globals. 
		Global symbols (variables and functions) should only be introduced in exceptional circumstances and after much thought.
	2. ### Beware of Unintended Globals. 
		All variables should be declared with “const” or “let”, which should be enforced by the linter. All variable and function declarations should be placed either inside a body of a function or in a NodeJS module.
	3. ### Avoid Unnecessary IIFES. 
		Immediately-invoked function expressions (IIFEs) used to be common in client-side JavaScript. However, they are needed a lot less frequently with many of the newer approaches to module definition. You rarely need them when working with modern JavaScript. When defining Node modules (ES6 or CommonJS generally), you don’t need to wrap the whole module in an IIFE. 
	4. ### Define Variables Up-front. 
		Variables should be declared at the top of the function to avoid confusion due to hoisting.
	5. ### Single `let` Per Line. 
		Our convention is to use a separate `let` for every variable. This makes diffing easier. If each variable is defined with its own `let`, any declaration can be removed without affecting the other ones. The diffs will only show that line as having been modified.
	6. ### Use Destructuring Where Possible. 
		When utilizing a module use destructuring where possible unless there are multiple instances that would collide (example: Apollo `useQuery()`).
	7. ### Avoid Function Declarations in Blocks. 
		Do not use function declaration in blocks to avoid confusion due to hoisting. Function expressions in blocks are ok. Functions declared in blocks get hoisted, which can be easy to miss. Consider this example: 

		```js
		if (false) {
			function bar() {
				console.log(42);
			}
		}
		bar();
		```
		
		Here, `bar()` is actually defined even though the condition fails, but this effect may be easy to miss. With a function expression, however, the result is different: 
		
		```js
		let bar;
		if (false) {
		  bar = function bar(){
				console.log(42);
			}
		}
		bar();
		```
		
		In this case `bar` is actually undefined.
	8. ### Name Your “Anonymous” Functions. 
		Using functional expressions does not mean your functions must be anonymous. Naming them will give you better error stack traces and can often be worth it. This is less of a factor when you are assigning the result of a function expression to a variable, since modern JavaScript engines are smart enough to use the name of that variable as the function’s “name”. When you pass the newly minted function as an argument or return it, without first saving it to a variable, your function will stay truly anonymous unless you give it a name. Naming a function created with a function expression does not declare it by this name. Consider the following example: 
		
		```js
		const foo = function bar() {};
		```
		
		Here, the fact that the function expression specifies a name `bar` does not mean that the function will become available under this name. Calling `bar()` will give us “undefined is not a function”. The JavaScript interpreter does not rely on the presence of name to distinguish between a function declaration and a function expression. It does it based on the context in which they appear. In the example above, it knows that since it’s an expression, a function declaration cannot appear on the right-hand side of an assignment.
3. ## Fail Fast
	1. ### Fail Fast.  
		When something goes wrong, make sure you catch it early and either properly handle the situation or throw an error. Code that skips over errors and tries to chug along will likely fail eventually, but in a way that is much harder to debug. Failure to fail can also compromise security.
	2. ### Use Assertions. 
		Make assertions to enforce your assumptions. Assertions are commonly used in tests, but this doesn’t mean that this is the only place where they can be useful. _Note: assertions used in production code must satisfy a higher standard of “good errors” than code used in testing._ Meaning they need to be clear about what has been thrown and why. You should use an assertion library that would allow you to customize the error message.
	3. ### Throw Good Errors. 
		Throw errors liberally, but make them helpful. Good errors should useful information and should __ALWAYS__ be instances of `Error` or its subclass, since this ensures that they can provide a proper stack trace. Avoid throwing strings like this:
		
		```js
		throw 'Parameter foo not specified';
		```
		
		Instead, create a new instance of `Error`:
		
		```js
		throw new Error('Parameter foo not specified');
		```
		
		In some cases it may be worth going an extra mile and creating a subclass of `Error`:
		
		```js
		throw new errors.FormValidationError('Parameter foo not specified');
		```

		_Note: that for this to work you would need to define FormValidationError. Additionally, for this custom class to be most useful, you would usually want to export the error constructors._
		
		```js
		errors = {
			FormValidationError:
			  createError('FormValidationError'), // define additional errors for this module
			}; // export errors object
		```
		
		Subclassing Error is tricky in JavaScript, and the task is often made especially hard due to inconsistent browser support. You would probably want to use a library to do this, rather than implementing it yourself. Look at [https://www.npmjs.com/package/error] as a start.
	4. ### Assert Dichotomies. 
		If you expect one of two options, consider the case where neither is satisfied. Handle it or throw an error. If you are expecting option A or option B, do not handle them with ```if (A) {...} else {...}``` or with ```if (A) {...} else if (B) {…}```. The first option lumps together B and “neither A nor B”. The second option just lets the “neither” case fall through. What you want is: ```if (A) {...} else if (B) {...} else {...}```. Think of it as the if... else if... oops... structure.
	5. ### Test Your Assumptions
		Is your data coming though in the expected shape? Did a CMS user enter too many or too few data points that your code expects. Always test what you assume for lengths or shapes of objects and have a way to gracefully handle it or fail.
4. ## Use Tools
	1. ### Use `use strict`. 
		Put `'use strict';` at the beginning of each JavaScript file. This will keep you honest.
	2. ### Watch Out for Concatenation. 
		Do not concatentate strict mode files with non-strict files.
	3. ### Use Linting Tools. 
		Use ESLint with our standard settings in your `.jshintrc/.eslintrc` or `package.json`See our Thrillworks NPM module repository for our standard `.jshintrc`.
	4. ### Configure Your Editor to Automatically Run the Linter. 
		VSCode has linting plugins.
	5. ### Lint With NPM. 
		Configure NPM to run the linter on all of your JavaScript files using: `$ npm run lint`.
	6. ### Run Linting in CI. 
		Make sure your continuous integration server runs the linter. The linter fails so does the CI build.
	7. ### Consider Using a Git Pre-Commit Hook
		In the `.git/hooks` directory of your project folder, consider adding a Git pre-commit hook that runs an NPM script to test if your code is linted and well-formatted.  A sample pre-commit file is available in our private “dev” repository. _Note” that the file needs to be named pre-commit for this to work._
5. ## Miscellaneous
	1. ### Semicolons. 
		Always use a semicolon at the end of a statement. If you don’t, you are counting on JavaScript’s (dumb) automatic semi-colon insertion to do it for you and you may cause the end of the world.
	2. ### Avoid `==` and `!=`.  
		Use `===` and `!==` instead. The “double-equals” version is too forgiving. One legitimate use of `==` and `!=` is to test whether the value is undefined or null before dereferencing a property. This often takes the shape of:```return (null != x) && x.someAttribute;```. Keep in mind, however, that using the same test can be confusing. In most cases, just testing whether `x` is truthy would make the intent clearer: ```return x && x.someAttribute;```.
	3. ### Use Braces With Multiline Blocks. 
		Always use `{}` with multiline blocks. If the block is a single line statement braces can be omitted. The opening brace should be at the end of the line. The closing brace should be on a line of its own, indented to match the beginning of the line that contains the opening brace. Skipping braces makes it easy to introduce a mistake when a new statement is added to the block. Where to put the braces is a matter of convention.
	4. ### Avoid `eval`. 
		Do not use `eval()`, except for implementing code loaders and REPLs.```EVAL === EVIL```
	5. ### Avoid `with`. 
		Do not use with. (If you haven’t heard of with before, you haven’t missed much.)