import styles from './RepliedWork.module.css';

const RepliedWork = ({ work, submitWork }) => {

  const clickHandler = () => submitWork(work.id);

  return (
    <div onClick={clickHandler} className={styles.outerContainer}>
      {work.title}
    </div>
  );
};

export default RepliedWork;
