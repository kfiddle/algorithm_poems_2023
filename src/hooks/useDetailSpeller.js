import { useState, useEffect } from "react";

const useDetailSpeller = (on, statementOn, statementOff) => {
  const [letters, setLetters] = useState("");

  // const deets = "click for details";
  let lettersIndex = 0;

  useEffect(() => {

    function oneLetter() {
      function changeALetter(timestamp) {
        if (lettersIndex < statementOn.length + 1) {
          setLetters(statementOn.substr(0, lettersIndex));
          lettersIndex++;
        }
        requestAnimationFrame(oneLetter);
      }
      requestAnimationFrame(changeALetter);
    }

    if (on) {
      oneLetter();
    } else {
      setLetters(statementOff);
    }
  }, [on, lettersIndex, statementOff, statementOn]);

  return letters;
};

export default useDetailSpeller;
