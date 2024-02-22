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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const small = useMediaQuery({ minWidth: 768, maxWidth: 992 });


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
        <img src={props.headshot} className={styles.headShot} />
      </div>
      <div className={styles.storyCurtain} style={{ transform: `translateX(${rightCurtainPlace}vw)` }}>
        When I was a kid, I loved poetry. These days, I love a different kind of poetry- designing full stack apps and websites. I am happiest working in
        React and Node.js or Java, and I prefer building frontends that look original- not like so many of the cookie
        cutter sites we see every day. I've discovered that a world of digital poetry is possible
        in things like Javascript and Java.
      </div>
    </Fragment>
  );
};

export default AboutPanel;


