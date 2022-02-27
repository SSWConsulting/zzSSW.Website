import React, { useState, useRef } from "react";
import TopBar from "./topBar";
import Menu from "../../../lib/SSW.MegaMenu/menu/menu";
import MobileMenu from "../../../lib/SSW.MegaMenu//mobile-menu/mobile-menu";
import { container } from "./index.module.css";

const Header = () => {
  const node = useRef(null);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const actionOnToggleClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleClick = (e) => {
    console.log(node);
    if (node.current.contains(e.target)) {
      setIsMenuOpened(false);
    }
  };
  return (
    <header className={container}>
      <div className="main-container">
        <TopBar />
        <>
          <div
            ref={node}
            className="App"
            onMouseDown={isMenuOpened ? (event) => handleClick(event) : null}
            style={{
              transform: isMenuOpened ? "translateX(84%)" : "translateX(0px)",
              zIndex: 2000,
              position: "relative",
            }}
          >
            <Menu onClickToggle={() => actionOnToggleClick()}></Menu>
          </div>

          <MobileMenu isMenuOpened={isMenuOpened}></MobileMenu>
        </>
      </div>
    </header>
  );
};

export default Header;
