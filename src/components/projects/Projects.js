import { useEffect, useState } from 'react';

import returnNumber from './numbersUtil';

import styles from './Projects.module.css';
import RepliedWorks from './repliedWorks/RepliedWorks';

const Projects = () => {
  const [repliedWorks, setRepliedWorks] = useState([]);
  const [badSubmission, setBadSubmission] = useState(false)

  const localHost = 'http://localhost:3002/';
  const composerAndWorkUrl = localHost + 'composer_and_work_by_name';

  const [composer, setComposer] = useState('');
  const [work, setWork] = useState('');

  function containsSymphony(input) {
    const regex = /symphony/i; // "i" flag makes it case-insensitive
    return regex.test(input);
  }

  const sendItUp = async () => {
    const objToSend = { composer: composer };

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
      console.log(jsonified)
      if (jsonified.length === 0) setBadSubmission(true)
      setRepliedWorks(jsonified);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.formDiv}>
        <input className={styles.control} placeholder="composer" onChange={(e) => setComposer(e.target.value)} />
        <input className={styles.control} placeholder="work" onChange={(e) => setWork(e.target.value)} />
        <button className={styles.button} onClick={sendItUp}>
          Submit
        </button>
      </div>

      {repliedWorks.length > 0 && <RepliedWorks works={repliedWorks} />}
      {badSubmission && <div>Try another one, nothing was returned for this entry</div>}
    </div>
  );
};

export default Projects;
