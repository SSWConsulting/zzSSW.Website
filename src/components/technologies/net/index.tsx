import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { skill } from './index.module.css';

const DotnetTech = () => {
  // TODO: Replace link
  const link = "https://www.ssw.com.au/ssw/Consulting/DatabaseDevelopment.aspx"
  return (
    <div className={'col-md-6'}>
      <article className={skill} data-aos="flip-left">
        <figure>
        <StaticImage
                    src="../../../assets/images/consulting/net-logo.png"
                    alt=".NET"
                />
        </figure>
        <p>
        .NET 5 (was .NET Core) is a free, cross-platform, open source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, and IoT.
        </p>
      </article>
    </div>
  );
};

export default DotnetTech;
