import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="https://github.com/abdimohamud/CaliforniaWildFires/tree/newversion">
        Link To Source Repo
      </a>

      <a className="menu-item" href="https://www.kaggle.com/ananthu017/california-wildfire-incidents-20132020">
        Link to Data
      </a>
      <a className="menu-item" href="https://github.com/abdimohamud/">
        Github
      </a>

    </Menu>
  );
};
