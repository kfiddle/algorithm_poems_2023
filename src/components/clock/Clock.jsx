import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(-44);
    const duration = 60000;

    useEffect(() => {
        const moveClockwise = (startTime) => {
            const currentAngle = ((Date.now() - startTime) / duration) * 360; // Angle in degrees

            const newX = Math.cos((currentAngle * Math.PI) / 180) * 30;
            const newY = Math.sin((currentAngle * Math.PI) / 180) * 30;

            setPositionX(newX);
            setPositionY(newY);

            if (Date.now() - startTime < duration) {
                requestAnimationFrame(() => moveClockwise(startTime)); // Pass startTime parameter
            } else {
                setPositionX(0);
                setPositionY(-44);
                moveClockwise(Date.now());
            }
        };

        moveClockwise(Date.now());

    }, [duration]);

    const currentDate = new Date();
    let hour = currentDate.getHours() % 12 || 12; // Convert to 12-hour format
    let minute = currentDate.getMinutes();
    let hourRotation = ((hour * 30) + (minute / 2) - 90); // Hour hand rotation in degrees
    let minuteRotation = (minute * 6) - 90; // Minute hand rotation in degrees

    return (
        <div className={styles.outerContainer}>
            <div className={styles.outerCircle}>
                <div className={styles.movingCircle} style={{ transform: `translate(${positionX}%, ${positionY}%)` }} />
            </div>

            <div className={styles.blackCenter}>
                <div className={styles.hourHand} style={{ transform: `translate(45%, 0%) rotate(${hourRotation}deg)` }}></div>
                <div className={styles.minuteHand} style={{ transform: `translate(45%, 0%) rotate(${minuteRotation}deg)` }}></div>
            </div>
        </div>
    );
};

export default Clock;
