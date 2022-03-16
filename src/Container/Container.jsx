import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './container.module.scss';
const Container = ({ children }) => {
    return (
        <div className={styles.Container}>
            <Header />
            <div className={styles.subContainer}>
                <Sidebar />
                <div className={styles.content}>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Container;