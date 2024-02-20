import React from 'react';

import { useMediaQuery } from 'react-responsive';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import Wave from '../assets/projectCardImages/Wave.jpg';
import CelloTitleCard from '../assets/projectCardImages/CelloTitleCard.png';
import CoinVerseCard from '../assets/projectCardImages/CoinVerseCard.png';

import harmonodeShot1 from '../assets/harmonode/harmonodeShot1.png';
import harmonodeGIF1 from '../assets/harmonode/harmonodeGIF1.gif';
import harmonodeGIF2 from '../assets/harmonode/harmonodeGIF2.gif';

import Calendar1 from '../assets/symCraft/Calendar1.png';
import library from '../assets/symCraft/library.png';
import LibraryInstEntry1 from '../assets/symCraft/LibraryInstEntry1.png';
import librarySingleInput from '../assets/symCraft/librarySingleInput.png';

import pennies1 from '../assets/pennies/pennies1.png';
import transEntry from '../assets/pennies/transEntry.png';

import styles from './ProjectsData.module.css';
import InfoBox from '../components/projectPanel/InfoBox';

export const projects = [
  {
    id: 1,
    cardImage: Wave,
    infoBox: <InfoBox title={'Harmonode'}>

      <div>
        &nbsp;&nbsp;&nbsp;Managing endpoints, fetch requests, and data flow between the various client-side and backend components of an
        application can be complex, and organizing these connections can quickly turn into a nightmare for a developer.
      </div>
      <div style={{ marginTop: '1rem' }}>
        &nbsp;&nbsp;&nbsp;Harmonode is an Electron-powered development tool which offers a clear visualization of the trail each route follows through the component tree of an app, from it's initial
        request in any frontend components, through the server, any middleware, and back again.
      </div>

      <div className={styles.foundingFathersDiv}>
        A collaborative project with :<br />
        <br />
        &nbsp;&nbsp;&nbsp;Hamza Chaudhry | <a href="https://github.com/hmz44">@hmz44</a>
        <br />
        &nbsp;&nbsp;&nbsp;Eric Dalio | <a href="https://github.com/EricDalio">@EricDalio</a>
        <br />
        &nbsp;&nbsp;&nbsp;Sebastian Sarmiento | <a href="https://github.com/sebastiansarm">@sebastiansarm</a>
        <br />
        &nbsp;&nbsp;&nbsp;Tim Weidinger | <a href="https://github.com/timweidinger">@timweidinger</a>
      </div>
      <br />
      <footer className={styles.linksFooter}>
        <div className={styles.homeDiv}>
          <a href="https://www.harmonode.com">Harmonode.com</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/harmonode/posts/?feedView=all">
            <FaLinkedin className={styles.linkedInIcon} />
          </a>
        </div>
        <div>
          <a href="https://github.com/oslabs-beta/Harmonode">
            <FaGithub className={styles.gitHubIcon} />
          </a>
        </div>
      </footer>

    </InfoBox>,

    slides: [
      { id: 1, src: harmonodeShot1, alt: 'welcomeView' },
      { id: 2, src: harmonodeGIF1, alt: 'harmonodeGIF1' },
      { id: 3, src: harmonodeGIF2, alt: 'harmonodeGIF2' },
    ],
  },
  {
    id: 2,
    cardImage: CelloTitleCard,
    infoBox: <InfoBox title={'SymCraft'}>
      <div style={{ marginTop: '1rem' }}>
        &nbsp;&nbsp;&nbsp;Professional orchestral management is a unique challenge. A symphonic performance might take place over the course
        of several nights on a given weekend, each with 100+ players onstage, and sometimes even with different players in different chairs.
        Instrumental rosters are determined separately by each piece of music, players must be seated and
        often rotated, and they are very often hired on a substitute basis.
      </div>
      <div style={{ marginTop: '1rem' }}>
        &nbsp;&nbsp;&nbsp;This app automates as much of this process as possible, from generating rosters to communicating
        details to a player’s portal, available to the musicians themselves.
      </div>
    </InfoBox>,

    slides: [
      { id: 1, src: library, alt: 'library view' },
      { id: 2, src: librarySingleInput, alt: 'vertical library view ' },
      { id: 3, src: Calendar1, alt: 'add performance view' },
      { id: 4, src: LibraryInstEntry1, alt: 'add instrumentation view' },
    ],
  },
  {
    id: 3,
    cardImage: CoinVerseCard,
    infoBox: <InfoBox title={'coinVerse'}>
      <div style={{ marginTop: '1rem' }}>
        &nbsp;&nbsp;&nbsp;A cliché I know... every software developer makes a personal financial tracking app, and so this is mine. I've never
        liked how the usual software packages do certain things, like associate categories with expenses, or make attaching things to a
        calendar difficult, so this does everything as I need it done...
      </div>
      <div style={{ marginTop: '1rem' }}>
        &nbsp;&nbsp;&nbsp;Built in React with Node.js and mongoDB.
      </div>
    </InfoBox>,

    slides: [
      { id: 1, src: pennies1, alt: 'finance account ledger' },
      { id: 2, src: transEntry, alt: 'finance transaction entry view' },
    ],
  },
];
