import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { skill } from './index.module.css';

const AzureTech = () => {
  // TODO: Replace link
  const link = "https://www.ssw.com.au/ssw/Consulting/Azure.aspx"
  return (
    <div className={'col-md-6'}>
      <article className={skill} data-aos="flip-left">
        <figure>
        <StaticImage
                    src="../../../assets/images/consulting/ms-azure-logo.png"
                    alt="azure"
                />
        </figure>
        <p>
          Microsoft Azure provides on-demand infrastructure that scales and adapts to your changing business needs. Whether you are creating new applications or running existing applications we provide the best price-performance and end-to-end support.
          <a href={link}>Read more</a>
        </p>
      </article>
    </div>
  );
};

export default AzureTech;
