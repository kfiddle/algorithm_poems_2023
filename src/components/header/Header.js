import React, { useState, useEffect } from 'react';

import { useMediaQuery } from "react-responsive";
import WarrantOfficerStripes from '../warrantOfficerStripes/WarrantOfficerStripes';


import deskStyles from './HeaderDesk.module.css';
import phoneStyles from './HeaderPhone.module.css';

// *** need some extra responsiveness in this one, so 
// in addition to both CSS files, adding some inline details below

// extra small is < 576
// small is 576 to 768
// medium is 768 to 992
// large is 992 to 1200
// extra large is 1200+

const Header = ({ isVisible }) => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isVisibleClass, setIsVisibleClass] = useState('');

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const small = useMediaQuery({ minWidth: 768, maxWidth: 992 });
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

  const headerDivStyles = {};
  const headerStyles = {};
  const pStyles = {};

  if (small) { 
    headerDivStyles.marginRight = '10rem'
    headerDivStyles.marginTop = '2rem'
    headerStyles.fontSize = '2rem'; 
    pStyles.fontSize = '2rem';
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.nameAndSubTitle} style={headerDivStyles}>
        <h1 className={`${styles.header} ${isVisibleClass}`} style={headerStyles}>
          {flyInLetters}
        </h1>
        <div className={isVisibleClass}>
          <p className={styles.subtitle} style={pStyles}>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
