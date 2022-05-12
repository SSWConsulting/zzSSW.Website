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

const ConsultingServices = ({data}) => {
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

  return (
    <Layout pageTitle="SSW Consulting - .NET, Web, Mobile, CRM, SharePoint, Azure, Power BI, Angular, React, Office 365 and Dynamics">
    <div className='legacy-banner'>
        <img src={speech_bubble} />
        <Breadcrumb data={databc} />
        <h1 className='no-header-margin'>Consulting Services</h1>
    </div>

    <div className="flex-services">
      <div className="p-2">Flex item 1</div>
      <div className="p-2">Flex item 2</div>
      <div className="p-2">Flex item 3</div>
      <div className="p-2">Flex item 4</div>
      <div className="p-2">Flex item 5</div>
      <div className="p-2">Flex item 6</div>
    </div>

      <div className="main-container">

        <div id="maincontentColumns" className="row">

            <Row>
                <Col sm={3}>
                    <div id="SidebarLeft">
                        <h3 className="filter-header"><a className="filter"></a>I am looking for...</h3>
                            <ul id="filters" className="option-set">
                                {pageMenu[0].frontmatter.pageLeftMenu.map((x, idx) => {
                                    return (
                                        <SideMenu key={idx} menuText={x.title} menuLink={x.link} menuFilter={x.data_filter}/>
                                    )
                                })}
                            </ul>
                    </div>
                </Col>
                <Col sm={9}>
                    <div id="maincontent">
                        <div id="isotope">
                        
                        {pageServices.map(y => {
                        if (y.frontmatter?.serviceList.list) {
                        return (
                            y.frontmatter.serviceList.list.map((p, idx) => {
                            const tempobject = {
                                serviceTitle: p.title, serviceLink: p.link, serviceDesc: p.description, serviceFilter: p.filter_item, serviceImage: p.image?.childImageSharp.gatsbyImageData
                            }
                            return (
                                <ServiceContent key={idx} props={tempobject} />
                            )
                            })
                        )
                        }

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

const SideMenu = ({menuText, menuLink, menuFilter}) => {
  return (
    <li><a href={"#" + menuLink} data-filter={menuFilter}>{menuText}</a></li>
  )
}

const ServiceContent = ({props: {serviceDesc, serviceFilter, serviceLink, serviceTitle, serviceImage}}) => {
  return (
    <div className={serviceFilter}>
      <Link to={serviceLink}>
        <GatsbyImage image={getImage(serviceImage)} alt={serviceTitle} />
          <div className="ourHolder-text">
              <h3>{serviceTitle}</h3>
              <p>{serviceDesc}</p>
          </div>
      </Link>
    </div>
  )
}


//<GatsbyImage image={serviceImagePath} alt={serviceTitle} />

export default ConsultingServices;

export const query = graphql`
{
  allMdx {
    nodes {
      frontmatter {
        pageLeftMenu {
          link
          title
          data_filter
        }
        serviceList {
          filter_item
          heading
          list {
            description
            filter_item
            link
            title
            image {
              relativePath
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
}
`
/*
{
  allMdx {
    nodes {
      frontmatter {
        pageLeftMenu {
          link
          title
          data_filter
        }
      }
    }
  }
}
{
  allMdx {
    nodes {
      frontmatter {
        pageLeftMenu {
          link
          title
          data_filter
        }
        serviceList {
          filter_item
          heading
          list {
            description
            filter_item
            link
            title
            image {
              relativePath
            }
          }
        }
      }
    }
  }
}
*/