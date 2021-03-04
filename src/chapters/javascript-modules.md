---
title: 'JavaScript Modules'
dateUpdated: '27-02-2021'
summary: 'About using and selecting JavaScript modules'
chapter: '7'
---
# 7. JavaScript Modules
1. ## Application Modules 
	1. ### Use ES6 Style Modules.
		Today there are two primary methods of interacting with and creating  JavaScript modules. We always use the Official ES6 `import` and `export` style and utilize Babel for compiling for older environments if required.
	2. ### Define Small and Logical Modules.
		Make each file its own module. Group related functionality into higher level modules. Directory structure should reflect module structure.
	3. ### Keep Your Modules Small.
		Each module should be single purpose and each code file should contain a single module.
	4. ### Create a Wrapper Module for Related or Bundled Code.
		Sometimes we group multiple modules together that might be reusable across projects. 
2. ## NPM Modules
	1. ### Picking a Module
		1. #### Licence.
			MIT and BSD Licensed Open-source Projects are acceptable, all other licence types should be reviewed with the Ops/Legal team before adding to a project
		2. #### Last Update.
			If a module has not been updated at frequent intervals for the last year, consider other options
		3. #### Contributors.
			Are there a number of contributors and what other projects are they working on. Single contributor packages should be used with caution.
		4.  #### Is is Required?
			Are you adding a package that is only a few lines long, what are the risks of just taking a few minutes to write yourself. (example: [left-pad])
	2. ### Never Import Manually
		Use the node package manager for managing all your third-party packages. If there is a rare exception where you “eject” and import it manually, carefully document the version and reasoning for doing so in the `README.md` of your project.
	3. ### Avoid Local Modifications
		Avoid modifying third-party code locally. Doing so is rarely a good idea. Instead, try to send a pull request to the upstream author. If there is NO other way to proceed, and contributing back isn’t an option, create a fork of the repository with your changes and import that version in your `package.json`
	4. ### Document Modules Used
		Document all use of third-party code in a file called LEGAL.txt. Place it in the root of the repository with a link to the repository and/or legal licence information.
	5. ### Treat Our Code as Third-party Code
		If you copy our code into a client’s project repository, treat it as third-party code in an NPM Package. Not doing this can have *legal* repercussions.
	6. ### Make it a Package
		For reusable components, consider organizing the module as an NPM package and then treating it as if it were an external package with an MIT licence.