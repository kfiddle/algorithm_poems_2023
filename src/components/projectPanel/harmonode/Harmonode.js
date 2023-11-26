import styles from './Harmonode.module.css';
const Harmonode = ({ harmonode }) => {
  const { harmonodeShot1, harmonodeGIF1, harmonodeGIF2 } = harmonode;

  return (
    <div className={styles.outerContainer}>
      <div>
        <img src={harmonodeShot1} alt="harmonodeHome" />
      </div>
      <div>
        <img src={harmonodeGIF1} alt="harmonodeGIF1" />
      </div>
      <div>
        <img src={harmonodeGIF2} alt="harmonodeGIF2" />
      </div>
    </div>
  );
};

export default Harmonode;
