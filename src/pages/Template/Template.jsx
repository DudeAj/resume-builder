import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Temp from '../../components/Temp/Temp';
import styles from './template.module.scss';

const Template = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.subContainer}>
                <h2>Templates</h2>
                <div className={styles.Templates}>
                    <Temp />
                    <Temp />
                    <Temp />
                    <Temp />
                    <Temp />
                    <Temp />
                    <Temp />
                    <Temp />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Template