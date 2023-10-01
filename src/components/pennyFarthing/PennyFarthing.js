import { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';

import deskStyles from './PennyFarthing.module.css';
import phoneStyles from './PennyFarthing.module.css';

const PennyFarthing = ({ smallWheel, pennyFrame, bigWheel }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const styles = !isMobile ? deskStyles : phoneStyles;

  const [bikePosition, setBikePosition] = useState(0);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the current horizontal position of the bike
      const currentPosition = bikePosition + window.scrollX;

      // Determine when to unmount the component (e.g., when it's off the right side)
      if (currentPosition > screenWidth) {
        // Perform any cleanup or additional actions if needed
        // Then unmount the component
        setBikePosition(currentPosition);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bikePosition, screenWidth]);

  return bikePosition > screenWidth ? null : (
    <div className={styles.bikeContainer}>
      <img src={smallWheel} className={styles.smallWheel}></img>
      <img src={pennyFrame} className={styles.pennyFrame}></img>
      <img src={bigWheel} className={styles.bigWheel}></img>
    </div>
  );
};

export default PennyFarthing;
