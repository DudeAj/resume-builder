import React, { useState } from 'react';
import Progress from '../../components/Progress/Progress';
import Input from '../../components/UI/Input/Input';
import styles from './certification.module.scss';
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/Select/Select';


const Certification = () => {

  

    const handleClick = () => {
        console.log("its Clicked")
    }

    return (
        <div className={styles.Container}>
            <div className={styles.subContainer}>
                <div className={styles.Heading}>
                    <p>Certification</p>
                    <Progress />
                </div>
                <div className={styles.box}>

                    <div className={styles.contact}>
                        <Input placeholder="Certification Name"/>
                    </div>
                </div>
                <div className={styles.buttonHolder}>
                    <Button click={handleClick} text="Submit" />
                </div>
            </div>
        </div>
    )
}

export default Certification;