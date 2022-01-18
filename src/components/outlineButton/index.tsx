import React from 'react';
import { Button } from 'react-bootstrap';
import { button } from './index.module.css';

const OutlineButton = ({ children, href }) => (
    <Button className={button} variant="outline-secondary">
        <a href={href}>{children}</a>
    </Button>
);

export default OutlineButton;
