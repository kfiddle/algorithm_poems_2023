import { useState, useEffect, Fragment } from 'react';

import { useMediaQuery } from 'react-responsive';

import styles from './AboutPanel.module.css';
import phoneStyles from './PhoneAboutPanel.module.css';

// extra small is < 576
// small is 576 to 768
// medium is 768 to 992
// large is 992 to 1200
// extra large is 1200+

const AboutPanel = (props) => {

  const [leftCurtainOpacity, setLeftCurtainOpacity] = useState(0.2);

  const extraSmall = useMediaQuery({ maxWidth: 576 });
  const small = useMediaQuery({ minWidth: 576, maxWidth: 767 });
  const medium = useMediaQuery({ minWidth: 768, maxWidth: 992 });
  const large = useMediaQuery({ minWidth: 992 });

  useEffect(() => {
    setTimeout(() => {
      setLeftCurtainOpacity(1.0);
    }, 500);
  }, []);

  const storyCurtainStyles = {};
  const headShotStyles = {};

  if (extraSmall) {
    headShotStyles.width = '50vw';
    storyCurtainStyles.fontSize='16px'
    storyCurtainStyles.top = '20vh';
    storyCurtainStyles.lineHeight = '1.4rem';
    storyCurtainStyles.color = 'white';
    storyCurtainStyles.margin = '0';
    headShotStyles.top = '0';
    headShotStyles.height = '100vh';
  }

  if (medium) {
    storyCurtainStyles.fontSize = '17px'
    storyCurtainStyles.margin = '4rem 5rem 0 0';
    storyCurtainStyles.lineHeight = '2.3rem';
    storyCurtainStyles.color = 'darkBlue';
    headShotStyles.width = '40vw';
  }

  if (large) {
    headShotStyles.width = '20vw';
    // console.log('medium')


  }

  return (
    <Fragment>
      <div
        className={styles.headShotCurtain}
        style={{ opacity: leftCurtainOpacity }}
      >
        <img src={props.headshot} className={styles.headShot} styles={headShotStyles}/>
      </div>
      <div className={styles.storyCurtain} style={storyCurtainStyles}>
        When I was a kid, I loved poetry. These days, I love a different kind of poetry- designing full stack apps and websites. I am happiest working in
        React and Node.js or Java, and I prefer building frontends that look original- not like so many of the cookie
        cutter sites we see every day. I've discovered that a world of digital poetry is possible
        in things like Javascript and Java.
      </div>
    </Fragment>
  );
};

export default AboutPanel;


