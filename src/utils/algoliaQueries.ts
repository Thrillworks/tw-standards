const escapeStringRegexp = require('escape-string-regexp');
// This exports a list of queries. Each query defines a single index against which Algolia
// will search; each index requires a GraphQL query that retrieves the pages and data to
// be indexed. A transformer changes the GraphQL data to an Algolia record.
// This gets run at build time; to regenerate the indices, run 'gatsby build' in the terminal

const pagePath = `chapters`;
const indexName = `Pages`;

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          summary
          tags
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

export const algoliaQueries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];
