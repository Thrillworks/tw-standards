---
title: 'Integration Testing'
dateUpdated: '27-02-2021'
summary: 'About testing'
tags: ['testing', 'integration', 'mocks']
chapter: '13'
---
# 13. Integration Testing
1. ## Use Subsystem Tests
	You don’t have to pick and choose between unit tests and end-to-end tests. In many cases, writing integration tests against a subsystem is what makes the most sense. One great place to draw the line is the server API.
2. ## Automate Server API Testing Using a Supertest
	Writing automated tests for a server API is much easier than writing end-to-end tests. Such tests are also a lot less fragile. You can use a supertest to help you write them. [https://zellwk.com/blog/endpoint-testing/]
3. ## Use Postman or a Similar Tool to Manually Test a Server API
	This usually beats testing a server API through your client application. Better yet, though, use a supertest with jest to automate your testing. (See above.)
4. ## Seek Optional Integration
	It’s good to integrate early, but it is also good to not be stuck waiting for a dependency to be fixed or extended. In many cases, what you want is to mock unstable dependencies in such a way that you would be able to easily run your code either with the actual dependency or with your mocks. In particular, consider mocking server API calls in the client, so that you client can run with no server at all.
5. ## However, Keep Your Mock Code Isolated
	Don’t mix your mock code with your actual production code in the same service. Make it a separate service or module.
6. ## Use Automated End-to-end Tests For Basic Integration Testing
	Automated integration tests are expensive and fragile, but they provide a great way to verify that your application actually runs. Use them at least for that.
7. ## Test on All Platforms
	Testing across all browsers is important but challenging given the large number of browsers and platform permutations.Tools like [https://www.cypress.io] or [https://github.com/puppeteer/puppeteer]can help automate your tests on all cross-platform browsers. However, Internet Explorer is particularly challenging since it is uniquely quirky and only available on Windows. modern.ie, which offers virtual machine images with different versions of Internet Explorer, is a good option for testing in IE manually. BrowserStack and Sauce Labs offer the ability to automate end-to-end tests on a variety of environments.