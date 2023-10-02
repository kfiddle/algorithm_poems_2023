import { useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const danielsUrl = 'https://api.daniels-orchestral.com/v3/search';
  const userId = '6434';
  const token = '47702c57767e6e7b';

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch(danielsUrl, {
        method: 'GET',
        headers: {
          composer: 'David Diamond',
          userId,
          token,
        },
      });
      if (response) {
        const jsonified = await response.json();
        console.log(jsonified);
      }
    };

    fetcher();
  }, []);

  return <div className={styles.outerContainer}>Yo Ho Ho it's your mother</div>;
};

export default Projects;
