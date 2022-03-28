import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import isBetween from "dayjs/plugin/isBetween";
import axios from "axios";

import OutlineButton from "../../outlineButton";
import {
  container,
  partner,
  eventsContainer,
  upcomingEvents,
  eventDetails,
  timeDuration,
  daysFromNow,
} from "./index.module.css";

dayjs.extend(utc);
dayjs.extend(isBetween);

const AboutUs = () => (
  <Col md={7} sm={12}>
    <article>
      <h1>Australia's Leading .NET and Azure Consultants</h1>
      <p>
        SSW Consulting has over 25 years of Microsoft software and web
        development experience. We build on top of Angular, React, Vue, Azure,
        Azure DevOps (was TFS), SharePoint, Office 365, Blazor, .NET, WebAPI,
        Dynamics 365, and SQL Server.{" "}
        {/*  TODO: Update link after implement this page */}
        <a href="https://www.ssw.com.au/SSW/Company/AboutUs.aspx">Know more</a>
      </p>
    </article>
    <Row className={partner}>
      <Col sm={5}>
        <StaticImage
          src="../../../assets/images/MicrosoftPartnerLogo-2021.png"
          alt="Microsoft Partner Logo 2021"
        />
      </Col>
      <Col sm={7}>
        <h3>
          We{" "}
          <FontAwesomeIcon
            icon={faHeart}
            color="#cc4141"
            style={{ fontSize: "1.2rem" }}
          />{" "}
          Microsoft
        </h3>
        <p>
          In 1999, we were first recognized as a Microsoft Gold Partner. Today{" "}
          {/*  TODO: Update link after implement this page */}
          <a href="https://www.ssw.com.au/ssw/company/awards/">
            SSW has competencies in a variety of areas
          </a>
          , earning gold in <b>Application Development</b>,{" "}
          <b>Application Integration</b>, <b>Cloud Platform</b>, <b>DevOps</b>;
          and silver in
          <b>Collaboration and Content</b>, and <b>Data Analytics</b>.
        </p>
      </Col>
      <Col sm={5}>
        <a href="https://www.firebootcamp.com" target="_blank">
          <StaticImage
            src="../../../assets/images/ssw-mapa.jpg"
            alt="Microsoft Australia Partner Award"
          />
        </a>
      </Col>
      <Col sm={7}>
        <p>
          We are proud to announce we have won the{" "}
          <b>
            MAPA - Microsoft Australia Partner Award - for Excellence in
            Learning
          </b>{" "}
          for{" "}
          <a href="https://www.firebootcamp.com" target="_blank">
            SSW FireBootCamp
          </a>
          .
        </p>
        <p>
          We were chosen from a national field of top Microsoft Partners for
          delivering market-leading customer solutions built on the Microsoft
          platform.
        </p>
      </Col>
    </Row>
    <article>
      <h3 className="vertical-center">
        Bring your apps to China{" "}
        <StaticImage
          src="../../../assets/images/china-flag.svg"
          alt="china flag"
          width={28}
          height={21}
          style={{ marginLeft: 6 }}
        />
      </h3>
      <p>
        China is a booming market and now is the time to take advantage of this
        growing user base. If you have a successful application that you would
        like to bring to the Chinese market, then working with{" "}
        {/*  TODO: Update link after implement this page */}
        <a href="https://www.ssw.com.au/ssw/Consulting/Chinafy-App.aspx">
          SSW can help
        </a>{" "}
        streamline your entry into this market.
      </p>
    </article>
  </Col>
);

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const datetime = dayjs.utc().startOf("day").format();
      const params = {
        odataFilter: encodeURIComponent(
          `$filter=Enabled ne false and EndDateTime gt datetime'${datetime}'`
        ),
        $top: 30,
        // TODO: Doesn't work
        $orderby: encodeURIComponent("StartDateTime desc"),
      };

      setLoading(true);
      const res = await axios.get(
        `https://www.ssw.com.au/ssw/SharePointEventsService.aspx`,
        { params }
      );
      setLoading(false);
      console.log(res);
      if (
        res?.status !== 200 ||
        res?.request.responseURL.indexOf("aspxerrorpath")
      )
        return;
      setEvents(res?.data);
    };

    fetchEvents();
  }, []);

  const getDate = (start, end) => {
    if (!start || !end) return null;

    // NOTE: Omit ddd for brevity if it's next year's event
    const dateformat =
      dayjs(start).year === dayjs().year ? "ddd MMM D" : "MMM D YYYY";
    const isOneDayEvent = dayjs(start)
      .startOf("day")
      .isSame(dayjs(end).startOf("day"));
    const startDate = dayjs(start).format(dateformat);
    const endDate = dayjs(end).format(dateformat);

    return (
      <span className={timeDuration}>
        {isOneDayEvent ? startDate : `${startDate} - ${endDate}`}
      </span>
    );
  };

  const getDaysFromNow = (start, end) => {
    const now = new Date();
    const days = dayjs(start).diff(now, "d");

    let text;
    if (dayjs().isBetween(dayjs(start), dayjs(end))) {
      text = "now running";
    } else if (days === 0) {
      text = "today";
    } else {
      text = `${days} ${days === 1 ? "day" : "days"} to go`;
    }

    return <span className={daysFromNow}>{text}</span>;
  };

  const getEventsList = (events) => {
    if (events == null || events != undefined || events.length == 0) {
      return null;
    } else {
      return events
        .sort(
          (event1, event2) =>
            new Date(event1.StartDateTime).getTime() -
            new Date(event2.StartDateTime).getTime()
        )
        .map(
          ({
            Id,
            Url,
            Thumbnail,
            StartDateTime,
            EndDateTime,
            Title,
            Presenter,
          }) => {
            const isExternalLink =
              !Url.Url.includes("ssw.com.au") ||
              Url.Url.includes("/ssw/redirect");

            return (
              <article key={Id} className={classNames("flex", eventsContainer)}>
                <figure>
                  <a href={Thumbnail.Url}>
                    <img src={Thumbnail.Url} width={100} height={100} />
                  </a>
                </figure>
                <div className={classNames("flex-column-center", eventDetails)}>
                  <time>
                    {getDate(StartDateTime, EndDateTime)}{" "}
                    {getDaysFromNow(StartDateTime, EndDateTime)}
                  </time>
                  <h5>
                    <a
                      href={Url.Url}
                      target={isExternalLink ? "_blank" : "_self"}
                    >
                      {Title}
                    </a>
                  </h5>
                  {!!Presenter && <address>{Presenter}</address>}
                </div>
              </article>
            );
          }
        );
    }
  };

  return (
    <Col md={5} sm={12}>
      <article className="full flex-column">
        <h1>Upcoming Events</h1>

        <section
          className={classNames("flex-full flex-column ", upcomingEvents)}
        >
          {loading ? (
            <div className="flex-full center">
              <Spinner animation="border" variant="secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            getEventsList(events)
          )}
        </section>

        <div className="flex-end">
          {/* TODO: Update link after implement this page */}
          <OutlineButton href="https://www.ssw.com.au/ssw/Events/?tech=all&type=all">
            More Events
          </OutlineButton>
        </div>
      </article>
    </Col>
  );
};

const AboutUsAndEvents = () => {
  return (
    <section className={classNames("main-container", container)}>
      <Row>
        <AboutUs />
        <Events />
      </Row>
    </section>
  );
};

export default AboutUsAndEvents;
