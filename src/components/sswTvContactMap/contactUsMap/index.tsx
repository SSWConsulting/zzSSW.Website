import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "./index.css";

dayjs.extend(timezone);
dayjs.extend(utc);

const ACTIVE_KEYS = {
  Sydney: "Sydney",
  Brisbane: "Brisbane",
  Melbourne: "Melbourne",
  Newcastle: "Newcastle",
  None: "",
};

const ACCORDIONS = {
  NSW: "active-accordion-nsw",
  QLD: "active-accordion-qld",
  VIC: "active-accordion-vic",
  Newcastle: "active-accordion-newcastle",
  None: "",
};

const WORKING_TIME = {
  Open: 9,
  Close: 18,
};

const DAY_KEYS = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const TIME_ZONE_KEYS = {
  QLD: "Australia/Queensland",
  NSW: "Australia/NSW",
  VIC: "Australia/Victoria",
};

const Map = ({ hoverStyle }) => {
  return (
    <article className="col-sm-6 hidden-xs" id="mapDisappear">
      <div id="mapWrap">
        <div id="locationMap">
          <StaticImage
            className={hoverStyle}
            src="../../../assets/images/placeholder.png"
            alt="Placeholder"
            useMap="#map"
            id="map-img"
          />
        </div>
      </div>
    </article>
  );
};
const ContactUs = ({ toggleHover }) => {
  const [activeLocation, setActiveLocation] = useState(ACTIVE_KEYS.Sydney);
  //Office Open Time Logic
  const [currentTime, setCurrentTime] = useState(
    dayjs().tz(TIME_ZONE_KEYS.NSW)
  );
  let time: any;
  if (
    dayjs().day() != DAY_KEYS.Sunday &&
    dayjs().day() != DAY_KEYS.Saturday &&
    currentTime.hour() >= WORKING_TIME.Open &&
    currentTime.hour() < WORKING_TIME.Close
  ) {
    time = <span className="office open">Open</span>;
  } else {
    time = <span className="office closed">Closed</span>;
  }

  const handleStateClicked = (targetLocation, timeZone) => {
    if (targetLocation == activeLocation) {
      setActiveLocation(ACTIVE_KEYS.None);
      setCurrentTime(dayjs().tz(timeZone));
    } else if (targetLocation == ACTIVE_KEYS.Newcastle) {
      setActiveLocation(ACTIVE_KEYS.Newcastle);
      setCurrentTime(dayjs().tz(timeZone));
    } else {
      setActiveLocation(targetLocation);
      setCurrentTime(dayjs().tz(timeZone));
    }
  };

  return (
    <div className="locationAccordian col-sm-6">
      <article className="panelGroup">
        <Accordion
          defaultActiveKey={ACTIVE_KEYS.Sydney}
          activeKey={activeLocation}
          flush
        >
          <Accordion.Item eventKey={ACTIVE_KEYS.Sydney}>
            <Accordion.Header
              onClick={() =>
                handleStateClicked(ACTIVE_KEYS.Sydney, TIME_ZONE_KEYS.NSW)
              }
              className="panelHeading"
              onMouseEnter={() => toggleHover("select-nsw")}
              onMouseLeave={() => toggleHover("")}
            >
              SYDNEY
            </Accordion.Header>

            <Accordion.Body>
              <article>
                <p>
                  <a href="https://www.ssw.com.au/ssw/Company/Offices/Sydney/">
                    SSW Sydney Office
                  </a>
                </p>
                <p
                  itemProp="address"
                  itemType="http://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">
                    Level 1, 81 - 91 Military Road
                  </span>
                  <br />
                  Neutral Bay, <span itemProp="addressLocality">
                    Sydney
                  </span>, <span itemProp="addressRegion">NSW&nbsp;</span>
                  <span itemProp="postalCode">2089</span>,{" "}
                  <span itemProp="addressCountry">Australia</span>
                </p>
                <p>
                  Phone: <strong>+61 2 9953 3000</strong>
                </p>
                <p>
                  Hours:{" "}
                  <strong>
                    9am - 6pm AEST {time}
                    <br />
                    Monday - Friday
                  </strong>
                </p>
              </article>
            </Accordion.Body>

            <div className="map-marker  hidden-xs">
              <div
                className="state-sydney"
                onClick={() =>
                  handleStateClicked(ACTIVE_KEYS.Sydney, TIME_ZONE_KEYS.NSW)
                }
                onMouseEnter={() => toggleHover("select-nsw")}
                onMouseLeave={() => toggleHover("")}
              >
                <h6
                  className={
                    activeLocation == ACTIVE_KEYS.Sydney
                      ? ACCORDIONS.NSW
                      : ACCORDIONS.None
                  }
                >
                  NSW
                </h6>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey={ACTIVE_KEYS.Melbourne}>
            <Accordion.Header
              onClick={() =>
                handleStateClicked(ACTIVE_KEYS.Melbourne, TIME_ZONE_KEYS.QLD)
              }
              onMouseEnter={() => toggleHover("select-qld")}
              onMouseLeave={() => toggleHover("")}
            >
              BRISBANE
            </Accordion.Header>
            <Accordion.Body>
              <article>
                <p>
                  <a href="https://www.ssw.com.au/ssw/Company/Offices/Brisbane/">
                    SSW Brisbane Office
                  </a>
                </p>
                <p
                  itemProp="address"
                  itemType="http://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">
                    {" "}
                    Level 1, 471 Adelaide Street
                  </span>
                  <br />
                  <span itemProp="addressLocality"> Brisbane&nbsp;</span>,{" "}
                  <span itemProp="addressRegion">QLD </span>
                  <span itemProp="postalCode"> 4000</span>,
                  <span itemProp="addressCountry">Australia</span>
                </p>
                <p>
                  Phone: <strong>+61 7 3077 7081</strong>
                </p>
                <p>
                  Hours:{" "}
                  <strong>
                    9am - 6pm AEST {time}
                    <br />
                    Monday - Friday
                  </strong>
                </p>
              </article>
            </Accordion.Body>
            <div className="map-marker  hidden-xs">
              <div
                className="state-brisbane"
                onClick={() =>
                  handleStateClicked(ACTIVE_KEYS.Melbourne, TIME_ZONE_KEYS.QLD)
                }
                onMouseEnter={() => toggleHover("select-qld")}
                onMouseLeave={() => toggleHover("")}
              >
                <h6
                  className={
                    activeLocation == ACTIVE_KEYS.Melbourne
                      ? ACCORDIONS.QLD
                      : ACCORDIONS.None
                  }
                >
                  QLD
                </h6>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey={ACTIVE_KEYS.Brisbane}>
            <Accordion.Header
              onClick={() =>
                handleStateClicked(ACTIVE_KEYS.Brisbane, TIME_ZONE_KEYS.VIC)
              }
              onMouseEnter={() => toggleHover("select-vic")}
              onMouseLeave={() => toggleHover("")}
            >
              MELBOURNE
            </Accordion.Header>

            <Accordion.Body>
              <article>
                <p>
                  <a href="https://www.ssw.com.au/ssw/Company/Offices/Melbourne/">
                    SSW Melbourne Office
                  </a>
                </p>
                <p
                  itemProp="address"
                  itemType="http://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">
                    {" "}
                    Level 1, 370 Little Bourke Street
                  </span>
                  <br />
                  <span itemProp="addressLocality">Melbourne&nbsp;</span>,
                  <span itemProp="addressRegion">VIC </span>
                  <span itemProp="postalCode">3000</span>,
                  <span itemProp="addressCountry">Australia</span>
                </p>
                <p>
                  Phone: <strong>+ 61 3 9005 2034</strong>
                </p>

                <p>
                  Hours:{" "}
                  <strong>
                    9am - 6pm AEST {time}
                    <br />
                    Monday - Friday
                  </strong>
                </p>
              </article>
            </Accordion.Body>

            <div className="map-marker  hidden-xs">
              <div
                className="state-melbourne"
                onClick={() =>
                  handleStateClicked(ACTIVE_KEYS.Brisbane, TIME_ZONE_KEYS.VIC)
                }
                onMouseEnter={() => toggleHover("select-vic")}
                onMouseLeave={() => toggleHover("")}
              >
                <h6
                  className={
                    activeLocation == ACTIVE_KEYS.Brisbane
                      ? ACCORDIONS.VIC
                      : ACCORDIONS.None
                  }
                >
                  VIC
                </h6>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey={ACTIVE_KEYS.Newcastle}>
            <Accordion.Header
              onClick={() =>
                handleStateClicked(ACTIVE_KEYS.Newcastle, TIME_ZONE_KEYS.NSW)
              }
              onMouseEnter={() => toggleHover("select-nsw")}
              onMouseLeave={() => toggleHover("")}
            >
              NEWCASTLE
            </Accordion.Header>
            <Accordion.Body>
              <article>
                <p>
                  <a href="https://www.ssw.com.au/ssw/Company/Offices/Newcastle/">
                    SSW Newcastle Office
                  </a>
                </p>
                <p>
                  432 Hunter St
                  <br />
                  Newcastle, NSW 2300, Australia
                </p>
                <p>
                  Phone: <strong>+ 61 3 9953 3000</strong>
                </p>
                <p>
                  Hours:{" "}
                  <strong>
                    9am - 6pm AEST
                    {time}
                    <br />
                    Monday - Friday
                  </strong>
                </p>
              </article>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </article>
    </div>
  );
};

const ContactUsAndMap = () => {
  const [hoverStyle, setHoverStyle] = useState("");

  const toggleHover = (hoverStyle) => {
    setHoverStyle(hoverStyle);
  };

  return (
    <div className="col-md-8 col-sm-12">
      <div id="location">
        <h2>Contact Us</h2>
        <div className="row">
          <ContactUs toggleHover={toggleHover} />

          <Map hoverStyle={hoverStyle} />
        </div>
      </div>
    </div>
  );
};

export default ContactUsAndMap;
