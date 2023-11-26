import React, { useState } from 'react';
import styles from './Project.module.css';

const Project = ({ project }) => {
  const { info, slides } = project;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const gallery = slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`${styles.imageDiv} ${
        index === currentIndex ? styles.active : ''
      }`}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      <img src={slide.src} className={styles.image} alt={slide.alt} />
    </div>
  ));

  return (
    <div className={styles.outerContainer}>
      <div className={styles.infoContainer}>
        {/* Arrows for navigation */}
        <div className={styles.arrowDiv}>
          <div
            className={`${styles.arrow} ${styles.prevArrow}`}
            onClick={handlePrevClick}
          ></div>
          <div
            className={`${styles.arrow} ${styles.nextArrow}`}
            onClick={handleNextClick}
          ></div>
        </div>
        <div className={styles.infoText}>{info}</div>
      </div>
      <div className={styles.imagesContainer}>{gallery}</div>
    </div>
  );
};

export default Project;
