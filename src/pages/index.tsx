import React from "react";
import Layout from "../components/layout";
import Carousel from "../components/indexPage/carousel";
import AboutUsAndEvents from "../components/indexPage/aboutUsAndEvents";
import Footer from "../components/indexPage/footer";
import "../styles/index.css";
import ConsultingServices from "../components/indexPage/consultingServices";
import CoreServices from "../components/indexPage/coreServices";
import TvContactMap from "../components/sswTvContactMap";
import { WHITE, WHITE_SMOKE } from "../constants";

const IndexPage = () => {
  return (
    <Layout
      backgroundColor={WHITE}
      pageTitle="SSW Consulting - .NET, Web, Mobile, CRM, SharePoint, Azure, Power BI, Angular, React, Office 365 and Dynamics"
    >
      <div className="top-section">
        <Carousel />

        <ConsultingServices />

        <CoreServices />
      </div>

      <AboutUsAndEvents />

      <TvContactMap />

      <Footer />
    </Layout>
  );
};

export default IndexPage;
