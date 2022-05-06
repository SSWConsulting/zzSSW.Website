import React, {ReactElement} from 'react';
import * as styles from "./index.module.css"

type Props = {
    header: string;
    icon: string;
    children: ReactElement | ReactElement[];
};

const TabContent = ({children}: Props): JSX.Element => <div className={styles.container}>{children}</div>;

export default TabContent;