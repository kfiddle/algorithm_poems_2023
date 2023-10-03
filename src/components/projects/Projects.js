import { useEffect, useState } from 'react';

import returnNumber from './numbersUtil';

import styles from './Projects.module.css';

const Projects = () => {
  const danielsUrl = 'https://api.daniels-orchestral.com/v3/search';
  const userId = '6434';
  const token = '47702c57767e6e7b';

  const localHost = 'http://localhost:3002/';
  const composerAndWorkUrl = localHost + 'composer_and_work_by_name';

  const [composer, setComposer] = useState('');
  const [work, setWork] = useState('');

  useEffect(() => {
    // const fetcher = async () => {
    //   const response = await fetch(danielsUrl, {
    //     method: 'GET',
    //     headers: {
    //       composer: 'David Diamond',
    //       userId,
    //       token,
    //     },
    //   });
    //   if (response) {
    //     const jsonified = await response.json();
    //     console.log(jsonified);
    //   }
    // };

    const fetcher = async () => {
      const response = await fetch('http://localhost:3002/testfetch');
      if (response) {
        const jsonified = await response.json();
        console.log(jsonified);
      }
    };

    // fetcher();
  }, []);

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
      console.log(jsonified);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <input placeholder="composer" onChange={(e) => setComposer(e.target.value)} />
      <input placeholder="work" onChange={(e) => setWork(e.target.value)} />
      <button onClick={sendItUp}>SUBMIT</button>
    </div>
  );
};

export default Projects;
