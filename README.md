# Thrillworks Standards Documentation

---

### PROJECT INITIALIAZATION (QUICK START)

1. Click the **clone** button in this BitBucket repo and copy the git command shown `git clone https://...`
2. Create a local folder for your repo and navigate to it in the **terminal**
3. In terminal paste the copied clone command/address to download it
4. After the project has downloaded, run `npm install` in the terminal to install all of the needed packages on your local machine
5. Create a new empty repo in your remote source control software (GitHub, BitBUcket etc)
6. Copy the remote repo address shown on the main page. (ex `https://username@bitbucket.org/thrillwoksinc/project_name.git`)
7. From your local folder using terminal, type the command `git remote set-url origin` plus the remote address you copied to set the remote origin location to push changes to

Your new project should now be set up. Depending on the pre-installed pacakges that you intend to use, you may want to further customize some settings for your project. See the list of installed packages below for more detailed instructions.

---

### INCLUDED PACKAGES

**Styled Components**

- https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/


**Gatsby-source-filesystem**

- https://www.gatsbyjs.org/packages/gatsby-source-filesystem/


**Google Fonts**

- https://www.gatsbyjs.org/packages/gatsby-plugin-prefetch-google-fonts/

**Linting**

- https://www.npmjs.com/package/eslint
- https://www.npmjs.com/package/@thrillworksinc/eslint-config-thrillworks


**Search**

Search is powered by Algolia; the search index is created when you run `gatsby build`. API keys should be stored in an .env file; ask a project dev or look in the Thrillworks LastPass for that info. In the interests of getting up and running quickly, the front-end components are currently provided by React InstantSearch, a library provided by Algolia with ready-made React components; we could replace these with our own UI in the future.

- https://www.gatsbyjs.com/plugins/gatsby-plugin-algolia/
- https://www.gatsbyjs.com/docs/adding-search-with-algolia
- https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/

---

### PROJECT BEST PRACTICES

- Before you run `gatsby-develop`, run `gatsby clean`. This clears out the previous static files, so you have an updated clean output every time, to run on the local server
- Also before you do any commits or pushes to the repo, run `gatsby-clean` to keep repo small and tidy
- When using `<img />` always define the `src` value by a named file import. Gatsby does not play well with using relative paths
- You can utilize the ThrillWorks library of UI components as a starting point
- Backgrounds in Storybook are specified in `storybook/config.js` if you want them to be applied globally. However you can import the `{ addParameters }` to any component to any single story, and pass it the same `{ backgrounds }` object to override
- We use CSF Stories for the story portion of Srtorybook, and MDX docs for the doc portion of Storybook. See this link for further instructions: https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/recipes.md#csf-stories-with-mdx-docs


## Styling

This repo uses [`styled-components`](https://styled-components.com/). 

Please avoid modifying existing StyledComponents in favor of extending exisiting ones. 

You can read more about how we implement StyledComponents in our documentation.

### Helper `themeGet`

Inspired by [themeGet from styled-system](https://github.com/styled-system/styled-system/tree/master/packages/theme-get), we added a TypeScript friendly version of this function, allowing for typesafety when querying several fields deep on the theme.

The `DefaultTheme` interface from `styled-components` is defined in `src/types/styles.d.ts`, and the defaultValue for the theme is found at `src/styles/default.ts`
