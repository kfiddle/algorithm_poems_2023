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
        {/* <img src={props.headshot} className={styles.headShot} style={{ filter: `brightness(${imageFilter}%)` }} /> */}
        <img src={props.headshot} className={styles.headShot} />
      </div>
      <div className={styles.storyCurtain} style={{ transform: `translateX(${rightCurtainPlace}vw)` }}>
        <div className={`${styles.storyBlock} ${styles.topThirdStory}`}>
          <p>When I was a kid, I loved poetry.</p>
        </div>
        <div className={`${styles.storyBlock} ${styles.middleThirdStory}`}>
          <p>These days, I design full stack apps and websites,</p>
        </div>
        <div className={`${styles.storyBlock} ${styles.bottomThirdStory}`}>
          <p>...and I've discovered that a world of digital poetry is possible <br />in things like  Javascript and Java.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPanel;
