import React, { useState } from 'react';
import Progress from '../../components/Progress/Progress';
import Input from '../../components/UI/Input/Input';
import styles from './experience.module.scss';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PersonIcon from '@mui/icons-material/Person';
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/Select/Select';

const Experience = () => {

    const [formData, setFormData] = useState({
        firstName: {
            value: "",
            isValid: true,
        }
    })

    const handleClick = () => {
        console.log("its Clicked")
    }

    const onDrop = useCallback(acceptedFiles => {

        console.log(acceptedFiles[0].path)

        let formData = new FormData();

        formData.append("image", acceptedFiles[0]);

    }, [])

    const { getRootProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className={styles.Container}>
            <div className={styles.subContainer}>
                <div className={styles.Heading}>
                    <p>Experience</p>
                    <Progress />
                </div>
                <div className={styles.box}>

                    <div className={styles.contact}>
                        <div>
                            <Input placeholder="Job title" name="jobTitle" error={false} />
                            <Input placeholder="Company or Project" name="companyProject" />
                            <Input placeholder="Personal Website" name="firstName" />
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.flex}>
                            <Select type="month" />
                            <Select type="year" />
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.flex}>
                            <Input placeholder="Accomplishments" name="accomplishments" />
                        </div>
                    </div>

                </div>
                <div className={styles.buttonHolder}>
                    <Button click={handleClick} text="Submit" />
                </div>
            </div>
        </div>
    )
}

export default Experience;