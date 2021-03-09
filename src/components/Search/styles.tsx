import styled, { css } from 'styled-components';

import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

export const StyledSearchRoot = styled.div`
  position: relative;
  margin: 0.6em 0;
`;

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

export const StyledSearchBox = styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? '1px solid black' : 'none')};
    ${(props) => props.theme.paragraph2}
    transition: 100ms;
    border-radius: 2px;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      ${(props) => props.theme.paragraph2}
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }
  .SearchIcon {
    width: 1em;
    margin: 0.3em;
    color: ${({ theme }) => theme.foreground};
    pointer-events: none;
  }
`;

const Popover = css`
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
  background: ${({ theme }) => theme.background};
`;

interface StyledSearchResultProps {
  show: boolean;
}

export const StyledSearchResult = styled(SearchResult)<StyledSearchResultProps>`
  display: ${(props) => (props.show ? `block` : `none`)};
  ${Popover}
  .HitCount {
    display: flex;
    justify-content: flex-end;
  }
  .Hits {
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
  }
  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 70%;
    svg {
      width: 50px;
      margin-left: 5px;
    }
  }
`;
