import React from "react";
import Breadcrumb from "../components/breadcrumb";
import Layout from "../components/layout";
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
      pageTitle="SSW Consulting - .NET, Web, Mobile, CRM, SharePoint, Azure, Power BI, Angular, React, Office 365 and Dynamics"
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

export { Head } from "../components/head"
