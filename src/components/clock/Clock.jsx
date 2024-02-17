import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
    const [angle, setAngle] = useState(0);
    const [radius, setRadius] = useState(138); // Radius of the circular path
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(-44);
    const duration = 60000; // Duration in milliseconds (30 seconds)

    useEffect(() => {
        const startTime = Date.now();

        const updatePosition = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = elapsedTime / duration;
            const currentAngle = progress * 360; // Angle in degrees
            
            // Calculate new position based on angle and radius
            const newX = radius * Math.cos(currentAngle * Math.PI / 180);
            const newY = radius * Math.sin(currentAngle * Math.PI / 180);

            setAngle(currentAngle);
            setPositionX(newX);
            setPositionY(newY);
            
            if (elapsedTime < duration) {
                requestAnimationFrame(updatePosition);
            }
        };

        updatePosition();

    }, [radius, duration]);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.outerCircle}>
                <div className={styles.movingCircle} style={{ transform: `translate(${positionX}px, ${positionY}px)` }} />
            </div>

            <div className={styles.blackCenter}></div>
        </div>
    );
};

export default Clock;
