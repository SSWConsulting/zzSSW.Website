    import React from "react"

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as styles from "./index.module.css";

import speech_bubble from '../../assets/images/speech-bubble.png';
import BookingForm from "../../components/bookingForm";

const LegacyTemplate = ({ data }) => {
    const { title, subtitle } = data.mdx.frontmatter
    const pageTitle = `${title} | SSW Consulting - Sydney, Brisbane, Melbourne`;
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
        <Layout pageTitle={pageTitle}>
            <div className='legacy-banner'>
                <img src={speech_bubble} />
                <Breadcrumb data={breadcrumbData} />
                <h1 className='no-header-margin'>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className="main-container">
                <div className="row">
                    <div className="col-9">
                        <div className="body">
                            <MDXRenderer>
                                {data.mdx.body}
                            </MDXRenderer>
                        </div>
                    </div>
                    <div className="col-3">
                        <div id="index">
                            <h2>DNN:</h2>
                            <ul>
                                <li><a href="#overview">Overview</a></li>
                                <li><a href="#dnnbenefits">Benefits</a></li>
                                <li><a href="#keytechnologies">Key Technologies</a></li>
                                <li><a href="#getstarted">How to get started</a></li>
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
                </div>
                <h2>Australia Wide</h2>
                <p>We have consultants available in all Australian capital cities including Sydney, Melbourne, Brisbane, Adelaide, Perth and Canberra.</p>
                <div className='mb-5'>
                    <BookingForm />
                </div>
            </div>
        </Layout>
    );
}
export const legacyPageQuery = graphql`
    query legacyPage($slug: String) {
        mdx(slug: { eq: $slug }) {
            frontmatter {
                type
                title
                subtitle
            }
            body
        }
    }
`;
export default LegacyTemplate;