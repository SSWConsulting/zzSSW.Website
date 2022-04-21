import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { skill } from "./index.module.css";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { BASE_URL } from "../../constants";

const Technology = ({ body, frontmatter }) => {
  const { title, logoImage, readMoreSlug } = frontmatter;
  let theReadMoreLink;
  if (readMoreSlug) {
    const link = "/ssw/" + readMoreSlug;
    theReadMoreLink = (
      <>
        <Link to={link}>Read More</Link>
      </>
    );
  }

  return (
    <div className={"col-md-6"}>
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
