import allInsts from './instObj';

const rosterGenerator = (text) => {

  
  const Part = (instAbbrev, rankOrDesignate) => {
    let specialDesignate = isNaN(rankOrDesignate) ? rankOrDesignate : null;
    let rank;
    if (!isNaN(rankOrDesignate)) {
      rank = +rankOrDesignate;
    } else {
      rank = null;
    }
    if (isValidInst(instAbbrev) && rankOrDesignate) {
      return {
        instrument: { abbreviation: instAbbrev },
        rank,
        specialDesignate,
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
};

export default rosterGenerator;
