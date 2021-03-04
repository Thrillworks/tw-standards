import type { GatsbyConfig } from 'gatsby';
import * as path from 'path';

const stylePlugins: GatsbyConfig['plugins'] = [
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [`roboto:400,700`, `roboto condensed:700`, `jetbrains mono:300`],
      display: 'swap',
    },
  },
];

const typescriptPlugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-typescript`,
  {
    resolve: 'gatsby-plugin-typegen',
    options: {
      outputPath: path.resolve(
        __dirname,
        '../../__generated__/gatsby-types.d.ts',
      ),
    },
  },
];

const metaPlugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Thrillworks Inc`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/TW-logo.png`, // This path is relative to the root of the site.
    },
  },
];

const markdownPlugins: GatsbyConfig['plugins'] = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            classPrefix: `language-`,
            // This is used to allow setting a language for inline code
            // (i.e. single backticks) by creating a separator.
            // This separator is a string and will do no white-space
            // stripping.
            // A suggested value for English speakers is the non-ascii
            // character '›'.
            inlineCodeMarker: null,
            // This lets you set up language aliases.  For example,
            // setting this to '{ sh: "bash" }' will let you use
            // the language "sh" which will highlight using the
            // bash highlighter.
            aliases: {},
            showLineNumbers: false,
            // If setting this to true, the parser won't handle and highlight inline
            // code used in markdown i.e. single backtick code like `this`.
            noInlineHighlight: false,
            // This adds a new language definition to Prism or extend an already
            // existing language definition. More details on this option can be
            // found under the header "Add new language definition or extend an
            // existing language" below.
            languageExtensions: [
              {
                language: `superscript`,
                extend: `javascript`,
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              },
            ],
            // Customize the prompt used in shell output
            // Values below are default
            prompt: {
              user: `root`,
              host: `localhost`,
              global: false,
            },
            // By default the HTML entities <>&'" are escaped.
            // Add additional HTML escapes by providing a mapping
            // of HTML entities and their escape value IE: { '}': '&#123;' }
            escapeEntities: {},
          },
        },
      ],
    },
  },
];

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Thrillworks Standards`,
    description: `A collection of our working standards.`,
    author: `@thrillworks`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.resolve(__dirname, `../`), // need absolute path for `gatsby-source-filesystem`
      },
    },
    ...metaPlugins,
    ...stylePlugins,
    ...typescriptPlugins,
    ...markdownPlugins,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

export default config;
