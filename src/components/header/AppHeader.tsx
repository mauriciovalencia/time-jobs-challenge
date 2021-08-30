import React from "react";
import { Header, Segment } from "semantic-ui-react";
import AppLogo from "../../components/logo/AppLogo";
import AppMenuHeader from "../../components/menu-header/AppMenuHeader";

const AppHeader = () => (
  <Segment>
    <Header as="h3" textAlign="center">
      <AppLogo />
    </Header>
    <Header>
      <AppMenuHeader />
    </Header>
  </Segment>
);

export default AppHeader;
