import React from 'react';
import Layout from '../../components/layout';
import Breadcrumb from '../../components/breadcrumb';
import MVC_BACKGROUND from '../../videos/MVC_background.mp4';

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

                <div className="Consulting-Hero employement-video">
                    <div className="container hero">
                        <h1>
                            Want to build your web application in{' '}
                            <span className="red">React</span>?
                        </h1>
                        <h2>
                            Easy to learn, easy to use and easy to be awesome
                        </h2>

                        <button
                            type="button"
                            className="button raised hoverable"
                            data-toggle="modal"
                            data-target="#myModal"
                        >
                            <div className="anim"></div>
                            Book a FREE Initial Meeting
                        </button>
                        <h2>or call us on +61 2 9953 3000</h2>
                    </div>

                    <div className="arrow-scroll bounce">
                        <a className="fa fa-chevron-down" href="#more"></a>
                    </div>
                </div>

                <div>
                    <video autoPlay muted loop>
                        <source src={MVC_BACKGROUND} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </>
        </Layout>
    );
};

export default Consulting;
