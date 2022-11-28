import React from "react";

import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import Booking from "./components/booking";
import Benefits from "./components/benefits";
import Testimonials from "./components/testimonials";
import About from "./components/about";
import Clients from "./components/clients";
import TechnologCards from "./components/technologyCards";
import Solution from "./components/solution";
import BuildPlatform from "../../components/builtPlatform";

import "./index.module.css";
import { graphql } from "gatsby";
import { WHITE, WHITE_SMOKE } from "../../constants";

const ConsultingTemplate = ({ data }) => {
  const { title, booking, benefits, solution, techHeader, technologyCards } =
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

        {techHeader?.length > 0 && (
          <TechnologCards
          technologyCards={technologyCards}
          techHeader={techHeader}
        />
        )}

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
        techHeader
        technologyCards {
          name
        }
        solution {
          project
        }
        benefits {
          benefitList {
            description
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
          }
          rule {
            name
            url
          }
        }
      }
      body
    }
  }
`;
export default ConsultingTemplate;
