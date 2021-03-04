---
title: 'TypeScript'
dateUpdated: '27-02-2021'
summary: 'About using TypeScript'
chapter: '9'
---
# 9. TypeScript
1. ## General
	By the end of 2020, All TW projects will be in TypeScript. New code on existing projects will be moved to TypeScript.
2. ## Language Rules
	1. ### Never `any`.
		The point of TypeScript is to give type-safety to authors. By using `any` as a type we introduce a group of unwanted potential errors to the codebase.
	2. ### Use TS Lint.
		Specific to TypeScript please use the linting rules attached included ::in this repository::
	3. ### Use Type Definition Rules.
		Type definition files make our code more portable, utilize them using the community standard: [Type Definitions]