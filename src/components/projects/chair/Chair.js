import styles from './Chair.module.css';

const Chair = ({ chair }) => {

  let displayChair = chair.part.inst.name;

  if (chair.doublings.length > 0) {
    for (let double of chair.doublings) {
      displayChair += ' ' + double.inst.abbreviation
    }
  }
  return (
    <div>
      {displayChair}
    </div>
  );
};

export default Chair;
