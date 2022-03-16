import React from 'react';
import styles from './progress.module.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
    const percentage = 50;
    return (
        <div className={styles.progress}><CircularProgressbar value={percentage} text={`${percentage}%`} />;</div>
    )
}

export default Progress