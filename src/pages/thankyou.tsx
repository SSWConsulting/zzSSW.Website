import { Link } from "gatsby";
import React from "react";
import Breadcrumb from "../components/breadcrumb";
import azure from "../assets/images/azure.jpeg";
import external from "../assets/images/external-link.gif";
import Layout from "../components/layout";
import { BASE_URL, PAGE_TYPE, PAGE_TITLE, IMAGES_LINKS } from "../constants";

const ThankyouPage = () => {
  const data = [
    {
      name: PAGE_TYPE.Home,
      path: BASE_URL,
    },
    {
      name: PAGE_TYPE.Thankyou,
    },
  ];
  const link = BASE_URL + "/consulting/azure";
  console.log("LINK: ", azure);

  return (
    <Layout pageTitle={PAGE_TITLE.Thankyou}>
      {document.body.classList.add("body-background-whitesmoke")}
      <div className="main-container header-content">
        <Breadcrumb data={data} />
        <h1>
          <span className="red ">Thank you</span> for contacting us!
        </h1>
      </div>
      <div className="body-background-white">
        <div className="main-container body-content">
          <p>Thank you for your inquiry.</p>
          <p>
            We will be in contact soon. In the meantime, please have a look at
            our{" "}
            <a href="/ssw/Consulting/" target="_blank">
              Consulting Services
            </a>
            &nbsp;
            <img src={external}></img> and{" "}
            <a href="/People" target="_blank">
              People
            </a>
            &nbsp;
            <img src={external}></img>.
          </p>
        </div>
      </div>
      <div className="body-background-whitesmoke ">
        <div className="main-container link-content ">
          <span>
            <img src={azure} width={50} height={50} />
            <span>
              &nbsp;
              <Link to="/consulting/azure">
                BUILT ON THE MICROSOFT AZURE PLATFORM
              </Link>
            </span>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default ThankyouPage;
