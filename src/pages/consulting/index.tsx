import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumb";
import Layout from "../../components/layout";
import { graphql, PageRenderer } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import speech_bubble from "../../assets/images/speech-bubble.png";
import Filter from "../consulting/filter";

import "./index.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

let mainServiceArray: any = [];

/* Displays the service items */
const ServiceContent = ({
  props: {
    serviceDesc,
    serviceFilter,
    serviceLink,
    serviceTitle,
    serviceImage,
  },
}) => {
  console.log("PROPS", serviceTitle);
  return (
    <div className="service-item">
      <div className={serviceFilter}>
        <Link to={serviceLink}>
          <GatsbyImage
            image={getImage(serviceImage)}
            alt={serviceTitle}
            className="floatServiceImage"
          />
          <div className="ourHolder-text">
            <h3>{serviceTitle}</h3>
            <p>{serviceDesc}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
const ser = ({ data }) => {
  console.log(data);
};
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
  console.log("data", data);
  const [serviceObjectArray, setServiceObjectArray]: any = useState([]);
  const nod = data.allMdx.nodes[0].frontmatter.pageLeftMenu;
  const pageMenuT = data.allMdx.nodes[0].frontmatter.pageLeftMenu;

  const pageMenu = data.allMdx.nodes.filter((x) => x.frontmatter.pageLeftMenu);
  console.log("pageMenu", pageMenu);
  const pageServices = data.allMdx.nodes.filter(
    (y) => y.frontmatter.serviceList
  );
  console.log("nod", nod);
  console.log("pageServices", pageServices);

  useEffect(() => {
    // let len = serviceObjectArray.length;
    // setServiceObjectArray([serviceObjectArray.splice(0, len)]);
    // console.log(serviceObjectArray);
  }, [serviceObjectArray]);

  /* This array is used to read each service category in the mdx file */
  const serviceArray = ["_0", "_1", "_2", "_3", "_4", "_5"];
  const MenuHandling = (menuFilter) => {
    console.log("menuFilter", menuFilter);
    console.log("SERVICE \n", serviceObjectArray);

    let len = serviceObjectArray.length;

    setServiceObjectArray([serviceObjectArray.splice(0, len)]);
    console.log(serviceObjectArray);
    let displayArray: any = [];
    console.log("displayArray");
    displayArray = mainServiceArray.filter((fi) => {
      console.log(fi.filter_item.includes(menuFilter.substring(1)));
    });

    console.log("DisplayArray: \n", displayArray);
    console.log("MAIN SERV", mainServiceArray);
    setServiceObjectArray(
      mainServiceArray.filter((fi) =>
        fi.filter_item.includes(menuFilter.substring(1))
      )
    );
    console.log("after assignment \n", serviceObjectArray);

    // displayArray.map((serviceListItem, key) => {
    //   const tempobject = {
    //     serviceTitle: serviceListItem.title,
    //     serviceLink: serviceListItem.link,
    //     serviceDesc: serviceListItem.description,
    //     serviceFilter: serviceListItem.filter_item,
    //     serviceImage: serviceListItem.image?.childImageSharp.gatsbyImageData,
    //   };
    //   console.log(tempobject);

    //   return (
    //     <div key={key}>
    //       <ServiceContent key={key} props={tempobject} />
    //     </div>
    //   );
    // });
  };
  return (
    <>
      <Layout
        backgroundColor={"#ffff"}
        pageTitle="SSW Consulting - .NET, Web, Mobile, CRM, SharePoint, Azure, Power BI, Angular, React, Office 365 and Dynamics"
      >
        <div className="legacy-banner">
          <img src={speech_bubble} />
          <Breadcrumb data={databc} />
          <h1 className="no-header-margin">Consulting Services</h1>
          <br />
        </div>

        <br />
        <br />

        <div className="main-container">
          <div id="maincontentColumns" className="row">
            <Row>
              <Col sm={3}>
                <div id="SidebarLeft">
                  <h3 className="filter-header">
                    <a className="filter"></a>I am looking for...
                  </h3>
                  <ul id="filters" className="option-set">
                    {/* Loops through the pageLeftMenu */}
                    {pageMenu[0].frontmatter.pageLeftMenu.map((x, idx) => {
                      console.log("x", x, idx);
                      return (
                        // <SideMenu
                        //   key={idx}
                        //   menuText={x.title}
                        //   menuLink={x.link}
                        //   menuFilter={x.data_filter}
                        //   menuClass={x.class}
                        // />
                        <li>
                          <a
                            href={"#" + x.link}
                            data-filter={x.data_filter}
                            className={x.class}
                            onClick={() => {
                              MenuHandling(x.data_filter);
                            }}
                          >
                            {x.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Col>
              <Col sm={9}>
                <div id="maincontent">
                  <div id="isotope">
                    {/* Loops through each of the service category */}
                    {serviceArray.map((serviceListItem, key) => {
                      return (
                        <div key={key}>
                          {/* Adds the service item heading and each of the service items following that */}
                          {pageServices.map((y) => {
                            if (
                              y.frontmatter?.serviceList[serviceListItem].list
                            ) {
                              console.log(
                                "Service",
                                y.frontmatter?.serviceList[serviceListItem].list
                              );
                              // setServiceObjectArray(
                              //   y.frontmatter?.serviceList[serviceListItem].list
                              // );
                              return (
                                <>
                                  <ServiceHeader
                                    heading={
                                      y.frontmatter?.serviceList[
                                        serviceListItem
                                      ].heading
                                    }
                                    headingfilter={
                                      y.frontmatter?.serviceList[
                                        serviceListItem
                                      ].heading_filter
                                    }
                                  />

                                  {/* <div className="flex-services">
                                    {y.frontmatter?.serviceList[
                                      serviceListItem
                                    ].list.map((p, idx) => {
                                      const tempobject = {
                                        serviceTitle: p.title,
                                        serviceLink: p.link,
                                        serviceDesc: p.description,
                                        serviceFilter: p.filter_item,
                                        serviceImage:
                                          p.image?.childImageSharp
                                            .gatsbyImageData,
                                      };
                                      // setServiceObject(tempobject);
                                      // console.log("tempobject", tempobject);
                                      return (
                                        <ServiceContent
                                          key={idx}
                                          props={tempobject}
                                        />
                                      );
                                    })}
                                  </div> */}
                                </>
                              );
                            }
                          })}

                          {/* Testing filtering in 1 large array */}
                          {pageServices.map((fl) => {
                            if (
                              fl.frontmatter?.serviceList[serviceListItem].list
                            ) {
                              {
                                fl.frontmatter.serviceList[
                                  serviceListItem
                                ].list.map((serviceItem, idx) => {
                                  mainServiceArray.push(serviceItem);
                                });
                              }
                            }
                          })}
                        </div>
                      );
                    })}
                    <div className="flex-services">
                      {serviceObjectArray.map((p, idx) => {
                        console.log("OBJECT ARRAY", p.title);
                        const tempobject = {
                          serviceTitle: p.title,
                          serviceLink: p.link,
                          serviceDesc: p.description,
                          serviceFilter: p.filter_item,
                          serviceImage:
                            p.image?.childImageSharp.gatsbyImageData,
                        };

                        // setServiceObject(tempobject);
                        // console.log("tempobject\n\n", tempobject);
                        return <ServiceContent key={idx} props={tempobject} />;
                      })}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

/* Displays the pageLeftMenu */
// const SideMenu = ({ menuText, menuLink, menuFilter, menuClass }) => {
//   return (
//     <li>
//       <a
//         href={"#" + menuLink}
//         data-filter={menuFilter}
//         className={menuClass}
//         onClick={() => {
//           MenuHandling2({ menuFilter });
//         }}
//       >
//         {menuText}
//       </a>
//     </li>
//   );
// };

/* Displays the heading for service items */
const ServiceHeader = ({ heading, headingfilter }) => {
  return (
    <div className={headingfilter}>
      <h2>{heading}</h2>
    </div>
  );
};

/* Handles thMenuHandlinge onClick event for the side menu and dumps serviceItem matching */
const MenuHandling2 = ({ menuFilter }) => {
  console.log("menuFilter", menuFilter);
  console.log("mainServiceArray", menuFilter.substring(1));
  const displayArray = mainServiceArray.filter((fi) =>
    fi.filter_item.includes(menuFilter.substring(1))
  );

  displayArray.map((serviceListItem, key) => {
    const tempobject = {
      serviceTitle: serviceListItem.title,
      serviceLink: serviceListItem.link,
      serviceDesc: serviceListItem.description,
      serviceFilter: serviceListItem.filter_item,
      serviceImage: serviceListItem.image?.childImageSharp.gatsbyImageData,
    };
    console.log(tempobject);
    // setServiceObject({
    //   serviceTitle: serviceListItem.title,
    //   serviceLink: serviceListItem.link,
    //   serviceDesc: serviceListItem.description,
    //   serviceFilter: serviceListItem.filter_item,
    //   serviceImage: serviceListItem.image?.childImageSharp.gatsbyImageData,
    // });
    return (
      <div key={key}>
        <ServiceContent key={key} props={tempobject} />
      </div>
    );
  });
};

const ServiceList = ({ serviceListArray }) => {
  return serviceListArray.map((serviceListItem, key) => {
    const tempobject = {
      serviceTitle: serviceListItem.title,
      serviceLink: serviceListItem.link,
      serviceDesc: serviceListItem.description,
      serviceFilter: serviceListItem.filter_item,
      serviceImage: serviceListItem.image?.childImageSharp.gatsbyImageData,
    };
    return (
      <>
        <div key={key}>
          <ServiceContent key={key} props={tempobject} />
        </div>
      </>
    );
  });
};
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
            class
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
`;
