import React from 'react';
import Layout from '../../components/layout';
import Breadcrumb from '../../components/breadcrumb';

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
                <h1>{title}</h1>
            </>
        </Layout>
    );
};

export default Consulting;
