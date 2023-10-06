import styles from './ScrollDownArrow.module.css';

const ScrollDownArrow = () => {
  function cubicBezier(x1, y1, x2, y2) {
    return function (t) {
      const p0 = 1 - t;
      const p1 = p0 * p0 * p0;
      const p2 = 3 * p0 * p0 * t;
      const p3 = 3 * p0 * t * t;
      const p4 = t * t * t;

      return p1 + p2 * x1 + p3 * x2 + p4;
    };
  }
  const scrollToBottom = () => {
    const start = window.scrollY;
    const end = window.innerHeight * 2;
    const duration = 1000; // Animation duration in milliseconds
    const startTime = performance.now();

    const scrollAnimation = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const ease = cubicBezier(0.42, 0, 0.58, 1); // Custom cubic-bezier timing function

      window.scrollTo(0, start + ease(progress) * (end - start));

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    };
  };

  return (
    <div className={styles.scrollDownContainer}>
      <div className={styles.innerContainer} onClick={scrollToBottom}>
        <p>
          <i className={styles.arrow}></i>
        </p>
      </div>
    </div>
  );
};

export default ScrollDownArrow;
