import React from 'react';

import { graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO/seo';
import StyledMarkdown from '../components/StyledMarkdown';

const IndexPage = (props: PageProps<GatsbyTypes.allChaptersQuery>) => {
  const sortedData = [...props.data.allMarkdownRemark.nodes].sort(
    (a, b) =>
      parseInt(a.frontmatter?.chapter || '', 10) -
      parseInt(b.frontmatter?.chapter || '', 10),
  );

  const home = sortedData[0];

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Thrillworks Standards</h1>
      <StyledMarkdown source={home.html} />
    </Layout>
  );
};

export default IndexPage;

// TODO: Get only the first chapter details in this query
export const data = graphql`
  query allChapters {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
        frontmatter {
          chapter
        }
        html
      }
    }
  }
`;
