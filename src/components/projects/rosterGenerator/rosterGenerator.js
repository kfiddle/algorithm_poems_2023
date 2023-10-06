import { primaries, allInsts, Part, Chair, instFromAbbv, renderChairWithDoublings } from './instObj';

const rosterGenerator = (text) => {
  let isValid = true;
  let chairsOnStage = [];

  // "4[1.2.3.4]" 
  // 0, 0

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
        let rank = scoreLine;
        chairsOnStage.push(new Chair(new Part(primaryInst, rank)));
  
        // in case the scoreline is an abbreviation only, like "cbn" or "pic";
      } else if (primaryInst.hasThisSecondary(scoreLine)) {
        const inst = instFromAbbv(scoreLine);
        chairsOnStage.push(new Chair(new Part(inst, 1)));

        // in case scoreline ends with a number, like "cbn2", or "crnt3"
      } else if (primaryInst.hasThisSecondary(scoreLine.slice(0, -1))) {
        const inst = instFromAbbv(scoreLine.slice(0, -1));
        const rank = scoreLine.slice(-1);
        const part = new Part(inst, rank);
        chairsOnStage.push(new Chair(part));

        // in this case, scoreline would be something like "3/cbn2"
        // 4[1.2.3/pic2.pic1]
      } else {
        chairsOnStage.push(renderChairWithDoublings(primaryInst, scoreLine));
      }
    });
    return closingIndex + j;
  };

  // 2 2 2 2 - 3 3 3 3
  // "4[1.2.3.4]"
  const mainLoop = (text) => {
    let times = 0;
    for (let j = 0; j < text.length; j++) {
      if (text[j] !== '-') {
        let nextChar = text[j + 1];
        if (nextChar === '[') {
          j = goBetweenBrackets(j, times);
          times++;
        } else if (!isNaN(text[j])) {
          for (let k = 1; k <= text[j]; k++) {
            chairsOnStage.push(new Chair(new Part(primaries[times], k)));
          } times++;
        } 
      }
    }
  };

 

  mainLoop(text);
  return isValid ? chairsOnStage : false;
};

export default rosterGenerator;
