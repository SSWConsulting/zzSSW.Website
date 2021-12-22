import React from 'react';

import { bookingButton } from '../../index.module.css';
import { container } from './index.module.css';

const Solution = () => (
    <div className={container}>
        <div className="main-container">
            <h1>
                Talk to us about your <span className="red">React project</span>{' '}
                today
            </h1>

            <p>
                Jump on a call with one of our Account Managers to discuss how
                we can help you.
            </p>

            <button type="button" className={bookingButton} data-aos="fade-up">
                <div className="anim"></div>
                Book a FREE Initial Meeting
            </button>
            <h2>or call us on +61 2 9953 3000</h2>
        </div>
    </div>
);

export default Solution;
