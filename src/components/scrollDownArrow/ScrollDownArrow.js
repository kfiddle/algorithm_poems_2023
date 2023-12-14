import { useState, useEffect } from 'react';

import styles from './ScrollDownArrow.module.css';

const ScrollDownArrow = () => {
  const [timesClicked, setTimesClicked] = useState(0);

  const scrollToBottom = () => {
    let scrollDistances = [0.9, 1.8];
    const scrollDistance = window.innerHeight * scrollDistances[timesClicked];

    window.scrollTo({
      top: scrollDistance, // Scroll to the height of the viewport
      behavior: 'smooth', // Add smooth scrolling animation
    });
    setTimesClicked(timesClicked + 1);
  };


  
  useEffect(() => {
    const handleScroll = () => {
      // Reset the timesClicked state if the user manually scrolls near the top
      if (window.scrollY < window.innerHeight * 0.1) {
        setTimesClicked(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
