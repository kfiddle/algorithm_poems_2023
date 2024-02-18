import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(-44);
    const duration = 60000; 

    useEffect(() => {
        const moveClockwise = (startTime) => {
            const currentAngle = ((Date.now() - startTime) / duration) * 360; // Angle in degrees

            // Calculate new position based on angle and radius
            const newX = Math.cos((currentAngle * Math.PI) / 180) * 30;
            const newY = Math.sin((currentAngle * Math.PI) / 180) * 30;

            // setAngle(currentAngle);
            setPositionX(newX);
            setPositionY(newY);

            if (Date.now() - startTime < duration) {
                requestAnimationFrame(() => moveClockwise(startTime)); // Pass startTime parameter
            } else {
                // setAngle(0);
                setPositionX(0);
                setPositionY(-44);
                moveClockwise(Date.now());
            }
        };

        moveClockwise(Date.now());
    }, [duration]);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.outerCircle}>
                <div className={styles.movingCircle} style={{ transform: `translate(${positionX}%, ${positionY}%)` }} />
            </div>

            <div className={styles.blackCenter}>
                <div className={styles.hourHand} style={{ transform: `translate(45%, 0%) rotate(${320}deg)` }}></div>
                <div className={styles.minuteHand} style={{ transform: `translate(45%, 0%) rotate(${100}deg)` }}></div>
            </div>
        </div>
    );
};

export default Clock;
