import ScrollDownArrow from '../scrollDownArrow/ScrollDownArrow';
import Project from './project/Project';

import styles from './ProjectPanel.module.css';

const ProjectPanel = ({ projects }) => {
  return (
    <div className={styles.outerContainer}>
      <div style={{ height: '90vh' }}>Sym Craft will be here</div>
      <div>
        <Project project={projects[0]} />
      </div>
      <div style={{ height: '90vh', background: 'indigo' }}>maybe finance will be here</div>
      <ScrollDownArrow />
    </div>
  );
};

export default ProjectPanel;
