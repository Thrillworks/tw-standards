import React, { createRef, useState } from 'react';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';

import {
  StyledSearchBox,
  StyledSearchResult,
  StyledSearchRoot,
} from './styles';
import useClickOutside from './useClickOutside';

const Search = ({ indices }) => {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID || '',
    process.env.GATSBY_ALGOLIA_SEARCH_KEY || '',
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <StyledSearchRoot ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <StyledSearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
      </InstantSearch>
    </StyledSearchRoot>
  );
};

export default Search;
