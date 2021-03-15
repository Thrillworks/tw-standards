---
title: 'Welcome'
dateUpdated: '27-02-2021'
summary: 'The Thrillworks Development Standards guide home page'
tags: ['welcome', 'introduction']
chapter: '0'
---
## Welcome

This is the Thrillworks Development Standards Guide. Here we keep global development practices and samples. **Project** specific documentation belongs in the repository for that project in its own wiki or README.

## Getting Started

This guide uses the [Markdown](http://daringfireball.net/projects/markdown/) syntax. The [MarkDownDemo tutorial](https://bitbucket.org/tutorials/markdowndemo) shows how various elements are rendered. 

The guide itself is a Gatsby site built from a collection of Markdown documents. If you would like to contribute, you can clone the repo, edit the appropriate markdown pages locally/offline, and submit a pull request to us for inclusion. 

Go ahead and try:

```bash
$ git clone https://github.com/Thrillworks/tw-standards.git
or
$ git clone git@github.com:Thrillworks/tw-standards.git
```

Each chapter of the guide is a Markdown file, with the .md extension. They are all located in src/chapters. You can edit them locally, as well as creating new ones.

## Syntax highlighting


You can also highlight snippets of code (we are using the [Prism][] library; there are examples of how to use it with Markdown [here][]).

[Prism]: https://prismjs.com/

[here]: https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/#usage-in-markdown


Here's an example of some JavaScript code:

```js
const foo = {};
const bar = () => console.log('Hello world.');
```

Have fun!