import React, { useCallback } from "react";
import Button from "../../button";
import * as styles from './index.module.css';

export type Props = {
    header: string;
    index: number;
    setSelectedTab: (index: number) => void;
    isActive?: boolean;
    tabCount: number;
};

const TabHeader = (props: Props): JSX.Element => {
    const { header, setSelectedTab, index, isActive, tabCount } = props;

    const handleOnClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    // use this for bootstrap: col-sm-${12/tabCount} 
    return(
        <li className={`${styles.header} ${isActive ? 'active' : ''}`}>
            {/* <Button  onClick={handleOnClick}>{header}</Button> */}
            <button onClick={handleOnClick}><h2>{header}</h2></button>
        </li>
    );
};

export default TabHeader;