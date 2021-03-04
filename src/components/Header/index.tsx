import React from 'react';

import styled from 'styled-components';

import Logo from '../UI/Logo';
import Wrapper from '../UI/Wrapper';

const StyledHeader = styled.header`
  padding: 20px 0;
  border-bottom: solid grey 2px;
`;

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <Logo customStyle="large" />
    </Wrapper>
  </StyledHeader>
);

export default Header;
