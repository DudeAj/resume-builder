import React from 'react';
import styles from './temp.module.scss';
import history from '../../utils/history';

const Temp = () => {
    return (
        <div className={styles.Temp} onClick={() => history.push('/create')}>
            <img src="https://www.pinclipart.com/picdir/big/379-3792862_resume-rsum-clipart.png" />
        </div>
    )
}

export default Temp