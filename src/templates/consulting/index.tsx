import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import Breadcrumb from '../../components/breadcrumb';
// import MVC_BACKGROUND from '../../videos/MVC_background.mp4';
import Booking from './components/booking';
import Benefits from './components/benefits';
import Testimonials from './components/testimonials';
import About from './components/about';
import Clients from './components/clients';
import Technologies from './components/technologies';

// TODO: This css file is for reference, delete it later
// import './index.css';

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

                <div className="solution-section">
                    <div className="container">
                        <h1>
                            Talk to us about your{' '}
                            <span className="red">React project</span> today
                        </h1>

                        <p>
                            Jump on a call with one of our Account Managers to
                            discuss how we can help you.
                        </p>

                        <button
                            type="button"
                            className="button raised hoverable"
                            data-toggle="modal"
                            data-target="#myModal"
                            data-aos="fade-up"
                        >
                            <div className="anim"></div>
                            Book a FREE Initial Meeting
                        </button>
                        <h2>or call us on +61 2 9953 3000</h2>
                    </div>
                </div>
            </>
        </Layout>
    );
};

export default Consulting;
