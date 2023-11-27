import React, { useState } from 'react';
import styles from './Project.module.css';

const Project = ({ project }) => {
  const { info, slides } = project;

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
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      <img src={slide.src} className={styles.image} alt={slide.alt} />
    </div>
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.sliderControlDiv}>
          <div className={styles.arrowBox}>
            <div
              className={`${styles.arrow} ${styles.prevArrow}`}
              onClick={handlePrevClick}
              style={{ visibility: currentIndex > 0 ? 'visible' : 'hidden' }}
            ></div>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
          </div>
          <div className={styles.arrowBox}>
            <div
              className={`${styles.arrow} ${styles.nextArrow}`}
              onClick={handleNextClick}
              style={{
                visibility: currentIndex < slides.length - 1 ? 'visible' : 'hidden',
              }}
            ></div>
          </div>
        </div>
        <div className={styles.infoText}>{info}</div>
      </div>
      <div className={styles.imagesContainer}>{gallery}</div>
    </div>
  );
};

export default Project;
