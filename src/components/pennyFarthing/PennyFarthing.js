import { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';

import deskStyles from './PennyFarthing.module.css';
import phoneStyles from './PhoneBike.module.css';

const PennyFarthing = ({ smallWheel, pennyFrame, bigWheel }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const styles = !isMobile ? deskStyles : phoneStyles;

  const [bikePosition, setBikePosition] = useState(-50);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const moveBike = () => {
      console.log(bikePosition);
      setBikePosition((prevPosition) => prevPosition + 0.2); // Increment the position by 1 vw
    };

    const interval = setInterval(moveBike, 25); // Move the bike every 10 milliseconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  return bikePosition > 150 ? null : (
    <div className={styles.bikeContainer} style={{ transform: `translateX(${bikePosition}vw)` }}>
      <img src={smallWheel} className={styles.smallWheel}></img>
      <img src={pennyFrame} className={styles.pennyFrame}></img>
      <img src={bigWheel} className={styles.bigWheel}></img>
    </div>
  );
};

export default PennyFarthing;
