import React from 'react';
import { Breadcrumb as RawBreadcrumb } from 'react-bootstrap';
import { Link } from 'gatsby';
import { container } from './index.module.css';

const { Item } = RawBreadcrumb;

const Breadcrumb = ({ data }) => (
    <RawBreadcrumb className={container}>
        {data.map(({ key, name, path }) => (
            <Item key={key || name}>
                {path ? <Link to={path}>{name}</Link> : name}
            </Item>
        ))}
    </RawBreadcrumb>
);

export default Breadcrumb;
