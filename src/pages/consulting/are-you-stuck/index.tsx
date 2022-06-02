import React from "react";

import Breadcrumb from '../../../components/breadcrumb';
import Clients from '../../../templates/consulting/components/clients';
import Layout from "../../../components/layout";
import About from "../../../templates/consulting/components/about";
import Testimonials from "../../../templates/consulting/components/testimonials";
import Solution from "../../../components/are-you-stuck/components/solution";
import BookingTabs from "../../../components/are-you-stuck/components/booking-tabs";
import BuildPlatform from '../../../components/builtPlatform';
import Technologies from "../../../templates/consulting/components/technologies";
// import MainServices from "../../../components/are-you-stuck/components/main-services";

import './index.module.css';
import { WHITE } from "../../../constants";
import { graphql } from "gatsby";

const AreYouStuck = () => {
  // const { solution } = data
  const pageTitle = `Are you stuck on legacy technologies? | SSW Consulting - Sydney, Brisbane, Melbourne`
  const solution = `help`
  const techHeader = `SSW's main services`
  const techList = [
    {
      "name": "service-azure"
    },
    {
      "name": "service-dynamics"
    },
    {
      "name": "service-mobile-app-dev"
    },
    {
      "name": "service-sharepoint"
    },
    {
      "name": "service-UI-UX-design"
    },
    {
      "name": "service-web-applications"
    }
  ]

  const breadcrumbData = [
    {
        name: 'Home',
        path: '/',
    },
    {
        path: 'are-you-stuck',
    },
    {
        name: pageTitle,
    },
];

  return (
    <Layout pageTitle={pageTitle} backgroundColor={WHITE}>
      <>
        <Breadcrumb data={breadcrumbData}/>

        <BookingTabs />

        <Testimonials />

        <About />

        <Clients />

        {/* <Technologies techList={techList}/> */}
        <Technologies techHeader={techHeader} technologies={techList} />

        <Solution project={solution} />

        <BuildPlatform backgroundColor={WHITE}/>
      </>
    </Layout>
  );
};

export default AreYouStuck;