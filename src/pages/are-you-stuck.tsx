import React from "react";

import Breadcrumb from '../components/breadcrumb';
import Clients from '../components/clients';
import Layout from "../components/layout";
import About from "../templates/consulting/components/about";
import Testimonials from "../templates/consulting/components/testimonials";
import Solution from "../templates/consulting/components/solution";
import DevBooking from "../components/are-you-stuck/components/dev-booking";
import BuildPlatform from '../components/builtPlatform';

import './index.module.css';

const AreYouStuck = ({ data }) => {
  // const { solution } = data
  const pageTitle = `Are you stuck on legacy technologies? | SSW Consulting - Sydney, Brisbane, Melbourne`
  const solution = `help`

  const businessTitle = 'Are your <span class="red"> staff being driven nuts </span> by outdated software or manual processes?'
  const businessSubtitle = 'Need the right software to multiply your teams output?'

  const devTitle = 'Find a way out of your nightmare'
  const devSubtitle = 'Are you stuck on legacy technologies and using sub-optimal practices?'

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

        <DevBooking title={devTitle} subTitle={devSubtitle} />

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