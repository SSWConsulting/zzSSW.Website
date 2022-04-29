import React from "react";

import Breadcrumb from './../../../../components/breadcrumb';
import Clients from "../../../../components/clients";
import Layout from "../../../../components/layout";
import About from "../../../../templates/consulting/components/about";
import Testimonials from "../../../../templates/consulting/components/testimonials";
import Solution from "../../../../templates/consulting/components/solution";
import BuildPlatform from './../../../../components/builtPlatform';


const AreYouStuck = ({ data }) => {
  const { title, solution } = data
  const pageTitle = `${title} | SSW Consulting - Sydney, Brisbane, Melbourne`
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

      </>

    </Layout>
  );
};
