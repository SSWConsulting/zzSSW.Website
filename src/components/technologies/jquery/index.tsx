import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { skill } from './index.module.css';

const JQueryTech = () => {
  return (
    <div className={'col-md-6'}>
      <article className={skill} data-aos="flip-left">
        <figure>
        <StaticImage
                    src="../../../assets/images/consulting/jquery-logo.png"
                    alt="JQuery"
                />
        </figure>
        <p>
        JQuery is a new cross-platform front-end DOM manipulation JavaScript library that helps developers use JavaScript on websites. It is designed to make it easier to maintain the HTML script at client sides. JQuery is one of the most widely used JavaScript libraries in the world.
        </p>
      </article>
    </div>
  );
};

export default JQueryTech;
