import { useState, useEffect } from 'react';

import Project1 from './project/Project1';
import ProjectCards from './projectCard/ProjectCards';

import styles from './ProjectPanel.module.css';

const ProjectPanel = ({ projects }) => {
  const [clickedProject, setClickedProject] = useState(null);

  const bottom = window.innerHeight * 0.9;
  const top = 90;

  const projectClicker = (id) => {
    setClickedProject(projects.find((pj) => pj.id === id));
    scroller(bottom);
  };

  const scroller = (position) => window.scrollTo({ top: position, behavior: 'smooth' });

  return (
    <div className={styles.outerContainer}>
      <div style={{ height: '90vh' }}>
        <ProjectCards projects={projects} clicker={projectClicker} />
      </div>
      <div style={{ background: 'transparent' }}>
        {clickedProject && <Project1 project={clickedProject} scrollBackUp={() => scroller(top)} />}
      </div>
    </div>
  );
};

export default ProjectPanel;
