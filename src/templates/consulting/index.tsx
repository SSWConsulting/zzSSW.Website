import React from "react";

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import Booking from "./components/booking";
import Benefits from "./components/benefits";
import Testimonials from "./components/testimonials";
import About from "./components/about";
import Clients from "./components/clients";
import Technologies from "./components/technologies";
import Solution from "./components/solution";
import BuildPlatform from "../../components/builtPlatform";

import "./index.module.css";
import { graphql } from "gatsby";
import { WHITE, WHITE_SMOKE } from "../../constants";

const ConsultingTemplate = ({ data }) => {
  const { title, booking, benefits, solution, technologies } =
    data.mdx.frontmatter;
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
    <Layout backgroundColor={{ WHITE_SMOKE }} pageTitle={pageTitle}>
      <>
        <Breadcrumb data={breadcrumbData} />

        <Booking {...booking} />

        <Benefits benefits={benefits} markdownContent={data.mdx.body} />

        <Testimonials />

        <About />

        <Clients />

        <Technologies techList={technologies} />

        <Solution {...solution} />

        <BuildPlatform backgroundColor={WHITE} />
      </>
    </Layout>
  );
};
export const consultingPagesQuery = graphql`
  query PageByPath($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        type
        title
        booking {
          title
          subTitle
        }
        benefits {
          benefitList {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            description
            linkName
            linkURL
          }
          rule {
            name
            url
          }
        }
        solution {
          project
        }
        technologies {
          name
        }
      }
      body
    }
  }
`;
export default ConsultingTemplate;
