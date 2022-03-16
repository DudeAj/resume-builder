import React from 'react';
import Header from '../../components/Header/Header';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './frontpage.module.scss';
import EditResume from '../../components/EditResume/EditResume';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Footer from '../../components/Footer/Footer';
import history from '../../utils/history';

const Frontpage = () => {


    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.subContainer}>
                <div className={styles.CreateResume}>
                    <h2>Create Resume</h2>
                    <div className={styles.newResume}>
                        <div className={styles.box}>
                            <div className={styles.boxInner} onClick={() => history.push('/template')}>
                                <AddCircleOutlineIcon fontSize='large' />
                                <p>Create New</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.CreateResume}>
                    <h2>My Resume</h2>
                    <EditResume />
                    <EditResume />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Frontpage;