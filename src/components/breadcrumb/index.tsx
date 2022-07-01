import React from "react";
import { Breadcrumb as RawBreadcrumb } from "react-bootstrap";
import { Link } from "gatsby";
import { container, breadcrumb } from "./index.module.css";

const { Item } = RawBreadcrumb;

const Breadcrumb = ({ data }) => (
  <div className={container}>
    <RawBreadcrumb className={`main-container ${breadcrumb}`}>
      {data.map(({ name, path }, index) => (
        <Item key={index}>{path ? <Link to={path}>{name}</Link> : name}</Item>
      ))}
    </RawBreadcrumb>
  </div>
);

export default Breadcrumb;
