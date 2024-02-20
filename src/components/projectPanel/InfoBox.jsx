import React from "react";
import styles from "./InfoBox.module.css";

const InfoBox = ({ title, children }) => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.titleHeader}>{title}</div>
            {children}
        </div>
    );
};

export default InfoBox;
