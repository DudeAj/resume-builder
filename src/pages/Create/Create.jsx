import React, { useState } from 'react';
import Progress from '../../components/Progress/Progress';
import Input from '../../components/UI/Input/Input';
import styles from './create.module.scss';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PersonIcon from '@mui/icons-material/Person';
import Button from '../../components/UI/Button/Button';

const Create = () => {

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
                    <p>Personal Details</p>
                    <Progress />
                </div>
                <div className={styles.box}>
                    <div className={styles.basicForm}>
                        <div className={styles.profileForm} {...getRootProps()}>
                            <div className={styles.dropzone}>
                                <PersonIcon fontSize="large" />
                            </div>
                        </div>
                        <div className={styles.info}>
                            <Input placeholder="First Name" name="firstName" error={false} />
                            <Input placeholder="Last Name" error={false} name="lastName" />
                            <Input placeholder="Job Title" name="Jobtitle" error={false} />
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <h2>Contact Details</h2>
                        <div>
                            <Input placeholder="Phone Number" name="firstName" error={false} />
                            <Input placeholder="Email Address" name="firstName" />
                            <Input placeholder="Personal Website" name="firstName" />
                        </div>

                    </div>

                    <div className={styles.contact}>
                        <h2>Location</h2>
                        <div className={styles.flex}>
                            <Input placeholder="City" name="firstName" error={false} />
                            <Input placeholder="Country" name="firstName" />
                        </div>
                    </div>


                </div>
                <div className={styles.buttonHolder}>
                    <Button click={handleClick} text="Continue" />
                </div>
            </div>
        </div>
    )
}

export default Create;