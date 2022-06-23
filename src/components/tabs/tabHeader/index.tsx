import React, { useCallback } from "react";

import * as styles from "./index.module.css";

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

  return (
    <li className={`${styles.header} ${isActive ? "active" : ""}`}>
      <button className={icon} onClick={handleOnClick}>
        <h2>{header}</h2>
      </button>
    </li>
  );
};

export default TabHeader;
