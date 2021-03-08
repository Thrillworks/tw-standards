---
title: 'Securing Node Backends'
dateUpdated: '27-02-2021'
summary: 'About security on the server side'
tags: ['security', 'vulnerabilities', 'errors']
chapter: '17'
---
# 17. Securing Node Backends
1. ## Stay Abreast of Vulnerabilities
	New lines of attack are discovered all the time, so it is important to keep up to date. When you learn about new threats, alert others.
2. ## Detect Vulnerabilities in Your Dependencies and Upgrade
	Check for known vulnerabilities throughout the stack using a tool such as the built in NPM vulnerabilities checker. Upgrade to the newer versions as soon as fixes are available.
3. ## Use a Tool to Block Common Attacks
	NPM’s module [helmetjs] provides solutions for a number of common problems.
4. ## Don’t Trust Submitted Data
	Don’t trust the data submitted from the client, whether it comes in the body or as parameters. This data may not be what you think it is. Vectors of attack include database query injection and “Regular Expression Denial of Service” (ReDoS).NoSQL databases are vulnerable to query injection much like SQL databases, but the fact that NoSQL queries are JavaScript object makes this injection potentially even harder to notice. A query for `{username: query.username}` may have rather unexpected results when query.username is an object rather than a string.Keep in mind that Node’s `qs` module expands query parameters into JavaScript objects for you. So, check the type of the values you accept from the client.Another risk that falls under the same header is (ReDoS) attack. Certain regular expressions can take a really really long time to compute when presented with certain kinds of long input. This can allow an attacker to bring your server down by submitting a query with a parameter that is a few hundred characters longer than you expected. If you expect user’s input to be under certain length, consider truncating it at that length.
5. ## Prevent Internal Implementation Disclosure
	Do not let Express tell the world your server is running express. This is one of the things helmet can do for you.
6. ## Avoid “Chatty” Error Messages
	Error messages that provide a lot of context are great for development but may provide an attacker with unnecessary assistance. As a general rule, 400-level error messages should state what’s wrong with the request so that the caller could correct it, but 500-level error messages shouldn’t provide any details as to what happened.In most cases, a 500-level error code should not provide any further information beyond the actual status code. If something went terribly wrong on the server, “500 Internal Server Error” is all the client needs to know.
7. ## Disable Development Endpoints by Default.
	If you add any endpoints that are meant to be used in development mode only, make sure that they are disabled by default and must be actively enabled in development mode with a flag.
8. ## Handle Recognized Errors, But Crash on Unhandled Ones
	You should handle errors that you recognize and know how to recover from. Do not attempt to recover from unrecognized errors, however. Let your process die.If you do nothing, your NodeJS process dies upon an unhandled exception. This is the recommended practice. You can try to catch unhandled errors and log them, but the best thing to do after that is still to kill the process.An unhandled error is by definition a bug. Something happened that the developer did not anticipate. At this point you do not know what state your process is in. Proceeding despite this brings a number of risks that you don’t want to run. Instead, accept the defeat and let your process die. Use a service such as forever to restart your failed processes.Crashing on unhandled exceptions highlights the importance of handling the exceptions that you know you can handle. You don’t want people to stage denial-of-service attacks against your server by forcing it to crash repeatedly with simple requests.