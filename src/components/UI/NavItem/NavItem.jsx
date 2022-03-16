import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navlinks.scss'
const NavItem = ({ path, title, active }) => {
    return (
        <p className="nav"><NavLink to={path} className='Navlinks'>{title}</NavLink></p>
    )
}

export default NavItem