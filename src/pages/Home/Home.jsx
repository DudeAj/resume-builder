import React from 'react';
import Header from '../../components/Header/Header';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Home = () => {


    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.subContainer}>
                <div className={styles.createResume}>
                    <div className={styles.info}>
                        <h2>Make your Resume</h2>
                        <p className={styles.details}>Build youresume on our website and get a free analysis report your our AI algorithm</p>
                        <Link to='/front' className={styles.button}>Continue <ArrowForwardIcon className={styles.icon} fontSize='small' /></Link>
                    </div>
                    <div className={styles.template}>
                        <img src="https://www.pinclipart.com/picdir/big/379-3792862_resume-rsum-clipart.png" />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home