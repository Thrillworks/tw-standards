import React, { useRef, useState } from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import styled from 'styled-components';

import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import useClickOutside from './useClickOutside';

const SearchContainer = styled.div`
  position: relative;
  margin: 0.6em 0;
`;

const Search = ({ indices }) => {
  const rootRef = useRef(null);
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID || '',
    process.env.GATSBY_ALGOLIA_SEARCH_KEY || '',
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <SearchContainer ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <SearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
      </InstantSearch>
    </SearchContainer>
  );
};

export default Search;
