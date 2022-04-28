import React, { ReactElement, useState } from "react";

import TabHeader, { Props as TabHeaderProps } from "./tabHeader";
import { tabs, container } from "./index.module.css";

type Props = {
    children: ReactElement<TabHeaderProps>[];
    preSelectedTabIndex?: number;
};

// Only works for tab counts of 1, 2, 3, 4, 6, 12

const Tabs = (props: Props): JSX.Element => {
    const { children, preSelectedTabIndex } = props;
    const [ selectedTabIndex, setSelectedTabIndex ] = useState<number>(preSelectedTabIndex || 0);

    var tabCount = Math.round(12/children.length)

    return (
        <div className={container}>
            <ul className={tabs}>
                {children.map((item, index) => (
                    <TabHeader 
                        key={item.props.header}
                        header={item.props.header}
                        index={index}
                        isActive={index === selectedTabIndex}
                        setSelectedTab={setSelectedTabIndex}
                        tabCount={tabCount}
                    />
                ))}
            </ul>
            {children[selectedTabIndex]}
        </div>
    );
}

export default Tabs;