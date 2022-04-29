import React, { useCallback } from "react";
import Button from "../../button";
import * as styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type Props = {
    header: string;
    index: number;
    setSelectedTab: (index: number) => void;
    isActive?: boolean;
    tabCount: number;
    icon: string;
};

const TabHeader = (props: Props): JSX.Element => {
    const { header, setSelectedTab, index, isActive, tabCount, icon } = props;

    const handleOnClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);
    console.log(icon);
    // use this for bootstrap: col-sm-${12/tabCount} 
    return(
        <li className={`${styles.header} ${isActive ? 'active' : ''}`}>
            {/* <Button  onClick={handleOnClick}>{header}</Button> */}
            <button className={icon} onClick={handleOnClick}><h2>{header}</h2></button>
        </li>
    );
};

export default TabHeader;