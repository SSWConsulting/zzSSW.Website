import React from "react"

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";

import "./index.module.css";

import speech_bubble from '../../assets/images/speech-bubble.png';

const LegacyTemplate = () => {
    // TODO: add custome page title
    const pageTitle = `Software Auditing | SSW Consulting - Sydney, Brisbane, Melbourne`;
    const data = [
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
    
    // TODO: build layout components
    return (
        <Layout pageTitle="Software Auditing | SSW Consulting - Sydney, Brisbane, Melbourne">
                        
            <div className='legacy-banner'>
                <img src={speech_bubble} />
                <Breadcrumb data={data} />
                <h1 className='no-header-margin'>Software Auditing</h1>
                <h2>Auditing services to improve your software</h2>
            </div>
            <div className="main-container">
              <div className="body">
                <h2><a id="overview"></a>Fine tune your software with SSW software auditing services</h2>
                <p>A crisis will pinpoint the shortfalls of your current technologies. Why wait for down-time or poor sales to discover where your application could be improved?</p>
                <p>The companies that we have done audits for range from developer utilities to major enterprise systems.</p>
                <p>Read <a href="https://www.ssw.com.au/rules/mentoring-programs">Do you have a mentoring program?</a></p>
                <h3>How long does this normally take?</h3>

              </div>
            </div>
        </Layout>
    );
}

export default LegacyTemplate;