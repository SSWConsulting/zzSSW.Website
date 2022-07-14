import React, { useState } from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { skill } from "./index.module.css";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { BASE_IMAGE_URL, BASE_URL } from "../../constants";
import ImageWithFallbacks from "../ImageWithFallbacks";
import { useAllImagesUrlData } from "../../hooks/useAllImageData";
import ImageToUrl from "../../helpers/imageToUrl";

const Technology = (props) => {
  const { techListLength, frontmatter, body, index } = props;
  const { logoImage, readMoreSlug, key } = frontmatter;
  const imagesUrldata = useAllImagesUrlData();

  let theReadMoreLink;
  let columnClass;
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
  console.log(ImageToUrl(key, imagesUrldata));
  return (
    <div className={columnClass}>
      <article className={skill} data-aos="flip-left">
        <figure>
          {/* <img
            src={__dirname + "/assets/images/azure.jpeg"}
            onError={(e) => {
              console.log("E", e);
              onError();
            }}
          ></img> */}
          {ImageToUrl(key, imagesUrldata) ? (
            <>
              <GatsbyImage
                image={getImage(ImageToUrl(key, imagesUrldata))}
                alt={key}
              />
            </>
          ) : (
            <StaticImage
              src="../../assets/images/ssw-logo.svg"
              alt="SSW Consulting"
            />
          )}

          {/* <GatsbyImage image={getImage(logoImage)} alt={key} /> */}
        </figure>
        <MDXRenderer>{body}</MDXRenderer>
        {theReadMoreLink}
      </article>
    </div>
  );
};

export default Technology;
