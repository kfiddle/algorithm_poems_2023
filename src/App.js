import React, { useState, useEffect } from 'react';

import { useMediaQuery } from 'react-responsive';

import Header from './components/header/Header';
import WarrantOfficerStripes from './components/warrantOfficerStripes/WarrantOfficerStripes';
import { projects } from './projectsData/ProjectsData.js';

import { enableScroll, disableScroll } from './utils/utils';

import bigWheel from './assets/bike/bigWheel.png';
import pennyFrame from './assets/bike/pennyFrame.png';
import smallWheel from './assets/bike/smallWheel-01.png';
import headshot from './assets/headShot.JPG';

import bird1 from './assets/flyingBird/bird1.png';
import bird2 from './assets/flyingBird/bird2.png';
import bird3 from './assets/flyingBird/bird3.png';
import bird4 from './assets/flyingBird/bird4.png';
import bird5 from './assets/flyingBird/bird5.png';
import bird6 from './assets/flyingBird/bird6.png';
import bird7 from './assets/flyingBird/bird7.png';
import bird8 from './assets/flyingBird/bird8.png';
import bird9 from './assets/flyingBird/bird9.png';
import bird10 from './assets/flyingBird/bird10.png';
import bird11 from './assets/flyingBird/bird11.png';
import bird12 from './assets/flyingBird/bird12.png';
import bird13 from './assets/flyingBird/bird13.png';
import bird14 from './assets/flyingBird/bird14.png';

import PennyFarthing from './components/pennyFarthing/PennyFarthing';
import Bird from './components/Bird/Bird';
import SideBar from './components/sideBar/SideBar';
import AboutPanel from './components/aboutPanel/AboutPanel';
import ContactFormPanel from './components/contactFormPanel/ContactFormPanel';
import ProjectPanel from './components/projectPanel/ProjectPanel';

import deskStyles from './AppDesk.module.css';
import phoneStyles from './AppPhone.module.css';
import Clock from './components/clock/Clock';

const ABOUTME = 'ABOUT ME';
const CURRENTPROJECTS = 'CURRENT PROJECTS';
const CONTACT = 'CONTACT';

const birds = [bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10, bird11, bird12, bird13, bird14];

const menuList = [ABOUTME, CURRENTPROJECTS, CONTACT];

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [showPennyFarthing, setShowPennyFarthing] = useState(true);
  const [bikePosition, setBikePosition] = useState(isMobile ? -150 : -50);
  const [bikeSpeed, setbikeSpeed] = useState(isMobile ? 5 : 25);
  const [stripesClicked, setStripesClicked] = useState(false);
  const [clickedChoice, setClickedChoice] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const styles = !isMobile ? deskStyles : phoneStyles;

  useEffect(() => {
    const showSideBar = setTimeout(() => {
      setStripesClicked(true)
    }, 7000);

    return () => clearTimeout(showSideBar);
  }, [])

  useEffect(() => {
    if (stripesClicked) {
      if (bikePosition > 100) {
        setBikePosition(isMobile ? -140 : -50)
        setShowPennyFarthing(true)
      }
    }
  }, [stripesClicked])

  useEffect(() => {
    const showDelay = setTimeout(() => {
      setShowPennyFarthing(true);
    }, 1500);

    const moveBike = () => {
      setBikePosition((prevPosition) => prevPosition + 0.2); // Increment the position by 1 vw
    };

    const interval = setInterval(moveBike, bikeSpeed);

    if (bikePosition > 110) {
      setShowPennyFarthing(false)
    }

    return () => {
      clearInterval(interval);
      clearTimeout(showDelay);
    };
  }, [bikePosition]);

  const choiceHandler = (chosen) => {
    setClickedChoice(chosen);
    if (chosen == CONTACT || chosen == CURRENTPROJECTS) {
      setIsHeaderVisible(false);
    }

    if (chosen === ABOUTME) disableScroll();
    else enableScroll();

    setStripesClicked(false);
  };

  const stripesHandler = () => {
    setStripesClicked(!stripesClicked);
    setClickedChoice('');
    setIsHeaderVisible(true);
  };

  const renderClock = clickedChoice === '' || clickedChoice === ABOUTME;

  return (
    <div className={styles.appDiv} >
      <div className={styles.stripesDiv}>
        <WarrantOfficerStripes stripesHandler={stripesHandler} stripesClicked={stripesClicked} clickedChoice={clickedChoice} />
      </div>

      <Header isVisible={isHeaderVisible} />

      {stripesClicked && <SideBar menuList={menuList} choice={choiceHandler} visible={stripesClicked} />}

      {clickedChoice === ABOUTME && <AboutPanel headshot={headshot} />}
      {clickedChoice === CONTACT && <ContactFormPanel />}
      {clickedChoice === CURRENTPROJECTS && <ProjectPanel projects={projects} />}

      {showPennyFarthing && <PennyFarthing smallWheel={smallWheel} bigWheel={bigWheel} pennyFrame={pennyFrame} bikePosition={bikePosition} />}
      <Bird birds={birds} />
      {renderClock && <Clock />}
    </div>
  );
}

export default App;

// screen sizes to ponder:

// extra small is < 576
// small is 576 to 768
// medium is 768 to 992
// large is 992 to 1200
// extra large is 1200+