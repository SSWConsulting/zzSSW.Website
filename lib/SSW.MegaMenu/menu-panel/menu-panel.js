import React from 'react';
import { MenuImg } from './menu-panel.module.css';
import Dropdown from '../dropdown/dropdown';


const MenuPanel = ({ item, prefix }) => {
    const getRootUrl = () => {
        if (prefix && typeof window !== 'undefined') {
            return (
                window.location.origin
                    ? window.location.origin + '/'
                    : window.location.protocol + '/' + window.location.host + '/') + prefix + '/';
        }
        return '';
    }
    return (
        <>
            <div className={MenuImg}>
                <img src={getRootUrl() + require("../images/" + item.groupImageUrl).default} alt={item.text} loading="eager" />
            </div>
            <Dropdown items={item.children}></Dropdown>
        </>
    )
}

export default MenuPanel;