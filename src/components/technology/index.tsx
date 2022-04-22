import React, { useState } from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { skill } from "./index.module.css";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { BASE_URL } from "../../constants";

const Technology = (props) => {
  const { techListLength, frontmatter, body, index } = props;
  const { title, logoImage, readMoreSlug } = frontmatter;
  let theReadMoreLink;
  let columnClass;
  console.log(techListLength - 1 + " " + index);
  console.log();

  if (techListLength % 2 != 0 && techListLength - 1 == index) {
    columnClass = "col-md-12";
  } else {
    columnClass = "col-md-6";
  }
  if (readMoreSlug) {
    const link = BASE_URL + readMoreSlug;
    theReadMoreLink = (
      <>
        <Link to={link}>Read More</Link>
      </>
    );
  }

  return (
    <div className={columnClass}>
      <article className={skill} data-aos="flip-left">
        <figure>
          <GatsbyImage image={getImage(logoImage)} alt={title} />
        </figure>
        <MDXRenderer>{body}</MDXRenderer>
        {theReadMoreLink}
      </article>
    </div>
  );
};

export default Technology;
