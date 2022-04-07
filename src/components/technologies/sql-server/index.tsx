import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { skill } from './index.module.css';

const SqlServerTech = () => {
  // TODO: Replace link
  const link = "https://www.ssw.com.au/ssw/Consulting/DatabaseDevelopment.aspx"
  return (
    <div className={'col-md-6'}>
      <article className={skill} data-aos="flip-left">
        <figure>
        <StaticImage
                    src="../../../assets/images/consulting/sql-server-logo.png"
                    alt="SQL Server"
                />
        </figure>
        <p>
          Whether on Azure or on premises, SQL Server is Microsoft's enterprise level database platform, in which SSW has a lot of expertise. Being used as the backend database for the majority of Microsoft based IT solutions, it has numerous features to ensure high availability, scalability, data integrity & performance.
          <a href={link}>Read more</a>
        </p>
      </article>
    </div>
  );
};

export default SqlServerTech;
