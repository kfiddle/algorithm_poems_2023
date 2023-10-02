import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

import Header from './components/header/Header';
import WarrantOfficerStripes from './components/warrantOfficerStripes/WarrantOfficerStripes';

import bigWheel from './assets/bigWheel.png';
import pennyFrame from './assets/pennyFrame.png';
import smallWheel from './assets/smallWheel-01.png';
import headshot from './assets/headShot.JPG';

import PennyFarthing from './components/pennyFarthing/PennyFarthing';
import SideBar from './components/sideBar/SideBar';
import AboutPanel from './components/aboutPanel/AboutPanel';
import ContactFormPanel from './components/contactFormPanel/ContactFormPanel';

const ABOUTME = 'ABOUT ME';
const CURRENTPROJECTS = 'CURRENT PROJECTS';
const CONTACT = 'CONTACT';

const menuList = [ABOUTME, CURRENTPROJECTS, CONTACT];

function App() {
  const [showPennyFarthing, setShowPennyFarthing] = useState(false);
  const [stripesClicked, setStripesClicked] = useState(false);
  const [clickedChoice, setClickedChoice] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const showDelay = setTimeout(() => {
      setShowPennyFarthing(true);
    }, 1500);

    const unmountDelay = setTimeout(() => {
      setShowPennyFarthing(false);
    }, 22000);

    return () => {
      clearTimeout(showDelay);
      clearTimeout(unmountDelay);
    };
  }, []);

  const choiceHandler = (chosen) => {
    setClickedChoice(chosen);
    if (chosen == CONTACT || chosen == CURRENTPROJECTS) {
      setIsHeaderVisible(false);
    }
    setStripesClicked(false);
  };

  const stripesHandler = () => {
    setStripesClicked(!stripesClicked);
    setClickedChoice('');
    setIsHeaderVisible(true)
  };

  return (
    <div className={styles.appDiv}>
      <div className={styles.stripesDiv}>
        <WarrantOfficerStripes stripesHandler={stripesHandler} stripesClicked={stripesClicked} />
      </div>

      <Header isVisible={isHeaderVisible} />
      {showPennyFarthing && <PennyFarthing smallWheel={smallWheel} bigWheel={bigWheel} pennyFrame={pennyFrame} />}
      {stripesClicked && <SideBar menuList={menuList} choice={choiceHandler} visible={stripesClicked} />}
      {clickedChoice === ABOUTME && <AboutPanel headshot={headshot} />}
      {clickedChoice === CONTACT && <ContactFormPanel />}
    </div>
  );
}

export default App;
