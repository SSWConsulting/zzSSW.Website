import React from 'react';

import Header from '../header';
import Footer from '../footer';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../../styles/global.css';
import '../../styles/common.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
