import ScrollDownArrow from '../scrollDownArrow/ScrollDownArrow';

import styles from './ProjectPanel.module.css';

const ProjectPanel = () => {
  return (
    <div className={styles.outerContainer}>
      <div style={{height: '90vh'}}>Sym Craft will be here</div>
      <div style={{height: '90vh', background: 'green'}}>Harmonode will be here</div>
      <div style={{height: '90vh', background: 'indigo'}}>maybe finance will be here</div>
      <ScrollDownArrow />
    </div>
  );
};

export default ProjectPanel;
