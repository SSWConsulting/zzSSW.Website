import React from 'react';
import { Breadcrumb as RawBreadcrumb } from 'react-bootstrap';
import { Link } from 'gatsby';
import { container } from './index.module.css';

const { Item } = RawBreadcrumb;

const Breadcrumb = ({ data }) => (
    <div style={{ backgroundColor: 'white' }}>
        <RawBreadcrumb className={`${container} main-container`}>
            {data.map(({ key, name, path }) => (
                <Item key={key || name}>
                    {path ? <Link to={path}>{name}</Link> : name}
                </Item>
            ))}
        </RawBreadcrumb>
    </div>
);

export default Breadcrumb;
