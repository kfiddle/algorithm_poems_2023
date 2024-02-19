import React, { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';


import deskStyles from './Bird.module.css';
import phoneStyles from './PhoneBird.module.css';

import styles from './Bird.module.css';


const Bird = ({ birds }) => {
  const [birdStyles, setBirdStyles] = useState({ vw: 0, vh: 1, opacity: 1 });
  let [imageNumber, setImageNumber] = useState(0);


  useEffect(() => {
    const flyAway = (interval = 0, birdNumber = 0) => {
      if (birdNumber > 12) {
        birdNumber = 8;
      }

      setTimeout(() => {
        setImageNumber(birdNumber);
      }, 110 * interval);

      birdNumber++;
      interval++;

      if (interval < 35) {
        flyAway(interval, birdNumber);
      }
    };

    setTimeout(() => {
      flyAway();
      setBirdStyles({ vw: 40, vh: 15, opacity: 0 });

    }, 2000);
  }, []);

  

  return (
    <img
      className={styles.bird}
      src={birds[imageNumber]}
      style={{
        transform: `translate(${birdStyles.vw}vw, -${birdStyles.vh}vh)`,
        opacity: `${birdStyles.opacity}`,
      }}
      alt="bird"
    ></img>
  );
};

export default Bird;
