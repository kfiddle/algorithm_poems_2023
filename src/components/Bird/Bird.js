import React, { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';


import deskStyles from './Bird.module.css';
import phoneStyles from './PhoneBird.module.css';

import styles from './Bird.module.css';


const Bird = ({ birds }) => {
  let [birdStyles, setBirdStyles] = useState([0, 0, 1]);
  let [imageNumber, setImageNumber] = useState(0);
  // const isMobile = useMediaQuery({ maxWidth: 767 });


  // const styles = !isMobile ? deskStyles : phoneStyles;


  useEffect(() => {
    const flyAway = (i, birdNumber) => {
      if (birdNumber > 12) {
        birdNumber = 8;
      }

      setTimeout(() => {
        setImageNumber(birdNumber);
      }, 110 * i);

      birdNumber++;
      i++;

      if (i < 35) {
        flyAway(i, birdNumber);
      }
    };

    setTimeout(() => {
      flyAway(0, 0);
      setBirdStyles([40, 15, 0]);
    }, 2000);
  }, []);

  return (
    <img
      className={styles.bird}
      // src={`../../assets/flyingBird/heron_inFlight-${imageNumber}.png`}
      src={birds[imageNumber]}
      style={{
        transform: `translate(${birdStyles[0]}vw, -${birdStyles[1]}vh)`,
        opacity: `${birdStyles[2]}`,
      }}
      alt="bird"
    ></img>
  );
};

export default Bird;
