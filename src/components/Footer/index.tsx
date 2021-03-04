import React from 'react';

import styled from 'styled-components';

import Logo from '../UI/Logo';
import Wrapper from '../UI/Wrapper';

const StyledFooter = styled.footer`
  padding: 20px 0;
  border-top: solid grey 2px;
`;

const Footer = () => (
  <StyledFooter>
    <Wrapper>
      <Logo customStyle="small" />
    </Wrapper>
  </StyledFooter>
);

export default Footer;
