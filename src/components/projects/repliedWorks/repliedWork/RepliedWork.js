import styles from './RepliedWork.module.css';

const RepliedWork = ({ work, submitWork }) => {
  console.log(work.id);

  const clickHandler = () => submitWork(work.id);

  return (
    <div onClick={clickHandler} className={styles.outerContainer}>
      {work.title}
    </div>
  );
};

export default RepliedWork;
