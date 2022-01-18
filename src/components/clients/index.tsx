import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Clients = () => (
    <div className="flex">
        <figure className="col-sm-4">
            <StaticImage
                src="../../assets/images/consulting/clients1.png"
                alt="SSW Clients"
            />
        </figure>
        <figure className="col-sm-4">
            <StaticImage
                src="../../assets/images/consulting/clients2.png"
                alt="SSW Clients"
            />
        </figure>
        <figure className="col-sm-4">
            <StaticImage
                src="../../assets/images/consulting/clients3.png"
                alt="SSW Clients"
            />
        </figure>
    </div>
);

export default Clients;
