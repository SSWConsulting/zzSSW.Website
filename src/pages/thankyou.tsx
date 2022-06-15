import { Link } from "gatsby";
import React from "react";
import Breadcrumb from "../components/breadcrumb";
import external from "../assets/images/external-link.gif";
import Layout from "../components/layout";
import "../styles/thankyou.css";
import { BASE_URL, PAGE_TYPE, PAGE_TITLE, WHITE_SMOKE } from "../constants";
import BuildPlatform from "../components/builtPlatform";

const ThankyouPage = () => {
  const data = [
    {
      name: PAGE_TYPE.Home,
      path: BASE_URL,
    },
    {
      name: PAGE_TYPE.Thankyou,
    },
  ];

  return (
    <Layout backgroundColor={WHITE_SMOKE} pageTitle={PAGE_TITLE.Thankyou}>
      <div className="main-container header-content ">
        <Breadcrumb data={data} />
        <h1>
          <span className="red ">Thank you</span> for contacting us!
        </h1>
      </div>

      <div className="body-background-white">
        <div className="main-container body-content">
          <p>Thank you for your inquiry.</p>
          <p>
            We will be in contact soon. In the meantime, please have a look at
            our&nbsp;
            <a href="/Consulting/" target="_blank">
              Consulting Services
            </a>
            &nbsp;
            <img src={external}></img> and&nbsp;
            <a href="/People" target="_blank">
              People
            </a>
            &nbsp;
            <img src={external}></img>.
          </p>
        </div>
      </div>
      <BuildPlatform backgroundColor={WHITE_SMOKE} />
    </Layout>
  );
};

export default ThankyouPage;
