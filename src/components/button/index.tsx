import React from 'react';
import classnames from 'classnames';
import { button, hoverable, anim } from './index.module.css';

const Button = ({ children, ...props }) => (
    <button type="button" className={classnames(button, hoverable)} {...props}>
        {children}
        <div className={anim} />
    </button>
);

export default Button;
