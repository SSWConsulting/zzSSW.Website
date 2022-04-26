import React, { useState, useEffect } from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import AzureTech from '../../../../components/technologies/azure';
import ReactTech from '../../../../components/technologies/react';
import DotnetTech from '../../../../components/technologies/net';
import SqlServerTech from '../../../../components/technologies/sql-server';
import JQueryTech from '../../../../components/technologies/jquery';

import { container, skillContainer, skill } from './index.module.css';
import AngularTech from '../../../../components/technologies/angular';
import NodeJsTech from '../../../../components/technologies/node-js';


const Technologies = ({ techList }) => {
    const [techComponents, setTechComponents] = useState([]);
    useEffect( () => {
        if (techList) {
            techList.map(({name}, index) => (
                setTechComponents(techComponents => [...techComponents, getComponent(name)])
            ));
        } 
        
    },[]);
    
    function getComponent(name) {
        switch(name) {
            case 'react':
                return <ReactTech />
            case 'azure':
                return <AzureTech />
            case 'sql-server':
                return <SqlServerTech />
            case 'dotnet':
                return <DotnetTech />
            case 'jquery':
                return <JQueryTech />
            case 'angular':
                return <AngularTech />
            case 'node-js':
                return <NodeJsTech />

        }
    }
    
    if (techList) {
      return (
        <section className={container}>
            <article className="main-container">
                <h1>Other technologies</h1>
                <div className="flex-wrap">
                    {techComponents}
                </div>
            </article>
        </section>
        )  
    } 
}
    
export default Technologies;
