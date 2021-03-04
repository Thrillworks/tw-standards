import React from 'react';

import { Link } from 'gatsby';

import { StyledList } from './styles';

type Chapter = {
  id: string;
  fields: Partial<{
    slug: string;
  }>;
  frontmatter: Partial<{
    title: string;
    dateUpdated: string;
  }>;
};

type ChapterListProps = {
  chapters: Partial<Chapter>[];
};

const ChapterList: React.FC<ChapterListProps> = ({ chapters }) => (
  <StyledList>
    {chapters.map((node, i) => (
      <li key={node.id}>
        <Link to={`/chapter${node.fields?.slug}`}>
          <h3>{node.frontmatter?.title}</h3>
        </Link>
      </li>
    ))}
  </StyledList>
);

export default ChapterList;
