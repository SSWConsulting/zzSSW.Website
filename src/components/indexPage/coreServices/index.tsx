import React from "react";
import OutlineButton from "../../outlineButton";
import "./index.css";

const CoreServices = () => (
  <section className="main-container services">
    <div className="row">
      <div className="col-sm-12">
        <h2 className="special">Core Services</h2>
      </div>
      <div className="col-md-3 col-sm-6 core-training">
        {/* TODO: Update link after implement this page */}
        <a href="https://www.ssw.com.au/ssw/Events/?tech=all&type=all">
          <h3>Training</h3>
        </a>
      </div>
      <div className="col-md-3 col-sm-6 core-sharepoint">
        {/* TODO: Update link after implement this page */}
        <a href="https://www.ssw.com.au/ssw/Consulting/SharePoint.aspx">
          <h3>Office 365/SharePoint</h3>
        </a>
      </div>
      <div className="col-md-3 col-sm-6 core-book">
        {/* TODO: Update link after implement this page */}
        <a href="https://www.ssw.com.au/ssw/Consulting/Consulting.aspx">
          <h3>Book an Expert</h3>
        </a>
      </div>
      <div className="col-md-3 col-sm-6 core-crm">
        {/* TODO: Update link after implement this page */}
        <a href="https://www.ssw.com.au/rules/" target="_blank">
          <h3>Rules</h3>
        </a>
      </div>
    </div>
    <OutlineButton href="https://www.ssw.com.au/ssw/Consulting/">
      More Services...
    </OutlineButton>
  </section>
);

export default CoreServices;
