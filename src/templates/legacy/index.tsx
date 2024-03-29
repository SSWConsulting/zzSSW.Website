import React from "react";
import "./index.css";
import speech_bubble from "../../assets/images/speech-bubble.png";
import BookingForm from "../../components/bookingForm";

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Body from "./components/body";
import Sidebar from "./components/sidebar";
import BookingFormFormik from "../../components/bookingFormFormik";
import { SEO } from "../../components/seo";

const LegacyTemplate = ({ data }) => {
  const { title, subtitle, featureImage } = data.mdx.frontmatter;
  const pageTitle = `${title} | SSW Consulting - Sydney, Brisbane, Melbourne`;
  const breadcrumbData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/consulting",
    },
    {
      name: pageTitle,
    },
  ];

  return (
    <Layout pageTitle={pageTitle}>
      <div className="legacy-banner">
        <img src={speech_bubble} />
        <Breadcrumb data={breadcrumbData} />
        <GatsbyImage
          className="featureImage"
          image={getImage(featureImage)}
          alt="feature image"
        />
        <h1 className="no-header-margin">{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="main-container">
        <div className="row">
          <div className="col-9">
            <Body content={data.mdx.body} />
            <div className="booking-form">
              <h2>Australia Wide</h2>
              <p>
                We have consultants available in all Australian capital cities
                including Sydney, Melbourne, Brisbane, Adelaide, Perth and
                Canberra.
              </p>
              <div className="mb-5">
                <BookingFormFormik isShareForm={false} />
              </div>
            </div>
          </div>
          <div className="col-3">
            <Sidebar title={title} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const legacyPageQuery = graphql`
  query legacyPage($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        type
        title
        subtitle
        featureImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;
export default LegacyTemplate;

export const Head = () => (
  <SEO />
)