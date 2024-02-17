import { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';

import deskStyles from './PennyFarthing.module.css';
import phoneStyles from './PhoneBike.module.css';

const PennyFarthing = ({ smallWheel, pennyFrame, bigWheel, bikePosition }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const styles = !isMobile ? deskStyles : phoneStyles;

  return (
    <div className={styles.bikeContainer} style={{ transform: `translateX(${bikePosition}vw)` }}>
      <img src={smallWheel} className={styles.smallWheel}></img>
      <img src={pennyFrame} className={styles.pennyFrame}></img>
      <img src={bigWheel} className={styles.bigWheel}></img>
    </div>
  );
};

export default PennyFarthing;
