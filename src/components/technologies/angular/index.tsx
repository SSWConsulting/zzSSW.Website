import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { skill } from './index.module.css';

const AngularTech = () => {
  // TODO: Replace link
  const link = "https://www.ssw.com.au/ssw/Consulting/Angular.aspx"
  return (
    <div className={'col-md-6'}>
      <article className={skill} data-aos="flip-left">
        <figure>
        <StaticImage
                    src="../../../assets/images/consulting/angular-logo.png"
                    alt="Angular"
                />
        </figure>
        <p>
        Angular is a Google-built and maintained Javascript framework allows us to develop fast, responsive, and interaction-rich applications. It has the abilities to build apps for any deployment target - web, mobile web, native mobile and native desktop.
        </p>
      </article>
    </div>
  );
};

export default AngularTech;
