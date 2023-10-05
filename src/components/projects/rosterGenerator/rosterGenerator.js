import { primaries, allInsts, Part, Chair } from './instObj';

const rosterGenerator = (text) => {
  let isValid = true;
  let chairsOnStage = [];


  const goBetweenBrackets = (j, index) => {
    let primaryInst = primaries[index];
    if (primaryInst === undefined) {
      isValid = false;
      return;
    }
    let bracketSlice = text.slice(j + 1);
    let closingIndex = bracketSlice.indexOf(']');
    if (closingIndex === -1) {
      isValid = false;
      return;
    }
    let withinBracketsScoreLines = bracketSlice.slice(1, closingIndex).split('.');

    // by now, we will have only an array of [1, 2, 3/pic]
    //     or, 3[1, 2, cbn], etc...
    //4   [1, 2, 3/cbn2, cbn1]

    withinBracketsScoreLines.forEach((scoreLine) => {
      // if scoreline is just a number, make a chair from the primary inst and the number
      if (!isNaN(scoreLine)) {
        renderScoreLine(primaryInst, scoreLine);
        
        // chairsOnStage.push(new Chair(new P))
        scoreLinesList.push
      } else if (extras[primaryInst].includes(scoreLine)) {
        renderScoreLine(scoreLine, 1);
      } else if (extras[primaryInst].includes(scoreLine.slice(0, -1))) {
        const inst = scoreLine.slice(0, -1);
        const rank = scoreLine.slice(-1);
        renderScoreLine(inst, rank);
      } else {
        renderDoublings(primaryInst, scoreLine);
      }
    });
    return closingIndex + j;
  };

  const mainLoop = () => {
    let times = 0;
    for (let j = 0; j < text.length; j++) {
      let nextChar = text[j + 1];
      if (nextChar === '[') {
        j = goBetweenBrackets(j, times);
      } else {
        for (let k = 1; k <= text[j]; k++) {
          renderScoreLine(primaries[times], k);
        }
        times++;
      }
    }
  };

  mainLoop(text);
  finalCheckValid();
  return isValid ? scoreLinesList : false;
};

export default rosterGenerator;
