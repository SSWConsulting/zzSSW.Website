import React from 'react';
import Layout from '../../components/layout';

const Consulting = ({ data: { title } }) => {
    return (
        <Layout pageTitle={title}>
            <h1>{title}</h1>
        </Layout>
    );
};

export default Consulting;
