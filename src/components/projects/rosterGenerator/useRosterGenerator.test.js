import rosterGenerator from './rosterGenerator';

jest.spyOn(console, 'log').mockImplementation(() => {});

test('rosterGenerator should function properly', () => {
  const testString = '3[1.2.3/pic] 3 3 3 - 2 2 2 2'
  const reply = rosterGenerator(testString);
  // expect(reply).notToBe(5);
});
