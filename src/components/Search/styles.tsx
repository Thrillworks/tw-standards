import styled from 'styled-components';

interface StyledSearchResultProps {
  show: boolean;
}

export const SearchResultContainer = styled.div<StyledSearchResultProps>`
  display: ${(props) => (props.show ? `block` : `none`)};
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

export const HitCountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
