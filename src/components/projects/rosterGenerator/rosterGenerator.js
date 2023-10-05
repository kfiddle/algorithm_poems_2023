import { primaries, allInsts } from './instObj';

const rosterGenerator = (text) => {
  let isValid = true;
  let scoreLinesList = [];

  const isValidAbbv = (instAbbv) => {
    const foundInst = allInsts.find((inst) => inst.abbreviation === instAbbv);
    return foundInst ? foundInst : false;
  };

  const Part = (instAbbrev, rankOrDesignate) => {
    let rank;
    if (!isNaN(rankOrDesignate)) {
      rank = +rankOrDesignate;
    } else {
      rank = null;
    }
    if (isValidAbbv(instAbbrev) && rankOrDesignate) {
      return {
        inst: { abbreviation: instAbbrev },
        rank,
      };
    } else {
      return null;
    }
  };

  const renderScoreLine = (inst, rank) => {
    let parts = [];
    let part = Part(inst, rank);
    part ? parts.push(part) : (isValid = false);
    scoreLinesList.push({ parts });
  };

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

    withinBracketsScoreLines.forEach((scoreLine) => {
      if (!isNaN(scoreLine)) {
        renderScoreLine(primaryInst, scoreLine);
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
