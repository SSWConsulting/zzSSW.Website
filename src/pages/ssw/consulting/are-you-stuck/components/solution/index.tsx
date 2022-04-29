import React from 'react';

// import Button from '../../../../components/button';
import Button from '../../../../../../components/button';
import { container } from './index.module.css';

const Solution = ({ project }) => (
    <section className={container}>
        <article className="main-container">
            <h1>
                Get the <span className="red">{project}</span>{' '}
                you need
            </h1>

            <p>
            Recommend us to a decision maker so we can help get your project over the line.
            </p>

            <Button>Refer SSW Consulting Services</Button>

            <h2>or call us on +61 2 9953 3000</h2>
        </article>
    </section>
);

export default Solution;
