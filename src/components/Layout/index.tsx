import React from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../styles/global';
import standardsTheme from '../../styles/standardsTheme';
import Footer from '../Footer';
import Header from '../Header';
import Sidenav from '../Sidenav';
import Wrapper from '../UI/Wrapper';

const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={standardsTheme}>
      <Header />
      <Wrapper>
        <main>
          <Sidenav />
          <div>{children}</div>
        </main>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  </>
);

export default Layout;
