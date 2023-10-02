import React, { useState, useEffect } from 'react';
import WarrantOfficerStripes from '../warrantOfficerStripes/WarrantOfficerStripes';
import styles from './Header.module.css';

const Header = ({ isVisible }) => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isVisibleClass, setIsVisibleClass] = useState('');

  useEffect(() => {
    const subtitleTimeout = setTimeout(() => {
      setShowSubtitle(true);
    }, 1500);

    return () => clearTimeout(subtitleTimeout);
  }, []);

  useEffect(() => {
    if (isVisible) setIsVisibleClass(styles.visible);
    if (!isVisible) setIsVisibleClass(styles.hidden);
    console.log(isVisible);
  }, [isVisible]);

  const letterArray = [
    { letter: 'K', fontSize: '6.5rem' },
    'e',
    'n',
    ' ',
    { letter: 'J', fontSize: '6.5rem' },
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
      <div className={styles.nameAndSubTitle}>
        <h1 className={`${styles.header} ${isVisibleClass}`}>
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
        <div className={isVisibleClass}>
          <p className={styles.subtitle}>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
