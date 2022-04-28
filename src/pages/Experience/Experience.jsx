import React, { useState } from 'react';
import Progress from '../../components/Progress/Progress';
import Input from '../../components/UI/Input/Input';
import styles from './experience.module.scss';
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/Select/Select';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Experience = () => {

    const [show, setShow] = useState(false)
    const [formData, setFormData] = useState({
        firstName: {
            value: "",
            isValid: true,
        }
    })

    const handleClick = () => {
        console.log("its Clicked")
    }

    return (
        <div className={styles.Container}>
            <div className={styles.subContainer}>
                <div className={styles.Heading}>
                    <p>Experience</p>
                    <Progress />
                </div>

                <div className={styles.Addnew} onClick={() => setShow(!show)}>
                    <AddIcon />
                    <p>Add Experience</p>
                </div>

                {
                    show
                        ? <div>
                            <div className={styles.box}>
                                <div className={styles.closeButton}>
                                    <CancelIcon onClick={() => setShow(false)} />
                                </div>

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
                                        <div>-</div>
                                        <Select type="month" />
                                        <Select type="year" />
                                    </div>
                                </div>

                                <div className={styles.checkholder}>
                                    <div className={styles.check}>
                                        <input type="checkbox" name="current" />
                                        <label>Currently Working here</label>
                                    </div>
                                </div>

                                <div className={styles.contact}>
                                    <Input placeholder="Accomplishments" name="accomplishments" />

                                </div>

                            </div>
                            <div className={styles.buttonHolder}>
                                <Button click={handleClick} text="Submit" />
                            </div>
                        </div>
                        : <div>
                            <div className={styles.box}>
                                <div className={styles.inner}>
                                    <div className={styles.information}>
                                        <h2>Frontend Developer</h2>
                                        <p>Google</p>
                                    </div>

                                    <div className={styles.icons}>
                                        <EditOutlinedIcon />
                                        <DeleteOutlineOutlinedIcon />
                                    </div>

                                </div>
                            </div>
                            <div className={styles.buttonHolder}>
                                <Button click={handleClick} text="Continue" />
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Experience;