import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import Layout from "../../components/layout";
import BookingForm from "../../components/bookingForm";
import Tabs from "../../components/tabs";
import TabContent from "../../components/tabs/tabContent";
import { Link } from "gatsby";

import jason_thumb from "../../assets/images/jason_thumb.jpg";
import jean_thumb from "../../assets/images/Jean-Thirion.jpg";
import adam_thumb from "../../assets/images/Adam-Cogan.jpg";
import backlog from "../../assets/images/backlog.png";
import burndown from "../../assets/images/burndown.png";
import speech_bubble from "../../assets/images/speech-bubble.png";
import { WHITE } from "../../constants";
import BookingFormFormik from "../../components/bookingFormFormik";
import { SEO } from "../../components/seo";

const ConsultingOptions = () => {
  const data = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Consulting Options",
    },
  ];

  return (
    <Layout
      backgroundColor={WHITE}
    >
      <div className="legacy-banner">
        <img src={speech_bubble} />
        <Breadcrumb data={data} />
        <h1 className="no-header-margin">Consulting Options</h1>
        <h2>Solutions that can adapt to your every need</h2>
      </div>
      <div className="main-container">
        <p className="mt-3">
          SSW offers the opportunity to hire one of our highly specialised
          experts in the field of your need, or a team of experts, ready to
          build your next project for you. If you are a new customer we need to
          schedule a free initial meeting. If you're an existing client, please
          continue below.
        </p>
        <Tabs>
          <TabContent header="Book a SSW Expert" icon="one">
            <div>
              <p>
                Whether you want a technical expert or a Scrum Master to get the
                team into a highly performing unit, we have the experts with
                expertise in a wide range of the Microsoft technology stack. SSW
                consultants ensure your project is done right and following best
                practices. From Angular, React, Vue, Azure, Azure DevOps,
                SharePoint, Office 365, Blazor, .NET, WebAPI, Dynamics 365, or
                SQL Server our experts get the job done.
              </p>
              <p>For example:</p>
              <ul>
                <li>
                  <Link to="/consulting/web-applications/">
                    Web Applications
                  </Link>
                </li>
                {/* TODO: update to gatsby Link components when pages are ready on new site */}
                <li>
                  <a href="https://www.ssw.com.au/ssw/Consulting/Power-Platform.aspx">
                    Power Platform
                  </a>
                </li>
                <li>
                  <a href="https://www.ssw.com.au/ssw/Consulting/Microsoft-Dynamics-365.aspx">
                    Dynamics 365
                  </a>
                </li>
                <li>
                  <a href="https://www.ssw.com.au/ssw/Consulting/Default.aspx">
                    More
                  </a>
                </li>
              </ul>
              <h3 className="h3-special">Some of Our Experts</h3>
              <div className="row">
                <div className="col-sm-4">
                  <img
                    src={jason_thumb}
                    className="thumbnail"
                    data-pin-nopin="true"
                  ></img>
                  <div>
                    <h4>
                      <a href="https://www.ssw.com.au/people/jason-taylor">
                        Jason Taylor
                      </a>
                    </h4>
                    <span>
                      Clean Architecture + Azure + Angular + .NET Expert{" "}
                    </span>
                  </div>
                </div>

                <div className="col-sm-4">
                  <img
                    src={jean_thumb}
                    className="thumbnail"
                    data-pin-nopin="true"
                  ></img>
                  <div>
                    <h4>
                      <a href="https://www.ssw.com.au/people/jean-thirion">
                        Jean Thirion
                      </a>
                    </h4>
                    <span>SharePoint + Office365 Expert</span>
                  </div>
                </div>

                <div className="col-sm-4">
                  <img
                    src={adam_thumb}
                    className="thumbnail"
                    data-pin-nopin="true"
                  ></img>
                  <div>
                    <h4>
                      <a href="https://www.ssw.com.au/people/adam-cogan">
                        Adam Cogan
                      </a>
                    </h4>
                    <span>Scrum Master</span>
                  </div>
                </div>
              </div>
              <hr></hr>
              <p>
                <a href="https://www.ssw.com.au/people/">
                  Full List of Experts
                </a>
              </p>
            </div>
          </TabContent>
          <TabContent header="Book a SSW Team" icon="two">
            <div>
              <p>
                Our most popular option is to get a dedicated team to complete
                your project.
              </p>
              <p>
                We have development teams ranging from 2 to 5 people that strive
                to bring you high quality software at the end of every Sprint (2
                week cycle). If you've already got your own developer team,
                further improve the production process by booking one of our
                trained "Scrum Masters". They'll manage the team to bring you
                the best possible solution for your business.
              </p>
              <h3 className="h3-special">Latest Activity</h3>
              <h3>Scrum Bats</h3>
              <dl className="image">
                <dt>
                  <img src={backlog}></img>
                </dt>
                <dd>Figure: Backlog</dd>
              </dl>
              <dl className="image">
                <dt>
                  <img src={burndown}></img>
                </dt>
                <dd>Figure: Burndown Chart</dd>
              </dl>
            </div>
          </TabContent>
        </Tabs>
        <h2>Australia Wide</h2>
        <p>
          We have consultants available in all Australian capital cities
          including Sydney, Melbourne, Brisbane, Adelaide, Perth and Canberra.
        </p>
        <div className="mb-5">
          <BookingFormFormik isShareForm={false} />
        </div>
      </div>
    </Layout>
  );
};

export default ConsultingOptions;

export const Head = () => (
  <SEO />
)
