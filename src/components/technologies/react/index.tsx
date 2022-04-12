import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { skill } from './index.module.css';

const ReactTech = () => {
  // TODO: Replace link
  const link = "https://www.ssw.com.au/ssw/Consulting/React.aspx"
  return (
    <div className={'col-md-6'}>
      <article className={skill} data-aos="flip-left">
        <figure>
        <StaticImage
                    src="../../../assets/images/consulting/react-icon.png"
                    alt="React"
                />
        </figure>
        <p>
          Build native mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.
          <a href={link}>Read more</a>
        </p>
      </article>
    </div>
  );
};

export default ReactTech;
