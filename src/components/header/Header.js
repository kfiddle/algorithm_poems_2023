import React, { useState, useEffect } from 'react';

import { useMediaQuery } from "react-responsive";
import WarrantOfficerStripes from '../warrantOfficerStripes/WarrantOfficerStripes';


import deskStyles from './HeaderDesk.module.css';
import phoneStyles from './HeaderPhone.module.css';

const Header = ({ isVisible }) => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isVisibleClass, setIsVisibleClass] = useState('');

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const styles = !isMobile ? deskStyles : phoneStyles;


  useEffect(() => {
    const subtitleTimeout = setTimeout(() => {
      setShowSubtitle(true);
    }, 1500);

    return () => clearTimeout(subtitleTimeout);
  }, []);

  useEffect(() => {
    if (isVisible) setIsVisibleClass(styles.visible);
    if (!isVisible) setIsVisibleClass(styles.hidden);
  }, [isVisible]);


  const letters = ['K', 'e', 'n', ' ', 'J', 'o', 'h', 'n', 's', 't', 'o', 'n',]

  const upperStyle = `${styles.flyInLetter} ${styles.caps}`;
  const lowerStyle = `${styles.flyInLetter} ${styles.lower}`;

  const flyInLetters = letters.map((letter, index) => <span key={index} style={{
    animationDelay: `${index * 0.08}s`
  }} className={letter === letter.toUpperCase() ? upperStyle : lowerStyle}>{letter}</span>)

  return (
    <div className={styles.headerContainer}>
      <div className={styles.nameAndSubTitle}>
        <h1 className={`${styles.header} ${isVisibleClass}`}>
          {flyInLetters}
        </h1>
        <div className={isVisibleClass}>
          <p className={styles.subtitle}>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
