import styles from './Harmonode.module.css';
const Harmonode = ({ harmonode }) => {
  const { harmonodeShot1, harmonodeGIF1, harmonodeGIF2 } = harmonode;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.arrowDiv}>
          <div className={`${styles.arrow} ${styles.prevArrow}`}></div>
          <div className={`${styles.arrow} ${styles.nextArrow}`}></div>
        </div>
        <div className={styles.infoText}>
          First div will be here. It will have an amazing story, and more of a story First div will be here. It will have an amazing story,
          and more of a story First div will be here. It will have an amazing story, and more of a story First div will be here. It will
          have an amazing story, and more of a story First div will be here. It will have an amazing story, and more of a story First div
          will be here. It will have an amazing story, and more of a story First div will be here. It will have an amazing story, and more
          of a story
        </div>
      </div>
      <div className={styles.imagesContainer}>
        <div>
          <img src={harmonodeShot1} className={styles.image} alt="harmonodeHome" />
        </div>
        <div>
          <img src={harmonodeGIF1} className={styles.image} alt="harmonodeGIF1" />
        </div>
        <div>
          <img src={harmonodeGIF2} className={styles.image} alt="harmonodeGIF2" />
        </div>
      </div>
    </div>
  );
};

export default Harmonode;
