import React from 'react';
import styles from './editresume.module.scss';
import { EditOutlined, DeleteOutlined, FileDownloadOutlined } from '@mui/icons-material/';

const EditResume = ({resume, editResume, deleteResume, download, id}) => {
    return (
        <div className={styles.EditResume}>
            <div className={styles.newResume}>
                <div className={styles.box}>
                    <div className={styles.boxInner}>
                        <img src={resume?.img} alt={"resume"+ resume?.id}/>
                    </div>
                </div>
                <div className={styles.boxDetails}>
                    <span>{resume?.name}</span>
                    <p onClick={()=>editResume(resume.id)}><EditOutlined />Edit</p>
                    <p onClick={()=> deleteResume(id)}><DeleteOutlined />Delete</p>
                    <p onClick={()=> download(resume.id)}><FileDownloadOutlined/>Download</p>
                </div>
            </div>
        </div>
    )
}

export default EditResume