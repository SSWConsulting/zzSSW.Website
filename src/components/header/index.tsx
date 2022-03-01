import React from "react";
import TopBar from "./topBar";
import { container } from "./index.module.css";

const Header = () => {
  return (
    <header className={container}>
      <TopBar />
    </header>
  );
};

export default Header;
