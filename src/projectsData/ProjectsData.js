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
        <div style={{ marginTop: '1rem' }}>
            &nbsp;&nbsp;&nbsp;Harmonode is an Electron-powered development tool that lightens the challenges of endpoint management and visualization. By harnessing the power of ReactFlow, Harmonode empowers users to seamlessly navigate through the web of connections, offering a clear and concise visualization of the trail each route follows through the component tree of an app, from it's initial request(s) in any frontend components, through the server, any middleware, and back again.
        </div>

        <div className={styles.foundingFathersDiv}>A collaborative project with :<br /><br />
            &nbsp;&nbsp;&nbsp;Hamza Chaudhry | <a href='https://github.com/hmz44'>@hmz44</a><br />
            &nbsp;&nbsp;&nbsp;Eric Dalio | <a href='https://github.com/EricDalio'>@EricDalio</a><br />
            &nbsp;&nbsp;&nbsp;Sebastian Sarmiento | <a href='https://github.com/sebastiansarm'>@sebastiansarm</a><br />
            &nbsp;&nbsp;&nbsp;Tim Weidinger | <a href='https://github.com/timweidinger'>@timweidinger</a></div><br />
        <footer className={styles.linksFooter}>
            <div className={styles.homeDiv}><a href="https://www.harmonode.com">Harmonode.com</a></div>
            <div><a href='https://www.linkedin.com/company/harmonode/posts/?feedView=all'><FaLinkedin className={styles.linkedInIcon} /></a></div>
            <div><a href='https://github.com/oslabs-beta/Harmonode'><FaGithub className={styles.gitHubIcon} /></a></div>
        </footer>
    </>);
}


const SymCraftInfo = () => {
    return (
        <div>
            My app generates seating rosters automatically from reading the standard notational syntax associated with each piece. Each roster allows for instant editing onscreen, as well as communication with the players. Players can be emailed or texted by a couple of clicks, they can also communicate directly with the app itself, records of each are stored automatically, and a notifications log updates a manager with any changes. Communication can be accomplished through automated template or by tailored messages. Any necessary data can be found within a few button clicks, and since details are sent automatically, there is no digging through email threads, mistyping, etc...
            Orchestral management is a unique challenge. Each piece of music requires a unique seating roster- wind players often "double", meaning that they play multiple instruments for a single piece, and string players must be rotated in different chairs. Each of these is based on contractual and other requirements, and careful records must be kept for payroll purposes, etc... Also, communication is cumbersome, since it is traditionally accomplished in modes outside of software, like phone, email, and text, all of which add a layer of error prone complexity to an already complex situation. An orchestra that performs and rehearses regularly often requires several full-time staff members simply to manage the behind the scenes complexity.
        
            For all aspects of professional orchestral management, from rehearsal and concert scheduling, to library management,
            automated generating of seating rosters, and communication with players    
        </div>
    );
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
        info: <SymCraftInfo />,

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
