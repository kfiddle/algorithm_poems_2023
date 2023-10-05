// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';

import { describe } from 'eslint/lib/rule-tester/rule-tester';
// Import the function and the instrument data
import { isValidAbbv } from '../src/components/projects/rosterGenerator/rosterGenerator'; // Replace with the actual file path
import { allInsts, primaries } from '../src/components/projects/rosterGenerator/instObj'; // Replace with the actual file path
import { renderScoreLine, Part } from '../src/components/projects/rosterGenerator/rosterGenerator';

// Define your test cases
// describe('isValidAbbv function', () => {
//   it('should return true for valid instrument abbreviations', () => {
//     // Test valid instrument abbreviations
//     const instAbbvs = allInsts.map((inst) => inst.abbreviation);

//     instAbbvs.forEach((abbreviation) => {
//       const result = isValidAbbv(abbreviation);
//       // expect(typeof result).toBe('object');
//       expect(result).toEqual(5);
//     });
//   });

//   it('should return false for invalid instrument abbreviations', () => {
//     // Test invalid instrument abbreviations
//     const invalidAbbreviations = ['xyz', '123', 'invalid', 'notaninstrument',]; // Add more invalid abbreviations as needed

//     invalidAbbreviations.forEach((abbreviation) => {
//       expect(isValidAbbv(abbreviation)).toBe(false);
//     });
//   });
// });

// const Part = (instAbbrev, rankOrDesignate) => {
//   let rank;
//   if (!isNaN(rankOrDesignate)) {
//     rank = +rankOrDesignate;
//   } else {
//     rank = null;
//   }
//   if (isValidAbbv(instAbbrev) && rankOrDesignate) {
//     return {
//       instrument: { abbreviation: instAbbrev },
//       rank,
//     };
//   } else {
//     return null;
//   }
// };

// describe('Part should function', () => {
//   it('should be able to create a part', () => {
//     const part = Part('fl', 2);
//     expect(part).toBe({
//       inst: { abbreviation: 'fl' },
//       rank: 2,
//     });
//   });
// });
