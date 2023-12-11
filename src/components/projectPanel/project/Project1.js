import React, { useState } from 'react';
import styles from './Project1.module.css';

import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

const Project = ({ project, scrollBackUp }) => {
  const { title, info, slides } = project;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const gallery = slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`${styles.imageDiv} ${index === currentIndex ? styles.active : ''}`}
      style={{ transform: `translateY(-${currentIndex * 100}%)` }} /* Updated translateY for vertical scrolling */
    >
      <img src={slide.src} className={styles.image} alt={slide.alt} />
    </div>
  ));

  const gridSquares = Array.from({ length: 9 }, (_, i) => (
    <div key={i} className={styles.square}></div>
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.infoText}>{title}  {info}</div>
        <div className={styles.sliderControlDiv}>
          <div className={styles.gridContainer} onClick={scrollBackUp}>
            {gridSquares}
          </div>
          <div className={styles.arrowBox}>
            <BiSolidUpArrow onClick={handlePrevClick} style={{ visibility: currentIndex > 0 ? 'visible' : 'hidden' }} className={styles.arrowIcon} />

          </div>
          <div className={styles.arrowBox}>

            <BiSolidDownArrow onClick={handleNextClick} style={{
              visibility: currentIndex < slides.length - 1 ? 'visible' : 'hidden',
            }} className={styles.arrowIcon} />
          </div>
        </div>
      </div>
      <div className={styles.imagesWrapper}>
        <div className={styles.imagesContainer}>{gallery}</div>
      </div>
    </div>
  );
};

export default Project;
