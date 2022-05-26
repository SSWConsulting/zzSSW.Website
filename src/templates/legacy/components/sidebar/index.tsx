import React from 'react';
import phoneImg from '../../../../assets/images/phone.png';
import SideNav from '../sidenav';
import "./index.css";

const Sidebar = ({ title }) => {
    // TODO: create mdx hook for sidebar content
    
    return(
        <div>
            {title === "Software Auditing" ? "" : <SideNav title={title} />}
            <div className="sidebar">
                <div id="OurExperience">
                    <div className="section">
                        <h3>Get your project started!</h3>
                        <img className="phone" src={phoneImg} alt="phone icon"/>
                        <h4><strong>+61 2 9953 3000</strong></h4>
                        <p>SSW will look at your development requirements and help you design and implement an effective app.</p>
                    </div>
                    <div className="section">
                        <h3>Our experience</h3>
                        <p>SSW Consulting has 32 years of experience developing awesome Microsoft solutions that today build on top of Angular, React, Azure, TFS, SharePoint, .NET, Dynamics 365 and SQL Server.</p>
                        <p>With 40+ consultants in 5 countries, we have delivered the best in the business to more than 1,000 clients in 15 countries.</p>
                    </div>
                    <div className="section">
                        <h3>Our Methodology</h3>
                        <p>SSW's Rules to Better Project Management allows businesses to address their most important challenges first, and respond quickly to change. Our rules advocate software consultants working on-site, or on the phone, so long as there is close consultation with business users, with the goal to become integrated members of the client's team.</p>
                        <p>Learn more about SSW development Methodology.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;