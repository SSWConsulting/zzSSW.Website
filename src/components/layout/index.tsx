import React, { useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Footer from '../footer';
import Menu from '../../../lib/SSW.MegaMenu/menu/menu';
import MobileMenu from '../../../lib/SSW.MegaMenu/mobile-menu/mobile-menu';
import Header from '../header';
import '@fortawesome/fontawesome-svg-core/styles.css';

type LayoutProps = {
    pageTitle: string;
    children: JSX.Element;
};

const Layout = ({ pageTitle, children }: LayoutProps) => {
    const node = useRef<HTMLDivElement>(null);
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const actionOnToggleClick = () => {
        setIsMenuOpened(!isMenuOpened);
    };

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            setIsMenuOpened(false);
        }
    };

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <div
                ref={node}
                onMouseDown={
                    isMenuOpened ? (event) => handleClick(event) : null
                }
            >
                <div style={{ backgroundColor: 'white' }}>
                    <div className="flex flex-col min-h-screen main-container">
                        <title>{pageTitle}</title>
                        <Header />
                        <Menu
                            onClickToggle={() => actionOnToggleClick()}
                        ></Menu>
                    </div>
                </div>
                {children}
                <Footer />
            </div>
            <MobileMenu isMenuOpened={isMenuOpened}></MobileMenu>
        </>
    );
};

export default Layout;
