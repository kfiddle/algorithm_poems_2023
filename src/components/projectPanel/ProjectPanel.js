import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import DeskProject from './project/DeskProject';
import ProjectCards from './projectCard/ProjectCards';
import PhoneProject from './project/PhoneProject';

import styles from './ProjectPanel.module.css';

const ProjectPanel = ({ projects }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [clickedProject, setClickedProject] = useState(null);

  const bottom = window.innerHeight * 0.9;

  const projectClicker = (id) => {
    setClickedProject(projects.find((pj) => pj.id === id));
    scroller(bottom);
  };

  const scroller = (position) => window.scrollTo({ top: position, behavior: 'smooth' });

  const clickedAndPhone = clickedProject && isMobile ? true : false;

  return (
    <div className={styles.outerContainer} style={{ marginTop: !isMobile ? '14vh' : '' }}>
      <div style={{ height: '90vh' }}>
        <ProjectCards projects={projects} clicker={projectClicker} />
      </div>
      <div style={{ background: 'transparent' }}>
        {clickedProject && (!isMobile ? <DeskProject project={clickedProject} scrollBackUp={scroller} /> : <PhoneProject project={clickedProject} scrollBackUp={scroller} />)}

      </div>
    </div>
  );
};

export default ProjectPanel;
