import React from "react";

import Breadcrumb from './../../../../components/breadcrumb';
import Clients from '../../../../templates/consulting/components/clients';
import Layout from "../../../../components/layout";
import About from "../../../../templates/consulting/components/about";
import Testimonials from "../../../../templates/consulting/components/testimonials";
import Solution from "../are-you-stuck/components/solution";
import Booking from "../are-you-stuck/components/booking";
import BuildPlatform from './../../../../components/builtPlatform';

import './index.module.css';

const AreYouStuck = ({ data }) => {
  // const { solution } = data
  const pageTitle = `Are you stuck on legacy technologies? | SSW Consulting - Sydney, Brisbane, Melbourne`
  const solution = `help`
  const businessTitle = 'Are your staff being driven nuts by outdated software or manual processes?'
  const businessSubtitle = 'Need the right software to multiply your teams output?'
  const breadcrumbData = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Services',
        path: '/consulting',
    },
    {
        name: pageTitle,
    },
];

  return (
    <Layout pageTitle={pageTitle}>
      <>
        <Breadcrumb data={breadcrumbData}/>

        <Booking title={businessTitle} subTitle={businessSubtitle} />

        <Testimonials />

        <About />

        <Clients />

        <Solution project={solution} />

        <BuildPlatform />
      </>

    </Layout>
  );
};

export default AreYouStuck;