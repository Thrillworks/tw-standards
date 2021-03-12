---
title: 'Readable Code'
dateUpdated: '27-02-2021'
summary: 'About formatting, code readability, naming conventions, and documentation'
tags: ['code smells', 'clever code', 'style', 'convention', 'naming']
chapter: '4'
---
# 4. Readable Code
1. ## Basic Principles
	1. ### Write Readable Code. 
		Aim to make your code readable. That is, another developer should be able to understand it. (In particular, a junior developer should be able to understand it.) In most cases, keeping code readable is more important than maximizing efficiency.
	2. ### Follow Project Conventions. 
		When inheriting a code base, consider the conventions already established in it. In many cases, the codebase as a whole would be easier to understand if you stick with those conventions rather than using ones we might consider better. This applies especially to symbol names and formatting rules.
	3. ### Avoid “Code Smells”. 
		Code smells are superficial things that tip you off to the fact that something else might be wrong in the code. If your code has such a “smell”, see if this is a symptom of a deeper problem. If so, fix the underlying problem. If the issue is just superficial, then clean it up nonetheless, so that the next person does not have to spend time investigating it. Common types of “code smells” include duplicated code, long functions, too many arguments to a function, very large objects, objects that everyone has access to, etc. The [Code Smell] article in Wikipedia provides more examples.
	4. ### Avoid “Clever” Code. 
		A conventional solution that is easy to understand is usually preferred to a clever solution that saves a few lines of code but would puzzle people who will work on this code later. If you do decide to be clever, make sure to provide documentation.
2. ## Formatting
	1. ### Mind the Style. 
		Having consistent style makes it easier for different developers to collaborate.
	2. ### Indent With 2 Spaces. 
		Never use tabs. Tabs vs. spaces is a holy war. It’s not worth rehashing each side’s arguments here. What’s important is that a mixture of tabs and spaces is intolerable, so a convention is needed. Ours is to use 2 spaces. **So say we all**.
	3. ### Cut Your Lines. 
		Keep all lines under 80 characters long. You may be working on a large screen. Others may be working on smaller ones - or in two columns. Or they want to use a part of their screen for other editor panels. And someone else is trying to read your code on a phone. The oldtimers might call us lax here and insist that the proper length limit is 78. But it’s 2020, so we move with the times.
	4. ### VSCode
		IDEs come and go, Right now we all use VSCode, if you want to use VI, VIM etc, go for it, but we will hold you to the standards for linting and IDE configuration that are standard and easy in the editor everyone else uses.
	5. ### Use Tools. 
		Use Prettify with our standard settings for all other white space questions. Put them in your `.prettifyrc`. Do not fight Prettify. Let it do your thinking for you. Additionally, place an `.editorconfig` file in your repo to make it easier for other developers to comply with the same standards.::Sample configuration files are available in our private “dev” repository, under dotfiles. :: When using `.editorconfig`, make sure that it does not contradict settings in `.prettifyrc`. To make Sublime Text work with `.editorconfig`, install “EditorConfig” plugin using Package Control in VSCode.
	6. ### Use Consistent Quotes. 
		Use single quotes `'` to delimit string constants in JavaScript. Use double quotes `"` in JSX and HTML. Both choices are a matter of convention. What’s important is consistency.
	7. ### Avoid Unnecessary Parentheses. 
		But do use them when they would help clarify the order of operations.
3. ## Symbol Names
	1. ### Use Good Names. 
		Good symbol names help others understand your code. Verbose, descriptive names are better than short cryptic symbols.
	2. ### `ALL_CAPS` For Application-Wide and Environment Constants. 
		Use `ALL_CAPS_WITH_UNDERSCORES` for constants that are used to indicate environment or are available to the entire application.
	3. ### Capitalize Constructors. 
		Use CapitalizedNames for functions, classes and modules that are meant to be called as constructors or contain children. 
	4. ### Capitalize Names of JSX Components. 
		That’s just the JSX convention.
	5. ### Camel Case For Everything Else. 
		Use camelCase for all other constants, lets, and function names. Use camelCase for object property names. 
	6. ### Use Meaningful Names. 
		Symbol names should make it easy to guess what the variable stores and how it is used. Avoid variable names that identify a data type without specifying its meaning (e.g., call it `numberOfWidgets` rather than `count`).
	7. ### Use The Right Part of Speech. 
		Function names should normally start with a verb (`calculateAmount()` rather than `amount()`). Variables containing objects, strings or numbers should normally have noun phrase names. Avoid variable names that can be misread as a different part of speech.
	8. ### Make Function Names High-Level. 
		Use high-level function names that identify the result rather than the implementation. This makes it easier to extend functionality later. E.g., consider `calculateTax()` rather than `calculateHST()`.
	9. ### Do Not Use “Hungarian Notation”. 
		Some developers prefix their variables with a string that identifies their type, e.g., `sName` for a string variable that contains a string. This convention is not common in JavaScript and we do not use it. Don’t do this, except when inheriting a code base that is already using it.
4. ## Documentation
	1. ### Provide an Overview in READMEs. 
		Your repo must contain a `README.md` file that describes what the repo is for, lists all the steps required to set up and run the project, and any external links to project resources (related repos, CI builds, deployed instances, etc). A new developer should be able to just read through the README and have a working local instance. The `README.md` can refer to other documentations (such as READMEs in other folders or this documentation).
	2. ### Use Markdown in READMEs. 
		Use Markdown for your READMEs. Github & Bitbucket can render Markdown, which makes it easy to read your code. 
	3. ### Explain the Purpose. 
		Use comments to document the purpose of each module, service, constant, function. In most cases a one-sentence summary goes a long way.
	4. ### Document All Functions. 
		Use JSDoc-style comments to document all functions. VSCode and other IDEs will display this information in tooltips, make your documentation portable!
	5. ### Explain Tricky Bits. 
		Provide comments for tricky code. This should in particular include any code that deviates from what one might expect as the “normal” solution. Think about a new developer, what was tricky to you on your first day on the job?
	6. ### Do Not Explain the Obvious. 
		Do not write comments that explain things that are obvious to everyone. Everyone here has a minimum skillset, if you find yourself typing exactly what a function name is it’s probably not required.
5. ## File Organization
	1. ### Use Standard Structure.
		 Consistent file organization makes it easier for another developer to navigate your code. This is often more important than using the “best” structure.
	2. ### Use a `src` Folder. 
		All application specific code lives in a “src” folder, with the exception of the “main” or “index” file.
	3. ### Use Scalable Structure. 
		Our standard structure is designed to support non-trivial projects. Simple division of your code into “components”, “services”, and “utilities” does not work so well for a larger code base.
	4. ### Use Folders For Components and Modules.
		Make your folder name the most related representation of what component or module it contains. Inside, separate your logic from your styles by making an index.js file for logic, and a styles.js file for styles. When importing the component elsewhere, you will be able to specify just the folder name and the index file will be what is imported by default.
		
		Name the main exported function the same thing as the folder, making it easy to import. And name the exported parent component as closely as possible to the folder name, making it easier to navigate the code structure and find the needed component when using dev tools.
		
		Ex: `ProductGrid > index.js`

		```jsx
		export default ProductGrid = () => {  
				...logic here  
				return (  
					<ProductGridWrapper>  
						<GridItem />  
					<ProductGridWrapper/>  
				)  
			}
		```  

	5. ### File Name Case Should Match Function Name Case. 
		Do not use uppercase in file or directory names. Instead, use hyphens as separators. This is to avoid problems that can arise from the fact that different operating systems treat case differently.
	6. ### Use Our Standard Full-Stack Organization. 
		As a general rule, put all client code under “client” and all server code “server” ::Please Contribute::
	7. ### Isolate Third-Party and Generated Code. 
		Never mix your own code with third-party code. Do not mix generated code with code written by hand. It should be easy to see which code was written as a part of the project, which code was brought from somewhere else, and which was generated.
	8. ### Organize Code by Functionality.
		::Please Contribute:: 
	9. ### Give Each Component Its Own Directory. 
		Component code acts like a small application with an index file and logically separated supporting files.