import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import Layout from "../../components/layout";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import speech_bubble from "../../assets/images/speech-bubble.png";

import "./index.css";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConsultingServices = ({ data }) => {
  const databc = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Consulting",
    },
  ];

  const pageMenu = data.allMdx.nodes.filter(x => x.frontmatter.pageLeftMenu);
  const pageServices = data.allMdx.nodes.filter(y => y.frontmatter.serviceList);

  console.log(pageServices);

  const serviceArray = ["_0", "_1", "_2", "_3", "_4", "_5"];

  return (
    <Layout pageTitle="SSW Consulting - .NET, Web, Mobile, CRM, SharePoint, Azure, Power BI, Angular, React, Office 365 and Dynamics">
      <div className='legacy-banner'>
        <img src={speech_bubble} />
        <Breadcrumb data={databc} />
        <h1 className='no-header-margin'>Consulting Services</h1>
        <br />
      </div>

      <br />
      <br />

      <div className="main-container">

        <div id="maincontentColumns" className="row">

          <Row>
            <Col sm={3}>
              <div id="SidebarLeft">
                <h3 className="filter-header"><a className="filter"></a>I am looking for...</h3>
                <ul id="filters" className="option-set">
                  {pageMenu[0].frontmatter.pageLeftMenu.map((x, idx) => {
                    return (
                      <SideMenu key={idx} menuText={x.title} menuLink={x.link} menuFilter={x.data_filter} />
                    )
                  })}
                </ul>
              </div>
            </Col>
            <Col sm={9}>
              <div id="maincontent">
                <div id="isotope">

                  {serviceArray.map((item, key) => { /* <h1>{item}</h1> */
                    return (
                      <div key={key}>
                        
                        {pageServices.map(y => {
                        if (y.frontmatter?.serviceList._0.list) {
                          return (
                            <>
                              <div className={y.frontmatter?.serviceList._0.heading_filter}>
                                <h2>{y.frontmatter?.serviceList._0.heading}</h2>
                              </div>

                              <div className="flex-services">

                                {y.frontmatter.serviceList._0.list.map((p, idx) => {
                                  const tempobject = {
                                    serviceTitle: p.title, serviceLink: p.link, serviceDesc: p.description, serviceFilter: p.filter_item, serviceImage: p.image?.childImageSharp.gatsbyImageData
                                  }
                                  return (
                                    <ServiceContent key={idx} props={tempobject} />
                                  )
                                })}

                              </div>

                            </>
                          )
                        }

                      })}
                      </div>
                    )
                  })}

                </div>
              </div>
            </Col>
          </Row>

        </div>

      </div>
    </Layout>
  );
};

const SideMenu = ({ menuText, menuLink, menuFilter }) => {
  return (
    <li><a href={"#" + menuLink} data-filter={menuFilter}>{menuText}</a></li>
  )
}

const ServiceContent = ({ props: { serviceDesc, serviceFilter, serviceLink, serviceTitle, serviceImage } }) => {
  return (
    <div className="service-item">

      <div className={serviceFilter}>
        <Link to={serviceLink}>
          <GatsbyImage image={getImage(serviceImage)} alt={serviceTitle} className="floatServiceImage" />
          <div className="ourHolder-text">
            <h3>{serviceTitle}</h3>
            <p>{serviceDesc}</p>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default ConsultingServices;

export const query = graphql`
{
  allMdx {
    nodes {
      frontmatter {
        pageLeftMenu {
          data_filter
          link
          title
        }
        serviceList {
          _0 {
            heading
            heading_filter
            list {
              description
              filter_item
              link
              title
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          _1 {
            heading
            heading_filter
            list {
              description
              filter_item
              link
              title
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          _2 {
            heading
            heading_filter
            list {
              description
              filter_item
              link
              title
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          _3 {
            heading
            heading_filter
            list {
              description
              filter_item
              link
              title
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          _4 {
            heading
            heading_filter
            list {
              description
              filter_item
              link
              title
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          _5 {
            heading
            heading_filter
            list {
              description
              filter_item
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              link
              title
            }
          }
        }
      }
    }
  }
}
`