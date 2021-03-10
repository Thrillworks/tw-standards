import * as path from 'path';
import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `chapters` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  // TODO: Revert to GatsbyTypes.allChaptersQuery once the plugin supports gatsby-node
  const result = await graphql<{
    allMarkdownRemark: { nodes: { fields: { slug: string } }[] };
  }>(`
    query allChapters {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  result.data?.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/chapter${node.fields?.slug}`,
      component: path.resolve(`./src/templates/chapter/index.tsx`),
      context: {
        slug: node.fields?.slug,
      },
    });
  });
};
