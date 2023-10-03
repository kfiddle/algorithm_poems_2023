import { useEffect, useState } from 'react';

import returnNumber from './numbersUtil';

import styles from './Projects.module.css';
import RepliedWorks from './repliedWorks/RepliedWorks';

const Projects = () => {
  const [repliedWorks, setRepliedWorks] = useState([]);
  const [badSubmission, setBadSubmission] = useState(false);
  const [chairs, setChairs] = useState([]);

  const localHost = 'http://localhost:3002/';
  const composerAndWorkUrl = localHost + 'daniels_query/by_composer_work';
  const workDetailsUrl = localHost + 'daniels_query/work_by_id';

  const [composer, setComposer] = useState('');
  const [work, setWork] = useState('');

  function containsSymphony(input) {
    const regex = /symphony/i; // "i" flag makes it case-insensitive
    return regex.test(input);
  }

  const enterComposerWork = (entryType) => (e) => {
    setBadSubmission(false);
    if (entryType === 'composer') setComposer(e.target.value);
    else if (entryType === 'work') setWork(e.target.value);
  };

  const submitComposerAndWork = async () => {
    const objToSend = { composer: composer };
    console.log(composer, work);

    if (containsSymphony(work)) {
      objToSend.work = `Symphony No.${returnNumber(work)}`;
    } else {
      objToSend.work = work;
    }
    const response = await fetch(composerAndWorkUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objToSend),
    });

    if (response.ok) {
      let jsonified = await response.json();
      console.log(jsonified);
      if (jsonified.length === 0) setBadSubmission(true);
      setRepliedWorks(jsonified);
    }
  };

  const submitWork = async (workId) => {
    const reply = await fetch(workDetailsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: workId }),
    });
    if (reply.ok) {
      const workDetails = await reply.json();
      console.log(workDetails.formula)
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.formDiv}>
        <input className={styles.control} placeholder="composer" onChange={enterComposerWork('composer')} />
        <input className={styles.control} placeholder="work" onChange={enterComposerWork('work')} />
        <button className={styles.button} onClick={submitComposerAndWork}>
          Submit
        </button>
      </div>

      {repliedWorks.length > 0 && <RepliedWorks works={repliedWorks} submitWork={submitWork} />}
      {badSubmission && <div>Try another one, nothing was returned for this entry</div>}
    </div>
  );
};

export default Projects;
