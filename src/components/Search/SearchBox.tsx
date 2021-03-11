import React from 'react';

import { Search } from '@styled-icons/fa-solid';
import { connectSearchBox } from 'react-instantsearch-dom';
import styled, { css } from 'styled-components';

interface SearchInputProps {
  hasFocus: boolean;
}

const open = css`
  width: 10em;
  background: ${({ theme }) => theme.background};
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
`;

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
`;

const SearchInput = styled.input<SearchInputProps>`
  outline: none;
  border: ${(props) => (props.hasFocus ? '1px solid black' : 'none')};
  ${(props) => props.theme.paragraph2}
  transition: 100ms;
  border-radius: 2px;
  color: ${({ theme }) => theme.foreground};
  ::placeholder {
    ${(props) => props.theme.paragraph2}
    color: ${({ theme }) => theme.faded};
  }
  ${(props) => (props.hasFocus ? open : closed)}
`;

const SearchIcon = styled(Search)`
  width: 1em;
  margin: 0.3em;
  color: ${({ theme }) => theme.foreground};
  pointer-events: none;
`;

export default connectSearchBox(
  ({ refine, currentRefinement, onFocus, hasFocus }) => (
    <SearchForm>
      <SearchInput
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
        hasFocus={hasFocus}
      />
      <SearchIcon className="SearchIcon" />
    </SearchForm>
  ),
);
