import React, { useState } from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
} from '@patternfly/react-core';

import LocalTime from '../localTime/LocalTime';

const MainScreen: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const onNavToggle = (): void => setIsNavOpen(!isNavOpen);

  const Header = (
    <PageHeader
      logo="Logo"
      headerTools={<PageHeaderTools>Toolbar | Avatar</PageHeaderTools>}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={onNavToggle}
    />
  );

  const Sidebar = (
    <PageSidebar
      nav="Navigation"
      isNavOpen={isNavOpen}
      theme="dark"
      data-testid="sidebar"
    />
  );

  return (
    <Page header={Header} sidebar={Sidebar}>
      <LocalTime />
    </Page>
  );
};

export default MainScreen;
