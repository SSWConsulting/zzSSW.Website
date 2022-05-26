import React, { useRef, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../styles/global.css";
import "../../styles/common.css";
import Menu from "../../../lib/SSW.MegaMenu/menu/menu";
import MobileMenu from "../../../lib/SSW.MegaMenu//mobile-menu/mobile-menu";
import { navigate } from "gatsby";

const Layout = ({ pageTitle, children, backgroundColor }) => {
  const node = useRef(null);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const actionOnToggleClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      setIsMenuOpened(false);
    }
  };

  return (
    <>
      <div
        ref={node}
        onMouseDown={isMenuOpened ? (event) => handleClick(event) : null}
        style={{
          transform: isMenuOpened ? "translateX(84%)" : "translateX(0px)",
          backgroundColor: backgroundColor,
        }}
      >
        <title>{pageTitle}</title>
        <div className="main-container">
          <Header />
          <Menu onClickToggle={() => actionOnToggleClick()}></Menu>
        </div>
        <main style={{ backgroundColor: backgroundColor }}>{children}</main>
        <Footer />
      </div>
      <MobileMenu isMenuOpened={isMenuOpened}></MobileMenu>
    </>
  );
};

export default Layout;
