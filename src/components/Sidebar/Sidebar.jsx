import React from 'react';
import NavItem from '../UI/NavItem/NavItem';
import styles from './sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.OptionContainer}>
                <div className={styles.Option}>
                    <NavItem active={true} path="create" title="Personal Details" />
                    <NavItem path="experience" title="Experience" />
                    <NavItem path="education" title="Education" />
                    <NavItem path="skills" title="Skills" />
                    <NavItem path="languages" title="Languages" />
                    <NavItem path="certification" title="Certificates" />
                    <NavItem path="summary" title="Summary" />
                </div>

            </div>
        </div>
    )
}

export default Sidebar