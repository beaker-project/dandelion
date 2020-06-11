import React, { useState } from 'react';
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';

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
      <PageSection variant={PageSectionVariants.darker}>
        Section with darker background
      </PageSection>
      <PageSection variant={PageSectionVariants.dark}>
        Section with dark background
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        Section with light background
      </PageSection>
    </Page>
  );
};

export default MainScreen;
