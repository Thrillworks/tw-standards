import React from 'react';

import { graphql, Link, PageProps } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO/seo';
import StyledMarkdown from '../../components/StyledMarkdown';

const Chapter = (props: PageProps<GatsbyTypes.ChapterQuery>) => {
  const content = props.data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={content?.frontmatter?.title || ''}
        description={content?.frontmatter?.summary || ''}
      />
      <Link to="/">Home</Link>
      {!!content?.html && <StyledMarkdown source={content.html} />}
    </Layout>
  );
};

export default Chapter;

export const data = graphql`
  query Chapter($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        summary
        dateUpdated
      }
    }
  }
`;
