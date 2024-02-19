import React, { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";

import styles from "./Clock.module.css";

const Clock = () => {
    const [position, setPosition] = useState({ x: 0, y: -44 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        const sixtySeconds = 60000;
        const moveClockwise = (startTime) => {
            const currentAngle = ((Date.now() - startTime) / sixtySeconds) * 360; // Angle in degrees

            const newX = Math.cos((currentAngle * Math.PI) / 180) * 30;
            const newY = Math.sin((currentAngle * Math.PI) / 180) * 30;
            setPosition({ x: newX, y: newY });

            if (Date.now() - startTime < sixtySeconds) {
                requestAnimationFrame(() => moveClockwise(startTime)); // Pass startTime parameter
            } else {
                setPosition({ x: 0, y: -44 });
                moveClockwise(Date.now());
            }
        };

        moveClockwise(Date.now());
    }, []);

    const currentDate = new Date();
    let hour = currentDate.getHours() % 12 || 12; // Convert to 12-hour format
    let minute = currentDate.getMinutes();
    let hourRotation = hour * 30 + minute / 2 - 90; // Hour hand rotation in degrees
    let minuteRotation = minute * 6 - 90; // Minute hand rotation in degrees

    return (
        <div className={styles.outerContainer} style={{ bottom: !isMobile ? "0" : "" }}>
            <div className={styles.outerCircle}>
                <div className={styles.movingCircle} style={{ transform: `translate(${position.x}%, ${position.y}%)` }} />
            </div>

            <div className={styles.blackCenter}>
                <div className={styles.hourHand} style={{ transform: `translate(45%, 0%) rotate(${hourRotation}deg)` }}></div>
                <div className={styles.minuteHand} style={{ transform: `translate(45%, 0%) rotate(${minuteRotation}deg)` }}></div>
            </div>
        </div>
    );
};

export default Clock;
