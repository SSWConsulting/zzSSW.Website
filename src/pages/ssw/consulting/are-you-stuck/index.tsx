import React from "react";

import Breadcrumb from './../../../../components/breadcrumb';
import Clients from "../../../../components/clients";
import Layout from "../../../../components/layout";
import About from "../../../../templates/consulting/components/about";
import Testimonials from "../../../../templates/consulting/components/testimonials";
import Solution from "../are-you-stuck/components/solution";
import BuildPlatform from './../../../../components/builtPlatform';

import './index.module.css';

const AreYouStuck = ({ data }) => {
  // const { solution } = data
  const pageTitle = `Are you stuck on legacy technologies? | SSW Consulting - Sydney, Brisbane, Melbourne`
  const solution = `help`
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