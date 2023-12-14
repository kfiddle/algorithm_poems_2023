import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import CelloTitleCard from '../assets/projectCardImages/CelloTitleCard.png';
import HarmonodeTitleCard from '../assets/projectCardImages/HarmonodeTitleCard.png';

import harmonodeShot1 from '../assets/harmonode/harmonodeShot1.png';
import harmonodeGIF1 from '../assets/harmonode/harmonodeGIF1.gif';
import harmonodeGIF2 from '../assets/harmonode/harmonodeGIF2.gif';

import addGigCalendar from '../assets/symCraft/addGigCalendar.png';
import library from '../assets/symCraft/library.png';
import libraryInstEntry from '../assets/symCraft/libraryInstEntry.png';

import pennies1 from '../assets/pennies/pennies1.png';
import transEntry from '../assets/pennies/transEntry.png';

import styles from './ProjectsData.module.css';

const HarmonodeInfo = () => {
    return (<>
    <div className={styles.titleHeader}>Harmonode</div>
        <div>
            &nbsp;&nbsp;&nbsp;Managing endpoints, fetch requests, and data flow between the various client-side and backend components of an application can be complex, and organizing these connections can quickly turn into a nightmare for a developer.
        </div>
        <div style={{ marginTop: '2rem' }}>
            &nbsp;&nbsp;&nbsp;Harmonode is an Electron-powered development tool that lightens the challenges of endpoint management and visualization. By harnessing the power of ReactFlow, Harmonode empowers users to seamlessly navigate through the web of connections, offering a clear and concise visualization of the trail each route follows through the component tree of an app, from it's initial request(s) in any frontend components, through the server, any middleware, and back again.
        </div>
        <div style={{marginTop: '2rem'}}>&nbsp;&nbsp;&nbsp; <a href="https://www.harmonode.com">Harmonode.com</a></div>
        <div><FaLinkedin className={styles.linkedInIcon}/></div>
        <div><FaGithub className={styles.gitHubIcon}/></div>
        <div><AiFillHome className={styles.gitHubIcon}/></div>
    </>);
}


const SymCraftInfo = () => {
    return (<></>);
}

const coinInfo = () => {
    return <></>
}


export const projects = [
    {
        id: 1,
        title: 'Harmonode',
        cardImage: HarmonodeTitleCard,
        info: <HarmonodeInfo />,

        slides: [
            { id: 1, src: harmonodeShot1, alt: 'welcomeView' },
            { id: 2, src: harmonodeGIF1, alt: 'harmonodeGIF1' },
            { id: 3, src: harmonodeGIF2, alt: 'harmonodeGIF2' },
        ],
    },
    {
        id: 2,
        title: 'SymCraft',
        cardImage: CelloTitleCard,
        info: 'lots of text lots of text lots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of text lots of text lots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of text',

        slides: [
            { id: 1, src: library, alt: 'library view' },
            { id: 2, src: addGigCalendar, alt: 'add performance view' },
            { id: 3, src: libraryInstEntry, alt: 'add instrumentation view' },
        ],
    },
    {
        id: 3,
        title: 'OtherProject',
        cardImage: CelloTitleCard,
        info: 'lots of text lots of text lots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of text lots of text lots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of textlots of text',

        slides: [
            { id: 1, src: pennies1, alt: 'finance account ledger' },
            { id: 2, src: transEntry, alt: 'finance transaction entry view' },
            // { id: 3, src: harmonodeGIF2, alt: 'harmonodeGIF2' },
        ],
    },

];
