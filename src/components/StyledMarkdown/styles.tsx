import styled from 'styled-components';

import themeGet from '../../styles/themeGet';

export const Styles = styled.div`
  p,
  li {
    ${themeGet('paragraph2Styles')};
  }

  p,
  h2,
  h3,
  h4 {
    margin-bottom: 0;
  }

  h2,
  h3,
  h4 {
    margin-top: 0.8rem;
  }

  h2 + p,
  h3 + p,
  h4 + p {
    margin-top: 0.5rem;
  }
`;
