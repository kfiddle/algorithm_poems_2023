import { primaries, isValidAbbv, allInsts, Part, Chair } from './instObj';

test('instAbbrev should return an object for allInsts', () => {
  const instAbbvs = allInsts.map((inst) => inst.abbreviation);
  instAbbvs.forEach((abbreviation) => {
    const result = isValidAbbv(abbreviation);
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
  expect(pFlChair).toEqual({ part: { ...principalFlPart } });

  const cl = allInsts[8];
  const ebCl = allInsts[9];

  const thirdCl = new Part(cl, '3');
  const firstEbFlat = new Part(ebCl, '1');
  const thirdClChair = new Chair(thirdCl);
  thirdClChair.add(firstEbFlat);
  expect(thirdClChair).toEqual({ part: thirdCl, doublings: [firstEbFlat] });
});
