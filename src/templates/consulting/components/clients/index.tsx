import React from 'react';
import Clients from '../../../../components/clients';
import { container } from './index.module.css';

const ClientsSection = () => (
    <section className={container}>
        <article className="main-container">
            <h1>Companies we have worked with</h1>
            <div className="row no-gutters">
                <Clients />
            </div>
        </article>
    </section>
);

export default ClientsSection;
