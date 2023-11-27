import styles from './ProjectCards.module.css';

const ProjectCards = ({ projects }) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.card}>
        <div className={styles.innerCard}>zzzzzzzzzzzzzzzz</div>
      </div>
      <div className={styles.card}>
        <div className={styles.innerCard}>yyyyyyyyyyyyyyyyyyyy</div>
      </div>
      <div className={styles.card}>
        <div className={styles.innerCard}>xxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
    </div>
  );
};

export default ProjectCards;
