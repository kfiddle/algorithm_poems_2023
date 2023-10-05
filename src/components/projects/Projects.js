import { useEffect, useState } from 'react';

import returnNumber from './numbersUtil';
import rosterGenerator from './rosterGenerator/rosterGenerator';

import styles from './Projects.module.css';
import RepliedWorks from './repliedWorks/RepliedWorks';
import isValidAbbv from './rosterGenerator/rosterGenerator';

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

     // 2  2  2  2 — 2  2  0  0 — tmp — str
    // 3[1.2.pic]  3[1.2.Eh]  2  4[1.2.3.cbn] — 4  5[1.2.3.crt1.crt2]  3  1 — tmp+3 — 2hp — str
    // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str
    // 4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str
    // 3[1.2.pic]  2  2  3[1.2.cbn] — 4  2  3  0 — tmp+3 — str
    // 3[1.2.3/pic]  2  2  2 — 4  2  3  1 — tmp+2 — str
    // 3[1.2/pic.3/pic]  3[1.2.Eh]  3[1.2.bcl]  2 — 4  2  3  1 — tmp+2 — 2hp — cel — str
    // 3[1.2.pic]  2  2  2 — 4  4[2tp, 2crt]  3  1 — tmp+3 — hp — str
    // 3  3  3  3 — 8[5-8/Wag tb]  3  3  1 — tmp — str

  const enterComposerWork = (entryType) => (e) => {
    setBadSubmission(false);
    if (entryType === 'composer') setComposer(e.target.value);
    else if (entryType === 'work') setWork(e.target.value);
  };

  const makeRoster = () => {
    // console.log(rosterGenerator('3  3  3  3 — 8[5-8/Wag tb]  3  3  1 — tmp — str'));
    // console.log(rosterGenerator('4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — backstage: 3tp, 4Wag tubas[2ten, 2bass] — tmp+4 — 3hp — cel, pf — str'));
    // console.log(rosterGenerator('4[1.2.3/pic2.pic1]  4[1.2.3.Eh]  4[1.2.3/Ebcl.bcl]  4[1.2.3/cbn2.cbn1] — 4  3  3  1 — tmp+4 — 3hp — cel, pf — str'));
    // console.log(rosterGenerator('3[1.2.pic]  2  2  2 — 4  4[2tp, 2crt]  3  1 — tmp+3 — hp — str'));

    console.log(isValidAbbv('fl'))
  }

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
        <button className={styles.button} onClick={makeRoster}>TEST</button>
      </div>

      {repliedWorks.length > 0 && <RepliedWorks works={repliedWorks} submitWork={submitWork} />}
      {badSubmission && <div>Try another one, nothing was returned for this entry</div>}
    </div>
  );
};

export default Projects;
