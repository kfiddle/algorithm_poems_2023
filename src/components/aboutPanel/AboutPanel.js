import { useState, useEffect, Fragment } from 'react';

import { useMediaQuery } from 'react-responsive';

import deskStyles from './AboutPanel.module.css';
import phoneStyles from './PhoneAboutPanel.module.css';

const AboutPanel = (props) => {
  const [leftCurtainPlace, setLeftCurtainPlace] = useState(-52);
  const [rightCurtainPlace, setRightCurtainPlace] = useState(70);

  const [imageFilter, setImageFilter] = useState(300);
  const [leftCurtainOpacity, setLeftCurtainOpacity] = useState(0.2);

  const isSmallish = useMediaQuery({ maxWidth: 1240 });

  const styles = !isSmallish ? deskStyles : phoneStyles;

  useEffect(() => {
    setTimeout(() => {
      setLeftCurtainPlace(5);
      setRightCurtainPlace(0);
    }, 10);

    setTimeout(() => {
      setLeftCurtainOpacity(1.0);
      setImageFilter(100);
    }, 300);
  }, []);

  return (
    <Fragment>
      <div
        className={styles.headShotCurtain}
        style={{
          transform: `translateX(${leftCurtainPlace}vw)`,
          opacity: leftCurtainOpacity,
        }}
      >
        <img src={props.headshot} className={styles.headShot} style={{ filter: `brightness(${imageFilter}%)` }} />
      </div>
      <div className={styles.storyCurtain} style={{ transform: `translateX(${rightCurtainPlace}vw)` }}>
        <div className={`${styles.storyBlock} ${styles.topThirdStory}`}>
          <p>
            Until recently, I spent each day as a professional violin player immersed in a centuries-old world. I spent
            thousands of hours with a piece of technology built around the year 1800, and with it I explored a world of
            language and ideas stretching back even further. I used to joke that my analog brain couldn't function
            without pencil and paper.
          </p>
        </div>
        <div className={`${styles.storyBlock} ${styles.middleThirdStory}`}>
          <p>
            These days, I love to design apps and websites. My front-ends are built in React, and I connect these to a
            back-end in Java, ...
          </p>
        </div>
        <div className={`${styles.storyBlock} ${styles.bottomThirdStory}`}>
          <p>
            ...and I've discovered that the worlds of classical music and software development aren't actually so
            different.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPanel;
