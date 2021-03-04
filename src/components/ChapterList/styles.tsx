import styled from 'styled-components';

import themeGet from '../../styles/themeGet';

export const StyledList = styled.ol`
  margin: 0;
  padding: 0;
  max-width: 768px;
  list-style: none;

  li {
    padding: ${themeGet('elementPadding')} 0;
    margin: 0;
    transition: all 0.3s ease-in-out;

    a {
      color: inherit;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      @media (max-width: 500px) {
        flex-direction: column;

        h3 {
          margin-bottom: 0;
        }
      }
    }

    span {
      color: ${themeGet('darkGrey5')};
      margin-inline-end: 8px;
      min-width: 26px;
      text-align: right;
      display: inline-block;
    }

    p {
      ${themeGet('paragraph2Styles')}
      color: ${themeGet('darkGrey5')};
    }
  }

  li + li {
    border-top: 1px solid ${themeGet('darkGrey')};
  }

  li:hover,
  li:focus-within {
    background-color: ${themeGet('lightGrey')};
  }
`;
