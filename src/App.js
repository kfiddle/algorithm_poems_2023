import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

import Header from './components/header/Header';
import WarrantOfficerStripes from './components/warrantOfficerStripes/WarrantOfficerStripes';

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

import harmonodeShot1 from './assets/harmonode/harmonodeShot1.png';
import harmonodeGIF1 from './assets/harmonode/harmonodeGIF1.gif';
import harmonodeGIF2 from './assets/harmonode/harmonodeGIF2.gif';

import PennyFarthing from './components/pennyFarthing/PennyFarthing';
import Bird from './components/Bird/Bird';
import SideBar from './components/sideBar/SideBar';
import AboutPanel from './components/aboutPanel/AboutPanel';
import ContactFormPanel from './components/contactFormPanel/ContactFormPanel';
import Projects from './components/projects/Projects';
import ProjectPanel from './components/projectPanel/ProjectPanel';

const ABOUTME = 'ABOUT ME';
const CURRENTPROJECTS = 'CURRENT PROJECTS';
const CONTACT = 'CONTACT';

const birds = [bird1, bird2, bird3, bird4, bird5, bird6, bird7, bird8, bird9, bird10, bird11, bird12, bird13, bird14];

const menuList = [ABOUTME, CURRENTPROJECTS, CONTACT];

function App() {
  const [showPennyFarthing, setShowPennyFarthing] = useState(false);
  const [stripesClicked, setStripesClicked] = useState(false);
  const [clickedChoice, setClickedChoice] = useState('');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  let projects = [
    {
      info: 'lots of text lots of text lots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of text lots of text lots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of text',

      slides: [
        { id: 1, src: harmonodeShot1, alt: 'welcomeView' },
        { id: 2, src: harmonodeGIF1, alt: 'harmonodeGIF1' },
        { id: 3, src: harmonodeGIF2, alt: 'harmonodeGIF2' },
      ],
    },
  ];

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
    setIsHeaderVisible(true);
  };

  return (
    <div className={styles.appDiv}>
      <div className={styles.stripesDiv}>
        <WarrantOfficerStripes stripesHandler={stripesHandler} stripesClicked={stripesClicked} clickedChoice={clickedChoice} />
      </div>

      <Header isVisible={isHeaderVisible} />
      {showPennyFarthing && <PennyFarthing smallWheel={smallWheel} bigWheel={bigWheel} pennyFrame={pennyFrame} />}
      {stripesClicked && <SideBar menuList={menuList} choice={choiceHandler} visible={stripesClicked} />}
      {clickedChoice === ABOUTME && <AboutPanel headshot={headshot} />}
      {clickedChoice === CONTACT && <ContactFormPanel />}
      {clickedChoice === CURRENTPROJECTS && <ProjectPanel projects={projects} />}
      <Bird birds={birds} />
    </div>
  );
}

export default App;
