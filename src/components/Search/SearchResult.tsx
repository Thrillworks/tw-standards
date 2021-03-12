import React from 'react';

import { Link } from 'gatsby';
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from 'react-instantsearch-dom';
import styled from 'styled-components';

import { HitCountContainer, SearchResultContainer } from './styles';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <HitCountContainer>
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </HitCountContainer>
  ) : null;
});

const PageHit = ({ hit }) => (
  <div>
    <Link to={hit.slug}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
);

const StyledHits = styled(Hits)`
  ul {
    list-style: none;
    margin-left: 0;
  }
  li.ais-Hits-item {
    margin-bottom: 1em;
    a {
      color: ${({ theme }) => theme.foreground};
      h4 {
        margin-bottom: 0.2em;
      }
    }
    span {
      ${({ theme }) => theme.paragraph2}
    }
  }
`;

const Credit = styled(PoweredBy)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 70%;
  svg {
    width: 50px;
    margin-left: 5px;
  }
`;

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <StyledHits hitComponent={PageHit} />
  </Index>
);

const SearchResult = ({ indices, show }) => (
  <SearchResultContainer show={show}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <Credit />
  </SearchResultContainer>
);

export default SearchResult;
