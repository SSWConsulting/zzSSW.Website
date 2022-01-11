import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { bookingButton } from '../../index.module.css';
import {
    container,
    testimonialContainer,
    callout,
    arrowDown,
    avatar,
    name,
    company,
    contactContainer,
    contact,
} from './index.module.css';
import Button from '../../../../components/button';

const Testimonials = () => (
    <section className={container}>
        <div className="main-container flex-wrap">
            <article className={`col-md-4 ${testimonialContainer}`}>
                <article
                    className={`${callout} ${arrowDown} `}
                    data-aos="flip-right"
                >
                    <p>It was a pleasure to have you in the office again.</p>
                    <p>
                        I continue to be impressed by the quality of work and
                        advice you provide.
                    </p>
                </article>
                <address>
                    <figure>
                        <StaticImage
                            className={avatar}
                            src="../../../../assets/images/consulting/mark_p.jpg"
                            alt="avatar"
                        />
                    </figure>
                    <div className={name}> Mark Pigram</div>
                    <div className={company}>Contracts Online</div>
                </address>
            </article>

            <article className={`col-md-4 ${testimonialContainer}`}>
                {/* TODO: How arrow down works */}
                <article
                    className={`${callout} ${arrowDown}`}
                    data-aos="flip-right"
                >
                    <p>
                        We have dealt with several people at SSW from a network
                        tech helping us with a domain issue, to a couple of
                        graphic designers and several programmers and they have
                        ALL been first rate.{' '}
                    </p>
                </article>
                <address>
                    <figure>
                        <StaticImage
                            className={avatar}
                            src="../../../../assets/images/consulting/peter-dimaridis.jpg"
                            alt="avatar"
                        />
                    </figure>
                    <div className={name}> Peter Dimaridis</div>
                    <div className={company}>AuctionsPlus</div>
                </address>
            </article>

            <article className={`col-md-4 ${testimonialContainer}`}>
                <article
                    className={`${callout} ${arrowDown}`}
                    data-aos="flip-right"
                >
                    <p>
                        ... out of all the developers I have used in the past
                        [SSW] provide the most complete solutions and best
                        outcomes.
                    </p>
                    <p>Thanks for your attention to detail once again.</p>
                </article>
                <address>
                    <figure>
                        <StaticImage
                            className={avatar}
                            src="../../../../assets/images/consulting/peter-m.jpg"
                            alt="avatar"
                        />
                    </figure>
                    <div className={name}> Peter McCurdy</div>
                    <div className={company}>PDS</div>
                </address>
            </article>

            <div className={contactContainer}>
                <Button data-aos="fade-up">Book a FREE Initial Meeting</Button>
                <h2 className={contact}> or call us on +61 2 9953 3000</h2>
            </div>
        </div>
    </section>
);

export default Testimonials;
