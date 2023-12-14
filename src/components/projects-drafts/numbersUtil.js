const returnNumber = (input) => {
  const match = input.match(/\d+/);

  if (match) {
    const symphonyNumber = match[0];
    return symphonyNumber.replace(/\s/g, '');
  }
  const numberWords = {
    one: 1,
    first: 1,
    two: 2,
    second: 2,
    three: 3,
    third: 3,
    four: 4,
    fourth: 4,
    five: 5,
    fifth: 5,
    six: 6,
    sixth: 6,
    seven: 7,
    seventh: 7,
    eight: 8,
    eighth: 8,
    nine: 9,
    ninth: 9,
    ten: 10,
    tenth: 10,
    eleven: 11,
    eleventh: 11,
    twelve: 12,
    twelfth: 12,
    thirteen: 13,
    thirteenth: 13,
    fourteen: 14,
    fourteenth: 14,
    fifteen: 15,
    fifteenth: 15,
  };

  const numberWordsPattern = new RegExp(`\\b(${Object.keys(numberWords).join('|')})\\b`, 'gi');

  const textNumbermatch = numberWordsPattern.exec(input);
  if (textNumbermatch) {
    return numberWords[textNumbermatch[1].toLowerCase()];
  }
  return 'invalid entry';
};

export default returnNumber;
