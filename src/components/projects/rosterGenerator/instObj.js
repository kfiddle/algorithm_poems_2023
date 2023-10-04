class Inst {
  constructor(name, abbreviation, primary = null) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.primary = primary;
    this.isPrimary = primary === null
  }
}

const flute = new Inst('flute', 'fl');
const piccolo = new Inst('piccolo', 'pic', flute);
const oboe = new Inst('oboe', 'ob');
const englishHorn = new Inst('english horn', 'Eh', oboe);
const clarinet = new Inst('clarinet', 'cl');
const bassClarinet = new Inst('bass clarinet', 'bcl', clarinet);
const bassClarinetA = new Inst('bass clarinet in A', 'bcl(A)', clarinet)
const bassDrum = new Inst('bass drum', 'bd');
const bassDrumCymbal = new Inst('bass drum with cymbal', 'bd/cym,');
const fluteC = new Inst('bass flute in C', 'bfl');
const bassGuitar = new Inst('bass guitar', 'bgtr');

const contrabassClarinet = new Inst('contrabass clarinet', 'cbcl', clarinet);
const bassoon = new Inst('bassoon', 'bn');
const contrabassoon = new Inst('contrabassoon', 'c. bsn.', bassoon);
const horn = new Inst('horn', 'hn');
const trumpet = new Inst('trumpet', 'tpt');
const piccTrumpet = new Inst('piccolo trumpet', 'pic tp');
const trombone = new Inst('trombone', 'tbn');
const bassTrombone = new Inst('bass trombone', 'b. tbn.', trombone);
const tuba = new Inst('tuba', 'tuba');
const violin = new Inst('violin', 'vn');
const viola = new Inst('viola', 'vla');
const cello = new Inst('cello', 'vc');
const doubleBass = new Inst('double bass', 'db');
const harp = new Inst('harp', 'hp');
const piano = new Inst('piano', 'pf');
const percussion = new Inst('percussion', 'perc');

const primaries = [flute, oboe, clarinet, bassoon, horn, trumpet, trombone, tuba]
const allInsts = [
  flute, piccolo, oboe, englishHorn, clarinet,
  bassClarinet, contrabassClarinet, bassoon, contrabassoon,
  horn, trumpet, trombone, bassTrombone, tuba,
  violin, viola, cello, doubleBass, harp, piano, percussion
];
