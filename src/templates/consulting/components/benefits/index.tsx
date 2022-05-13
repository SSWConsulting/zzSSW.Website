import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./index.css";

const Benefits = ({ benefits, markdownContent }) => {
  const [videoClicked, setVideoClicked] = useState(false);
  const { title, video, descriptions, benefitList, rule } = benefits;
  const videoId = video?.url?.split("v=")[1] ?? "";

  return (
    <section className="container">
      <a id="more" />
      <article className="main-container">
        <MDXRenderer>{markdownContent}</MDXRenderer>

        <div className="flex-wrap">
          {benefitList?.map(({ image, title, description, linkName, linkURL }, index) => (
            <article
              className={`col-md-6 benefit`}
              key={index}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <figure>
                <GatsbyImage
                  className="fl"
                  image={getImage(image)}
                  alt="benefit icon"
                />
              </figure>
              <h4 className="benefitTitle">{title}</h4>
              <article className="benefitDesc">
                {description}
                {<a className="link" href={linkURL}>
                    {linkName}
                </a>}
              </article>
            </article>
          ))}
        </div>

        {rule && (
          <p>
            Have a look at{" "}
            <a className="link" href={rule?.url}>
              {rule?.name}
            </a>
            .
          </p>
        )}
      </article>
    </section>
  );
};

export default Benefits;
