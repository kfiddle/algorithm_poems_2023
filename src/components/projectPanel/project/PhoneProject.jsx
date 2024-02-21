import React, { useState } from "react";
import styles from "./PhoneProject.module.css";

const PhoneProject = ({ project, scrollBackUp }) => {

  const { infoBox, slides } = project;
  const [currentIndex, setCurrentIndex] = useState(0);

  const windowHeight = window.innerHeight;
  const infoBoxElement = document.querySelector(`.${styles.infoDiv}`);
  const infoBoxHeight = infoBoxElement ? infoBoxElement.offsetHeight : 0;
  const imageDivHeight = windowHeight - (windowHeight * 0.1) - infoBoxHeight;

  const top = 0;
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
                {/* <div className={styles.infoDiv}>{infoBox}</div> */}

                <div className={styles.sliderControlDiv}>
                    <div className={styles.gridContainer} onClick={scrollOutHandler}>
                        {gridSquares}
                    </div>
                  
                    
                </div>
            </div>
            <div className={styles.imagesWrapper}>
                <div className={styles.imagesContainer}>{gallery}</div>
            </div>
        </div>
    );
};

export default PhoneProject;
