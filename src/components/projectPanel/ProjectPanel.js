import Harmonode from './harmonode/Harmonode';
import ScrollDownArrow from '../scrollDownArrow/ScrollDownArrow';

import styles from './ProjectPanel.module.css';

const ProjectPanel = ({ harmonode }) => {
  
  return (
    <div className={styles.outerContainer}>
      <div style={{ height: '90vh' }}>Sym Craft will be here</div>
      <div style={{ height: '90vh' }}>
        <Harmonode harmonode={harmonode} />
      </div>
      <div style={{ height: '90vh', background: 'indigo' }}>maybe finance will be here</div>
      <ScrollDownArrow />
    </div>
  );
};

export default ProjectPanel;
