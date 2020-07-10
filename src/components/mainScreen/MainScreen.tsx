import React, { useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
} from '@patternfly/react-core';

import LocalTime from '../localTime/LocalTime';
import LandingPage from '../landingPage/LandingPage';
import PageNotFound from '../pageNotFound/PageNotFound';

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
  const Navigation = (
    <Nav id="nav-primary-simple" theme="dark">
      <NavList id="nav-list-simple">
        <NavItem>
          <NavLink exact to="/" activeClassName="pf-m-current">
            Start
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact to="/localtime" activeClassName="pf-m-current">
            Local Time
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );

  const Sidebar = (
    <PageSidebar
      nav={Navigation}
      isNavOpen={isNavOpen}
      theme="dark"
      data-testid="sidebar"
    />
  );

  return (
    <Page header={Header} sidebar={Sidebar}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/localtime" component={LocalTime} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Page>
  );
};

export default MainScreen;
