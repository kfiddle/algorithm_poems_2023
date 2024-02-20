import React from "react";
import styles from "./InfoBox.module.css";

import { useMediaQuery } from "react-responsive";

const InfoBox = ({ title, children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className={styles.outerContainer}>
            <div className={isMobile? styles.phoneTitleHeader : styles.titleHeader}>{title}</div>
            {children}
        </div>
    );
};

export default InfoBox;
