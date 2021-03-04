import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import ChapterList from '../ChapterList';

const ChaptersNav = styled.nav`
  min-width: 20%;
  margin-right: 20px;
`;

// TODO: Hide sidenav and add toggle button for lower width screens
const Sidenav = () => {
  const data = useStaticQuery<GatsbyTypes.ChaptersListQuery>(graphql`
    query ChaptersList {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            dateUpdated
            summary
            chapter
          }
          html
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  const sortedData = [...data.allMarkdownRemark.nodes].sort(
    (a, b) =>
      parseInt(a.frontmatter?.chapter || '', 10) -
      parseInt(b.frontmatter?.chapter || '', 10),
  );

  const chapters = sortedData.slice(1);

  return (
    <ChaptersNav>
      <ChapterList chapters={chapters} />
    </ChaptersNav>
  );
};

export default Sidenav;
