import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { container, title, client } from './index.module.css';

const Clients = () => (
    <div className={container}>
        <div className="main-container">
            <h1 className={title}>Companies we have worked with</h1>
            <div className="row no-gutters">
                <div className="col-sm-4">
                    <StaticImage
                        src="../../../../images/consulting/clients1.png"
                        alt="SSW Clients"
                        className={client}
                    />
                </div>
                <div className="col-sm-4">
                    <StaticImage
                        src="../../../../images/consulting/clients2.png"
                        alt="SSW Clients"
                        className={client}
                    />
                </div>
                <div className="col-sm-4">
                    <StaticImage
                        src="../../../../images/consulting/clients3.png"
                        alt="SSW Clients"
                        className={client}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Clients;
