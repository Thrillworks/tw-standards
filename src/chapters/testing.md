---
title: 'Testing'
dateUpdated: '27-02-2021'
summary: 'About designing, writing and using tests'
chapter: '10'
---
# 10. Testing
1. ## Test Driven Development
	1. ### Practice Test Driven Development (TDD).
		At its simplest, TDD is the practice of writing unit tests covering all expectations before any code is added or changed. The module is then incrementally implemented to pass each test. The goal is to produce more modularized, flexible, and extensible code because the module is designed to be smaller and well tested before connecting it to the rest of the system.However, be aware that even if you’re using TDD, you’ll still need integration tests to make sure that everything is connected together correctly.More information on test-driven development can be found [here].
	2. ### Use TDD To Save Time By Writing Tests First.
		When done properly, writing the tests before the implementation saves you time, since running your tests is often a much more effective way of exercising your code than trying to run it in the browser.Code usually does not work the first time around. You have to test it repeatedly in order to debug it. Unit tests are a more effective way of doing this than testing in the browser or using console logs. For this reason, TDD can save you a lot of time compared to writing code without unit tests. On the other hand, unit tests written after the code was debugged can be useful in later refactoring, but they won’t give you back the time you have already wasted during debugging.When properly done, the unit test will initially fail - because the code that satisfies it has not yet been written. You can then proceed to supply the implementation. Writing the test first can also help you get a clearer understanding of what you want to achieve before you start writing the code.As your code base grows, your tests will check for most types of regression bugs automatically, saving you time you would otherwise have spent putting out fires in deployment.
	3. ### Make Tests Readable.
		Your tests should be as clean as your production code. Clean tests act as concise documentation of each module’s desired behaviour. This is documentation that you can run, and which therefore doesn’t get out of date as the production code changes.Tests that are hard to understand are a *code smell*. If this happens, either the module’s contract has gotten too complicated or it was not properly understood in the first place.
	4. ### Avoid Dependencies Between Tests.
		Avoid writing tests that depend of the results of previous tests. Avoid writing tests that modify global state. These can lead to failures that are hard to reason about and therefore hard to fix.A good unit test follows the following structure:
		- Set up the test conditions.
		- Call the code you are testing.
		- Verify the result.
		Each test should be able to run in isolation from the others.
	5. ### Run Unit Tests As Often As Possible.
		Run your unit tests as often as you can, ideally after every code change. Definitely run them before making a commit and in CI (see 9.2.9). If running your unit tests takes too much time, consider writing faster unit tests.All modern testing frameworks be configured to watch files/directories for changes and rerun the tests automatically. 
	6. ### Measure Test Coverage.
		It is possible to have a large test suite yet to leave much of your code untested. Automatic test coverage measurement tools help you know what proportion of your code is actually covered by the tests.The unit tests should try to cover all execution paths. By mocking dependencies, error handling paths can be consistently covered. If a section of code can’t be covered, it is mostly likely dead code and should be removed.Consider using a tool like istanbul to measure the coverage of your code’s statements, functions and branches. You can then configure your continuous integration setup (9.2.9) to fail if coverage drops below a certain percentage. Read more about test coverage [here].
	7. ### Write Tests For Legacy Code, Pragmatically.
		Automated tests are a great way to gain an understanding of legacy code before you make any modifications to it. Once you have tests in place, it’s much easier to make any necessary changes without breaking anything.It should be noted that writing tests for a whole legacy codebase can be costly in time and resources. Be sure to keep client value in mind when deciding when to do this.One approach is to write legacy code tests only when you have a specific need to bug-fix or refactor a legacy module.For example, if you’re fixing a bug:- Write some tests that fail because of the bug.- Fix the bug.- Make sure your tests pass.This will make sure the bug stays fixed over the course of ongoing development.On the other hand, if you need to refactor a module:- Write enough tests that you can be sure you actually understand in detail what it does.- Refactor the module.- Make sure your tests still pass.If your tests pass against the new implementation, you can be more confident that your refactoring didn’t break anything.
2. ## Unit Testing
	1. ### Unit Testing Is For Code, Not UI Components.
		Though one can write unit tests for functional components in frameworks like react, often what we are testing is the UI library itself and not how the component renders with different properties. For pure functional components it’s much more useful to use Story book as your Testing system over a traditional Unit testing framework.
	2. ### Use Unit Tests For Debugging.
		Use unit tests to drive your code while debugging it. They should drive your development rather than serving as an add-on step that you do once your code is working.
	3. ### Automate Test Execution.
		Use tools to automate running your tests. We use NPM, [https://jestjs.io] and Webpack for this purpose. A typical setup lets us use `npm run test` to run client side unit tests against multiple different browsers.
	4. ### Mock Dependencies.
		Unit tests should test each module in isolation from all its dependencies. This is especially important for external dependencies like network or DB calls, which introduce delays, unreliability, and global state into the test environment.Therefore, it’s important for tests for a unit to provide mocks of all that unit’s dependencies.
	5. ### Use Promises.
		When testing asynchronous code, write test functions that return promises. Mocha will wait for the promise to resolve before passing or failing each test.
	6. ### Decompose Test Code.
		Everything you know about good software practices applies to test code. In particular, avoid code repetition.
	7. ### Be Ready To Write Off Old Tests.
		Ideally, you’ll keep your test code in the same folder as the module it’s testing. This should make it easy to adjust tests in tandem with changes to the module as its being developed.If a radical change in the architecture makes lots of your tests invalid, don’t let this stop you from using TDD going forward. Mark the invalidated tests as skipped and make a plan for when you’ll be able to fix them. Meanwhile, continue writing tests for any new code or bug fixes.Tests for new code or bug fixes should be treated as a part of the development process. So, they should not be estimated as a separate step. The work of fixing old tests, however, needs to be estimated and prioritized as if it were a separate chore.
3. ## Storybook
	1. ### Use Storybook For All Components.
		Just like we test functional code with Unit tests we test UI components in a standalone environment.
	2. ### All Pure Components Get A Place In Storybook.
		With the exception of high order components that contain state, all components are added to storybook so we can test them as standalone units that can be assembled into a whole.
	3. ::Please Contribute::