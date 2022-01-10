import React from 'react';
import Breadcrumb from '../../components/breadcrumb';
import Layout from '../../components/layout';

const ConsultingServices = () => {
    const data = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Consulting',
        },
    ];

    return (
        <Layout pageTitle="SSW Consulting - .NET, Web, Mobile, CRM, SharePoint, Azure, Power BI, Angular, React, Office 365 and Dynamics">
            <div className="main-container">
                <Breadcrumb data={data} />
                <h1>Consulting Services</h1>
                {/* TODO: Content */}
            </div>
        </Layout>
    );
};

export default ConsultingServices;
