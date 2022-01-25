import React from "react";
import TvSSW from "./sswTv";
import ContactUsMap from "./contactUsMap";
import "./index.css";

const TvContactMap = () => {
  return (
    <div className="container-sswTvContactUs">
      <section id="index-footer" className="main-container ">
        <div className="row">
          <TvSSW />
          <ContactUsMap />
        </div>
      </section>
    </div>
  );
};

export default TvContactMap;
