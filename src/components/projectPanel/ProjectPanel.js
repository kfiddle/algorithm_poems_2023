import Project from './project/Project';
import ProjectCards from './projectCard/ProjectCards';

import styles from './ProjectPanel.module.css';

const ProjectPanel = ({ projects }) => {
  return (
    <div className={styles.outerContainer}>
      <div style={{ height: '90vh' }}>
        <ProjectCards />
      </div>
      <div style={{ background: 'transparent' }}>
        <Project project={projects[0]} />
      </div>
      <div style={{ height: '90vh', background: 'indigo' }}>maybe finance will be here</div>
    </div>
  );
};

export default ProjectPanel;
