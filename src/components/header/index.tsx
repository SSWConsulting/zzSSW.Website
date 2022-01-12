import React from 'react';
import TopBar from './topBar';
import Menu from '../../../lib/SSW.MegaMenu/menu/menu';
import { container } from './index.module.css';

const Header = () => (
    <header className={container}>
        <div className="main-container">
            <TopBar />
            <Menu />
        </div>
    </header>
);

export default Header;
