import React from 'react';
import "./index.css";

const SideNav = ({ title }) => {
    // TODO: modify existing MDX pages to handle sidenav data
    return(
        <div id="pagenav">
            <h2 className="navtitle">{title}:</h2>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="#technologies">Key Technologies</a></li>
            </ul>
        </div>
    )
}

export default SideNav;