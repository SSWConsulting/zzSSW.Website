import React from "react"

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import { graphql } from "gatsby";

import * as styles from "./index.module.css";

import speech_bubble from '../../assets/images/speech-bubble.png';

const LegacyTemplate = ({ data }) => {
    const content = data;
    console.log(content.allMdx.nodes);
    const pageTitle = `Software Auditing | SSW Consulting - Sydney, Brisbane, Melbourne`;
    const breadcrumbData = [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Services",
          path: "/consulting",
        },
        {
          name: pageTitle,
        },
    ];

    return (
        <Layout pageTitle="Software Auditing | SSW Consulting - Sydney, Brisbane, Melbourne">
            <div className='legacy-banner'>
                <img src={speech_bubble} />
                <Breadcrumb data={breadcrumbData} />
         
                <h1 className='no-header-margin'>Software Auditing</h1>
                <h2>Auditing services to improve your software</h2>
            </div>
            <div className="main-container">
            { 
                content.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                    </article>
                ))
            }
                <div className="row">
                    <div className="col-9">
                        <div className="body">
                            <h2><a id="overview"></a>Fine tune your software with SSW software auditing services</h2>
                            <p>A crisis will pinpoint the shortfalls of your current technologies. Why wait for down-time or poor sales to discover where your application could be improved?</p>
                            <p>The companies that we have done audits for range from developer utilities to major enterprise systems.</p>
                            <p>Read <a href="https://www.ssw.com.au/rules/mentoring-programs">Do you have a mentoring program?</a></p>
                            <h3>How long does this normally take?</h3>
                        </div>
                    </div>
                    <div className="col-3">
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
                </div>
            </div>
        </Layout>
    );
}
export const legacyPageQuery = graphql`
    query legacyContentQuery {
        allMdx(filter: {fields: {source: {eq: "legacy"}}}) {
        nodes {
            slug
            body
            frontmatter {
            title
            type
            }
        }
        }
    }
`;
export default LegacyTemplate;