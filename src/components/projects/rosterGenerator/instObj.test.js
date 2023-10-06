import { primaries, instFromAbbv, allInsts, Part, Chair, renderChairWithDoublings } from './instObj';

test('instAbbrev should return an object for allInsts', () => {
  const instAbbvs = allInsts.map((inst) => inst.abbreviation);
  instAbbvs.forEach((abbreviation) => {
    const result = instFromAbbv(abbreviation);
    expect(typeof result).toBe('object');
  });
});

test('Inst should return an array of its secondaries', () => {
  const flute = allInsts[0];
  const fluteSeconds = flute.getAllSecondaries();
  expect(fluteSeconds.length).toBe(3);

  const clarinet = allInsts[8];
  const clarinetSeconds = clarinet.getAllSecondaries();
  expect(clarinetSeconds.length).toBe(6);
});

test('should be able to create Part with inst and rank', () => {
  const flute = allInsts[0];
  const principalFlPart = new Part(flute, '1');
  expect(principalFlPart).toEqual({ inst: { ...flute }, rank: 1 });

  const cl = allInsts[8];
  const plPart = new Part(cl, '3');
  expect(plPart).toEqual({ inst: { ...cl }, rank: 3 });
});

test('should be able to create a chair from a part or parts', () => {
  const flute = allInsts[0];
  const principalFlPart = new Part(flute, '1');
  const pFlChair = new Chair(principalFlPart);
  expect(pFlChair).toEqual({ part: { ...principalFlPart }, doublings: [] });

  const cl = allInsts[8];
  const ebCl = allInsts[9];

  const thirdCl = new Part(cl, '3');
  const firstEbFlat = new Part(ebCl, '1');
  const thirdClChair = new Chair(thirdCl);
  thirdClChair.add(firstEbFlat);
  expect(thirdClChair).toEqual({ part: thirdCl, doublings: [firstEbFlat] });
});

test('should be able to return an inst based on whether a primary is identied from a secondary abbv', () => {
  const fl = allInsts[0];
  const pic = allInsts[3];
  const piccoloAbbv = 'pic';
  expect(fl.hasThisSecondary(piccoloAbbv)).toEqual({ ...pic });
});

// "3/cbn2", or "4/pic/alto" or "3/pic"

test('should be able to render a chair with doublings from a given string', () => {
  const fl = allInsts[0];
  const pic = allInsts[3];
  const altoFlute = allInsts[2];

  const bassoon = allInsts[15];
  const contra = allInsts[16];

  expect(renderChairWithDoublings(fl, '3/pic')).toEqual({ part: { inst: { ...fl }, rank: 3 }, doublings: [{ inst:{...pic}, rank: 1 }] });

  expect(renderChairWithDoublings(bassoon, "3/cbn2")).toEqual({ part: { inst: { ...bassoon }, rank: 3 }, doublings: [{ inst:{...contra}, rank: 2 }] });

  expect(renderChairWithDoublings(fl, "4/pic/afl")).toEqual({ part: { inst: { ...fl }, rank: 4 }, doublings: [{ inst:{...pic}, rank: 1 }, {inst: {...altoFlute}, rank: 1}] });

});
