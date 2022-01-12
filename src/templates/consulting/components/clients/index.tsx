import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { container, client } from './index.module.css';

const Clients = () => (
    <section className={container}>
        <article className="main-container">
            <h1>Companies we have worked with</h1>
            <div className="row no-gutters">
                <figure className="col-sm-4">
                    <StaticImage
                        className={client}
                        src="../../../../assets/images/consulting/clients1.png"
                        alt="SSW Clients"
                    />
                </figure>
                <figure className="col-sm-4">
                    <StaticImage
                        className={client}
                        src="../../../../assets/images/consulting/clients2.png"
                        alt="SSW Clients"
                    />
                </figure>
                <figure className="col-sm-4">
                    <StaticImage
                        className={client}
                        src="../../../../assets/images/consulting/clients3.png"
                        alt="SSW Clients"
                    />
                </figure>
            </div>
        </article>
    </section>
);

export default Clients;
