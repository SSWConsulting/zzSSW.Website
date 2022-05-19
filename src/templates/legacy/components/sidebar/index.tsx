import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, {ReactElement} from 'react';

import * as styles from "./index.module.css";

const Sidebar = ({ }) => {
    // TODO: create mdx hook for content
    return(
        <div>
            <div id="pagenav">
                <h2 className={styles.navtitle}>Quick Navigate</h2>
                <ul>
                    <li><a href="#test">test</a></li>
                </ul>
            </div>
            <div className="sidebar">
                <div id="OurExperience">
                    <div className={styles.section}>
                        <h3>Get your project started!</h3>
                        <img className="phone" src="/ssw/images/icons/phone.png" alt="phone icon"/>
                        <h3>+61 2 <strong>9953 3000</strong></h3>
                        <p>SSW will look at your development requirements and help you design and implement an effective app.</p>
                    </div>
                    <div className={styles.section}>
                        <h3>Our experience</h3>
                        <p>SSW Consulting has 32 years of experience developing awesome Microsoft solutions that today build on top of Angular, React, Azure, TFS, SharePoint, .NET, Dynamics 365 and SQL Server.</p>
                        <p>With 40+ consultants in 5 countries, we have delivered the best in the business to more than 1,000 clients in 15 countries.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;