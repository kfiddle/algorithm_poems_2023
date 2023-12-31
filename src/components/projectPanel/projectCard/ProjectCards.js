import styles from './ProjectCards.module.css';

const ProjectCards = ({ projects, clicker }) => {
  const displayCards = projects.map((project) => (
    <div key={project.id} className={styles.cardContainer}>
      <div onClick={() => clicker(project.id)} className={styles.card}>
        <img src={project.cardImage} className={styles.cardImage}/>
      </div>
    </div>
  ));

  return <div className={styles.outerContainer}>{displayCards}</div>;
};

export default ProjectCards;
