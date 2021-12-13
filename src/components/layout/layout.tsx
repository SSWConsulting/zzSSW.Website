import React, { useState, useRef } from "react";
import { graphql, useStaticQuery } from 'gatsby';
import './layout.css'
import '../../style.css'
import Footer from '../footer/footer';
import Menu from '../../../lib/SSW.MegaMenu/menu/menu'
import MobileMenu from '../../../lib/SSW.MegaMenu/mobile-menu/mobile-menu'
import TopBar from "../../../lib/SSW.TopBar/top-bar";
import '@fortawesome/fontawesome-svg-core/styles.css';

type LayoutProps ={
    pageTitle: string,
    children: JSX.Element 
};

const Layout = ({
    pageTitle,
    children
}: LayoutProps) =>{
    const node = useRef<HTMLDivElement>(null);
    const [isMenuOpened, setIsMenuOpened] = useState(false); 
  
    const actionOnToggleClick = () => {
      setIsMenuOpened(!isMenuOpened);
    }
  
    const handleClick = e => {
      if (node.current.contains(e.target)) {
        setIsMenuOpened(false);    
      }  
    };

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `);
    
    return(
    <div
        style={{
        overflow: isMenuOpened ? 'hidden' : 'auto',
        }}
    >        
        <div
          ref={node}
          onMouseDown={isMenuOpened ? (event) => handleClick(event) : null}
          style={{
            transform: isMenuOpened ? 'translateX(84%)' : 'translateX(0px)',
          }}
        >
        <div className="flex flex-col min-h-screen main-container">
            <title>{pageTitle}</title>
            <TopBar />
            <Menu onClickToggle={() => actionOnToggleClick()}></Menu>
            <main className="flex-1">
                {children}
            </main>
            <br/>
            </div>
            <Footer />
        </div>
        <MobileMenu isMenuOpened={isMenuOpened}></MobileMenu>
    </div>
    )
}

export default Layout;