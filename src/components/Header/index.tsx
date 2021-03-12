import React from 'react';

import styled from 'styled-components';

import Search from '../Search';
import Logo from '../UI/Logo';
import Wrapper from '../UI/Wrapper';

const searchIndices = [{ name: 'Pages', title: 'Pages' }];

const StyledHeader = styled.header`
  padding: 20px 0;
  border-bottom: solid grey 2px;
  min-height: 91px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <FlexContainer>
        <Logo customStyle="large" />
        <Search indices={searchIndices} />
      </FlexContainer>
    </Wrapper>
  </StyledHeader>
);

export default Header;
