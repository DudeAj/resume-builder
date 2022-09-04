import React from 'react';
import NavItem from '../UI/NavItem/NavItem';
import styles from './sidebar.module.scss';
import { Visibility } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {

    const history = useHistory();

    const [show, setShow] = React.useState(false)
    return (
        <div className={styles.sidebar}>
            <div className={styles.OptionContainer}>
                <div className={styles.Option}>
                    <NavItem active={true} path="personal" title="Personal Details" />
                    <NavItem path="experience" title="Experience" />
                    <NavItem path="education" title="Education" />
                    <NavItem path="skills" title="Skills" />
                    <NavItem path="languages" title="Languages" />
                    <NavItem path="certification" title="Certificates" />
                    <NavItem path="summary" title="Summary" />
                    <NavItem path="preview" title="Preview" />
                    {show &&
                        <div className={styles.CardOuter} onClick={()=> history.push("/preview")}>
                            <div className={styles.CardInner}>
                                <Visibility className={styles.Icon} color="primary" />
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default Sidebar