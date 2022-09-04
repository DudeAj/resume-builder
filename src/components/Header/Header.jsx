import React, { useState } from 'react';
import styles from './header.module.scss';
import { Person, ArrowDropDown } from '@mui/icons-material';
import { getAuth, signOut } from "firebase/auth";
import history from '../../utils/history';

const Header = () => {

    const [show, setShow] = useState(false);

    const logoutUser = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Signout successfully");
            localStorage.removeItem("user_id");
            setShow(false);
        }).catch((error) => {
            
        });
    }

    return (
        <div className={styles.Header}>
            <p onClick={() => history.push('/')} className={styles.title}>Pro<span>Resume</span></p>
            <div className={styles.Profile}>
                <Person />
                <ArrowDropDown onClick={() => setShow(!show)} />
                {show && <div className={styles.Popup}>
                    <p onClick={logoutUser}> Logout</p>
                </div>}
            </div>
        </div >
    )
}

export default Header