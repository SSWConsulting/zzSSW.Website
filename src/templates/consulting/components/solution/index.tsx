import React from 'react';

import Button from '../../../../components/button';
import { container } from './index.module.css';

const Solution = ({ project }) => (
    <section className={container}>
        <article className="main-container">
            <h1>
                Talk to us about your <span className="red">{project}</span>{' '}
                project
            </h1>

            <p>
                Jump on a call with one of our Account Managers to discuss how
                we can help you.
            </p>

            <Button>Book a FREE Initial Meeting</Button>

            <h2>or call us on +61 2 9953 3000</h2>
        </article>
    </section>
);

export default Solution;
