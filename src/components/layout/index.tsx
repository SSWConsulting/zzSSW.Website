import React, { useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';

import Header from '../header';
import Menu from '../../../lib/SSW.MegaMenu/menu/menu';
import MobileMenu from '../../../lib/SSW.MegaMenu/mobile-menu/mobile-menu';
import Footer from '../footer';

// TODO: Keep it temporarily for reference
// import '../style.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../../styles/global.css';
import '../../styles/common.css';

import { container } from './index.module.css';

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
                <header className={classNames('main-container', container)}>
                    <title>{pageTitle}</title>
                    <Header />
                    <Menu onClickToggle={() => actionOnToggleClick()}></Menu>
                </header>
                <main>{children}</main>
                <Footer />
            </div>
            <MobileMenu isMenuOpened={isMenuOpened}></MobileMenu>
        </>
    );
};

export default Layout;
