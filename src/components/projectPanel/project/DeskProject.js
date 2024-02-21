import React, { useState, useEffect } from 'react';

import styles from './DeskProject.module.css';

import { useMediaQuery } from 'react-responsive';

import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

const Project = ({ project, scrollBackUp }) => {

  const { infoBox, slides } = project;
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageDivHeight =window.innerHeight * 0.9;

  const top = 9;
  const scrollOutHandler = () => {
    setCurrentIndex(0);
    scrollBackUp(top);
  };

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
      style={{
        transform: `translateY(calc(-${currentIndex * 100}%))`,
        height: imageDivHeight,
      }} /* Updated translateY for vertical scrolling */
    >
      <img src={slide.src} className={styles.image} alt={slide.alt} />
    </div>
  ));

  const gridSquares = Array.from({ length: 9 }, (_, i) => <div key={i} className={styles.square}></div>);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.infoDiv}>{infoBox}</div>

        <div className={styles.sliderControlDiv}>
          <div className={styles.gridContainer} onClick={scrollOutHandler}>
            {gridSquares}
          </div>
          <div className={styles.arrowBox}>
            <BiSolidUpArrow
              onClick={handlePrevClick}
              style={{ visibility: currentIndex > 0 ? 'visible' : 'hidden' }}
              className={styles.arrowIcon}
            />
          </div>
          <div className={styles.arrowBox}>
            <BiSolidDownArrow
              onClick={handleNextClick}
              style={{
                visibility: currentIndex < slides.length - 1 ? 'visible' : 'hidden',
              }}
              className={styles.arrowIcon}
            />
          </div>
        </div>
      </div>
      <div className={styles.imagesWrapper}>
        <div className={styles.imagesContainer}>{gallery}</div>
      </div>
    </div>
  )
};

export default Project;
