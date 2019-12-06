import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
} from '@mui-treasury/layout';

import NavContentEx from 'components/mock/NavContentEx';
import HeaderEx from 'components/mock/HeaderEx';
import ContentEx from 'components/mock/ContentEx';
import FooterEx from 'components/mock/FooterEx';

const DefaultLayout = () => (
  <Root>
    {({ headerStyles, sidebarStyles }) => (
      <>
        <CssBaseline />
        <Header>
          <Toolbar>
            <SidebarTrigger className={headerStyles.leftTrigger}>
              <SidebarTriggerIcon />
            </SidebarTrigger>
            <HeaderEx />
          </Toolbar>
        </Header>
        <Sidebar>
          <div className={sidebarStyles.container}>
            <NavContentEx />
          </div>
          <CollapseBtn className={sidebarStyles.collapseBtn}>
            <CollapseIcon />
          </CollapseBtn>
        </Sidebar>
        <Content>
          <ContentEx />
        </Content>
        <Footer>
          <FooterEx />
        </Footer>
      </>
    )}
  </Root>
);

// hide-start
DefaultLayout.metadata = {
  title: 'Default Layout',
  path: 'presets/default',
  files: [],
  relates: [],
};
// hide-end

export default DefaultLayout;