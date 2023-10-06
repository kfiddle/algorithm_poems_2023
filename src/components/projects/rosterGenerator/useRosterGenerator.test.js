import rosterGenerator from './rosterGenerator';

jest.spyOn(console, 'log').mockImplementation(() => {});

test('rosterGenerator should function properly', () => {
  const testString = '3[1.2.3/pic]3332222'
  const reply = rosterGenerator(testString);
  console.log(reply)
  expect(reply.length).toEqual(20);
});

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

    // 3[1.2.3/pic1.pic2] 2 3[1.2.Bcl] 2 – 4a221
    // 4[1.2.3/pic.4/pic] 4[1.2.3.Eh] 4[1.2.3.bcl] 4 — 6431
    //2222 - 3333

    // 2  2  2  2 — 2  2  0  0 — tmp — str
    // 3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] — 4  5[1.2.3.crt1.crt2]  3  1 — tmp+3 — 2hp — str
    // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str
    // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str
    // 3[1.2.pic]  2  2  3[1.2.cbn] — 4  2  3  0 — tmp+3 — str
    // 3[1.2.3/pic]  2  2  2 — 4  2  3  1 — tmp+2 — str
    // 3[1.2/pic.3/pic]  3[1.2.Eh]  3[1.2.bcl]  2 — 4  2  3  1 — tmp+2 — 2hp — cel — str
    // 3[1.2.pic]  2  2  2 — 4  4[2tp, 2crt]  3  1 — tmp+3 — hp — str
    // 3  3  3  3 — 8[5-8/Wag tb]  3  3  1 — tmp — str
