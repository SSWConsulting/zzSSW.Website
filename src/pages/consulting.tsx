import React from "react";
import Breadcrumb from "../components/breadcrumb";
import Layout from "../components/layout";
import { SEO } from "../components/seo";
import { WHITE, WHITE_SMOKE } from "../constants";

const ConsultingServices = () => {
  const data = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Consulting",
    },
  ];

  return (
    <Layout
      backgroundColor={WHITE_SMOKE}
    >
      <div className="main-container">
        <Breadcrumb data={data} />
        <h1>Consulting Services</h1>
        {/* TODO: Content */}
      </div>
    </Layout>
  );
};

export default ConsultingServices;

export const Head = () => (
  <SEO />
)
