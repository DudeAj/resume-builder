import React from 'react';
import styles from './editresume.module.scss';
import { AddCircleOutline, EditOutlined, DeleteOutlined, FileDownloadOutlined } from '@mui/icons-material/';

const EditResume = () => {
    return (
        <div className={styles.EditResume}>
            <div className={styles.newResume}>
                <div className={styles.box}>
                    <div className={styles.boxInner}>
                    </div>
                </div>
                <div className={styles.boxDetails}>
                    <span>Untitle Resume</span>
                    <p><EditOutlined />Edit</p>
                    <p><DeleteOutlined />Delete</p>
                    <p><FileDownloadOutlined />Download</p>

                </div>
            </div>
        </div>
    )
}

export default EditResume