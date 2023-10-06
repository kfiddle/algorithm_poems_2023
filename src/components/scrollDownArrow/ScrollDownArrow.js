import styles from './ScrollDownArrow.module.css';

const ScrollDownArrow = () => {
  return (
    <div className={styles.scrollDownContainer}>
      <p>
        <i className={styles.arrow}></i>
      </p>
    </div>
  );
};

export default ScrollDownArrow;
