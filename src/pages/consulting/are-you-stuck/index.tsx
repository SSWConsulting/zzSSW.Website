import React from "react";

import Breadcrumb from '../../../components/breadcrumb';
import Clients from '../../../templates/consulting/components/clients';
import Layout from "../../../components/layout";
import About from "../../../templates/consulting/components/about";
import Testimonials from "../../../templates/consulting/components/testimonials";
import Solution from "../../../components/are-you-stuck/components/solution";
import BookingTabs from "../../../components/are-you-stuck/components/booking-tabs";
import BuildPlatform from '../../../components/builtPlatform';
import MainServices from "../../../components/are-you-stuck/components/main-services";

import './index.module.css';

const AreYouStuck = () => {
  // const { solution } = data
  const pageTitle = `Are you stuck on legacy technologies? | SSW Consulting - Sydney, Brisbane, Melbourne`
  const solution = `help`
  const techList = [
    {
      "name": "web-applications"
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

console.log("test 1")

  return (
    <Layout pageTitle={pageTitle}>
      <>
        <Breadcrumb data={breadcrumbData}/>

        <BookingTabs />

        <Testimonials />

        <About />

        <Clients />

        <MainServices techList={techList}/>

        <Solution project={solution} />

        <BuildPlatform />
      </>

    </Layout>
  );
};

export default AreYouStuck;