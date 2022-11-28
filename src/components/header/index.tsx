import React from "react";
import classNames from 'classnames';

import TopBar from "./topBar";
import { container } from "./index.module.css";

const Header = () => {
  return (
    <header>
      <TopBar />
    </header>
  );
};

export default Header;
