import React, { useState } from 'react';
import Progress from '../../components/Progress/Progress';
import Input from '../../components/UI/Input/Input';
import styles from './preview.module.scss';
import Button from '../../components/UI/Button/Button';



const Summary = () => {

    const handleClick = () => {
        console.log("its Clicked")
    }

    return (
        <div className={styles.Container}>
            <div className={styles.subContainer}>
               <div className={styles.preview}>Resume Preview</div>
            </div>
        </div>
    )
}

export default Summary;