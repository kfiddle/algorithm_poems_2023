import React, { useState, useEffect } from 'react';
import WarrantOfficerStripes from '../warrantOfficerStripes/WarrantOfficerStripes';
import styles from './Header.module.css';

const Header = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    // Delay showing the subtitle after a certain time (e.g., 1.5 seconds)
    const subtitleTimeout = setTimeout(() => {
      setShowSubtitle(true);
    }, 1500);

    return () => clearTimeout(subtitleTimeout);
  }, []);

  const letterArray = [
    { letter: 'K', fontSize: '6rem' },
    'e',
    'n',
    ' ',
    { letter: 'J', fontSize: '6rem' },
    'o',
    'h',
    'n',
    's',
    't',
    'o',
    'n',
  ];

  return (
    <div className={styles.headerContainer}>
      {/* <div> */}
      {/* </div> */}
      <div className={styles.nameAndSubTitle}>
        <h1 className={styles.header}>
          {letterArray.map((item, index) => (
            <span
              key={index}
              className={styles.flyInLetter}
              style={{
                animationDelay: `${index * 0.08}s`,
                fontSize: typeof item === 'object' ? item.fontSize : 'inherit',
              }}
            >
              {typeof item === 'object' ? item.letter : item}
            </span>
          ))}
        </h1>
        {showSubtitle && (
          <div>
            <p className={styles.subtitle}>Full Stack Developer</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
