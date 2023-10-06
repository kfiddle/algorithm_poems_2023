import styles from './Chair.module.css';

const Chair = ({ chair }) => {

  let displayChair = chair.part.inst.name + ' ' + chair.part.rank;

  if (chair.doublings.length > 0) {
    for (let double of chair.doublings) {
      let displayRank = double.rank > 1 ? double.rank : ''
      displayChair += ' /' + double.inst.abbreviation + displayRank
    }
  }
  return (
    <div>
      {displayChair}
    </div>
  );
};

export default Chair;
