import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class AppMenuHeader extends Component {
  state = { activeItem: "home" };

  render() {
    const { activeItem } = this.state;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"          
        }}
      >
        <Menu secondary>
          <Menu.Item name="lorem" active={activeItem === "lorem"} />
          <Menu.Item name="ipsum" active={activeItem === "ipsum"} />
          <Menu.Item name="dooh" active={activeItem === "dooh"} />
        </Menu>
      </div>
    );
  }
}
