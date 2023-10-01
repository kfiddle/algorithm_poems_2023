import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

import Header from './components/header/Header';
import WarrantOfficerStripes from './components/warrantOfficerStripes/WarrantOfficerStripes';

import bigWheel from './assets/bigWheel.png';
import pennyFrame from './assets/pennyFrame.png';
import smallWheel from './assets/smallWheel-01.png';
import PennyFarthing from './components/pennyFarthing/PennyFarthing';

function App() {
  const [showPennyFarthing, setShowPennyFarthing] = useState(false);

  useEffect(() => {
    // Delay for 1500 milliseconds before showing PennyFarthing
    const showDelay = setTimeout(() => {
      setShowPennyFarthing(true);
    }, 1500);

    // Delay for 20 seconds (20000 milliseconds) before unmounting PennyFarthing
    const unmountDelay = setTimeout(() => {
      setShowPennyFarthing(false);
    }, 22000);

    // Clear both timeouts when the component unmounts
    return () => {
      clearTimeout(showDelay);
      clearTimeout(unmountDelay);
    };
  }, []);

  return (
    <div className={styles.appDiv}>
      <div className={styles.stripesDiv}>
        <WarrantOfficerStripes />
      </div>

      <Header />
      {showPennyFarthing && <PennyFarthing smallWheel={smallWheel} bigWheel={bigWheel} pennyFrame={pennyFrame} />}
    </div>
  );
}

export default App;
