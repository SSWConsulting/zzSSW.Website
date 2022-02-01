import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { ACTIVE_KEYS } from "../../../consts/constantValues";
import { DAY_KEYS } from "../../../consts/dayValues";
import DayJS from "dayjs";
import "./index.css";

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
  const [activeLocation, setActiveLocation] = useState("");
  //Office Open Time Logic
  const currentTime = DayJS();
  const openOfficeTime = DayJS()
    .set("hour", 9)
    .set("seconds", 0)
    .set("minutes", 0);
  const closeOfficeTime = DayJS()
    .set("hour", 18)
    .set("seconds", 0)
    .set("minutes", 0);
  let time: any;

  if (
    DayJS().day() != DAY_KEYS.SUNDAY &&
    DayJS().day() != DAY_KEYS.SATURDAY &&
    currentTime >= openOfficeTime &&
    currentTime < closeOfficeTime
  ) {
    time = <span className="office open">Open</span>;
  } else {
    time = <span className="office closed">Closed</span>;
  }
  //Todo: ActiveKey sydney on initialize
  const handleStateClicked = (targetLocation) => {
    if (targetLocation == activeLocation) {
      setActiveLocation(ACTIVE_KEYS.None);
    } else if (targetLocation == ACTIVE_KEYS.NewCastle) {
      setActiveLocation(ACTIVE_KEYS.NewCastle);
    } else {
      setActiveLocation(targetLocation);
    }
  };

  return (
    <div className="locationAccordian col-sm-6">
      <article className="panelGroup">
        <Accordion
          defaultActiveKey={ACTIVE_KEYS.NSWActiveKey}
          activeKey={activeLocation}
          flush
        >
          <Accordion.Item eventKey={ACTIVE_KEYS.NSWActiveKey}>
            <Accordion.Header
              onClick={() => handleStateClicked(ACTIVE_KEYS.NSWActiveKey)}
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
                  </span>, <span itemProp="addressRegion">NSW</span>
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
                onClick={() => handleStateClicked(ACTIVE_KEYS.NSWActiveKey)}
                onMouseEnter={() => toggleHover("select-nsw")}
                onMouseLeave={() => toggleHover("")}
              >
                <h6
                  className={
                    activeLocation == ACTIVE_KEYS.NSWActiveKey
                      ? ACTIVE_KEYS.ActiveAccordionNSW
                      : ACTIVE_KEYS.None
                  }
                >
                  NSW
                </h6>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey={ACTIVE_KEYS.QLDActiveKey}>
            <Accordion.Header
              onClick={() => handleStateClicked(ACTIVE_KEYS.QLDActiveKey)}
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
                  <span itemProp="addressLocality"> Brisbane</span>,{" "}
                  <span itemProp="addressRegion">QLD</span>
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
                onClick={() => handleStateClicked(ACTIVE_KEYS.QLDActiveKey)}
                onMouseEnter={() => toggleHover("select-qld")}
                onMouseLeave={() => toggleHover("")}
              >
                <h6
                  className={
                    activeLocation == ACTIVE_KEYS.QLDActiveKey
                      ? ACTIVE_KEYS.ActiveAccordionQLD
                      : ACTIVE_KEYS.None
                  }
                >
                  QLD
                </h6>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey={ACTIVE_KEYS.VICActiveKey}>
            <Accordion.Header
              onClick={() => handleStateClicked(ACTIVE_KEYS.VICActiveKey)}
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
                  <span itemProp="addressLocality">Melbourne</span>,
                  <span itemProp="addressRegion">VIC</span>
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
                onClick={() => handleStateClicked(ACTIVE_KEYS.VICActiveKey)}
                onMouseEnter={() => toggleHover("select-vic")}
                onMouseLeave={() => toggleHover("")}
              >
                <h6
                  className={
                    activeLocation == ACTIVE_KEYS.VICActiveKey
                      ? ACTIVE_KEYS.ActiveAccordionVIC
                      : ACTIVE_KEYS.None
                  }
                >
                  VIC
                </h6>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey={ACTIVE_KEYS.NewCastle}>
            <Accordion.Header
              onClick={() => handleStateClicked(ACTIVE_KEYS.NewCastle)}
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
