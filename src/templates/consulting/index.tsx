import React from 'react';

import Layout from '../../components/layout';
import Breadcrumb from '../../components/breadcrumb';
import Booking from './components/booking';
import Benefits from './components/benefits';
import Testimonials from './components/testimonials';
import About from './components/about';
import Clients from './components/clients';
import Technologies from './components/technologies';
import Solution from './components/solution';

import './index.module.css';

const ConsultingTemplate = ({ data }) => {
    const { title, booking, benefits, solution } = data;

    const pageTitle = `${title} | SSW Consulting - Sydney, Brisbane, Melbourne`;
    const breadcrumbData = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Services',
            path: '/consulting',
        },
        {
            name: pageTitle,
        },
    ];

    return (
        <Layout pageTitle={pageTitle}>
            <>
                <Breadcrumb data={breadcrumbData} />

                <Booking {...booking} />

                <Benefits {...benefits} />

                <Testimonials />

                <About />

                <Clients />

                <Technologies />

                <Solution {...solution} />
            </>
        </Layout>
    );
};

export default ConsultingTemplate;
