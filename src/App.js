import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import bigWheel from './assets/bigWheel.png';
import pennyFrame from './assets/pennyFrame.png';
import smallWheel from './assets/smallWheel-01.png';
import PennyFarthing from './components/pennyFarthing/PennyFarthing';

function App() {
  const [showPennyFarthing, setShowPennyFarthing] = useState(false);

  useEffect(() => {
    // Delay for half a second (500 milliseconds) before showing PennyFarthing
    const delay = setTimeout(() => {
      setShowPennyFarthing(true);
    }, 1500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="App">
      <Header />
      {showPennyFarthing && (
        <PennyFarthing smallWheel={smallWheel} bigWheel={bigWheel} pennyFrame={pennyFrame} />
      )}
    </div>
  );
}

export default App;
