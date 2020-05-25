import React, { useState } from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import {
  Page,
  PageHeader,
  PageSidebar,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const onNavToggle = (): void => setIsNavOpen(!isNavOpen);

  const Header = (
    <PageHeader
      logo="Logo"
      toolbar="Toolbar"
      avatar=" | Avatar"
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={onNavToggle}
    />
  );

  const Sidebar = (
    <PageSidebar nav="Navigation" isNavOpen={isNavOpen} theme="dark" />
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

export default App;
