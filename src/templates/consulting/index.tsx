import React from 'react';

import Layout from '../../components/layout';
import Breadcrumb from '../../components/breadcrumb';
// import MVC_BACKGROUND from '../../videos/MVC_background.mp4';
import Booking from './components/booking';
import Benefits from './components/benefits';
import Testimonials from './components/testimonials';
import About from './components/about';
import Clients from './components/clients';
import Technologies from './components/technologies';
import Solution from './components/solution';

import './index.module.css';

const Consulting = ({ data: { title } }) => {
    const data = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Services',
            path: '/consulting',
        },
        {
            name: `${title} | SSW Consulting - Sydney, Brisbane, Melbourne`,
        },
    ];

    return (
        <Layout pageTitle={title}>
            <>
                <Breadcrumb data={data} />

                <Booking />

                {/* TODO: Add video background */}
                {/* <div id="videocontainer">
                    <video autoPlay muted loop>
                        <source src={MVC_BACKGROUND} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div> */}

                <Benefits />

                <Testimonials />

                <About />

                <Clients />

                <Technologies />

                <Solution />
            </>
        </Layout>
    );
};

export default Consulting;
