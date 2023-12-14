import RepliedWork from './repliedWork/RepliedWork';

import styles from './RepliedWorks.module.css';

const RepliedWorks = ({ works, submitWork }) => {
  const displayWorks = works.map((work) => <RepliedWork key={work.id} work={work} submitWork={submitWork} />);
  return <div>{displayWorks}</div>;
};

export default RepliedWorks;
