import React, { useState } from 'react';
import Progress from '../../components/Progress/Progress';
import Input from '../../components/UI/Input/Input';
import styles from './language.module.scss';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PersonIcon from '@mui/icons-material/Person';
import Button from '../../components/UI/Button/Button';
import Select from '../../components/UI/Select/Select';
import Chip from '@mui/material/Chip';

const Language = () => {

   const [items,setItems] = useState([]);
   const [skilltag,setSkillTag] = useState("");
   
    const handleClick = () => {
        console.log("its Clicked")
    }

    const handleDelete = (name) => {
        const newItems = items.filter(item => item !== name);
        setItems(newItems);
    }

    const handleTag =(event) => {
        event.preventDefault();
        setItems([...items,skilltag]);
        setSkillTag("");
    }

    return (
        <div className={styles.Container}>
            <div className={styles.subContainer}>
                <div className={styles.Heading}>
                    <p>Languages</p>
                    <Progress />
                </div>
                <div className={styles.box}>

                    <div className={styles.contact}>
                        
                        <form className={styles.inputArea} onSubmit={handleTag}>
                            {items.map((item,index) => <Chip key={index} label={item} className={styles.Chip} onDelete={()=>handleDelete(item)}/>)}
                            <input type="text" placeholder={items.length<1 && 'Languages (E.g. Hindi, English)'} value={skilltag} onChange={(e)=> setSkillTag(e.target.value)} />
                        </form>
                    </div>
                </div>
                <div className={styles.buttonHolder}>
                    <Button click={handleClick} text="Submit" />
                </div>
            </div>
        </div>
    )
}

export default Language;