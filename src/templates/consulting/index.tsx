import React from 'react';

import Layout from '../../components/layout';
import Breadcrumb from '../../components/breadcrumb';
import MVC_BACKGROUND from '../../assets/videos/MVC_background.mp4';
import Booking from './components/booking';
import Benefits from './components/benefits';
import Testimonials from './components/testimonials';
import About from './components/about';
import Clients from './components/clients';
import Technologies from './components/technologies';
import Solution from './components/solution';

import './index.module.css';
import { backgroundVideo } from './index.module.css';

const ConsultingTemplate = ({ data: { title } }) => {
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

export default ConsultingTemplate;
