import React, { useState, useEffect } from "react";
import Progress from "../../components/Progress/Progress";
import Input from "../../components/UI/Input/Input";
import styles from "./language.module.scss";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import PersonIcon from "@mui/icons-material/Person";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";
import Chip from "@mui/material/Chip";
import { ref, set, onValue, remove, push } from "firebase/database";
import { db } from "../../firebase";
import history from "../../utils/history";

const Language = () => {
  const [items, setItems] = useState([]);
  const [language, setLanguage] = useState("");

  const handleClick = () => {
    history.push("/certification")
  };

  const handleDelete = async (id) => {
    const user_id = localStorage.getItem("user_id");
    await remove(ref(db, "language/" + user_id + "/" + id));
  };

  const handleTag = async (event) => {
    event.preventDefault();
    const user_id = localStorage.getItem("user_id");
    const postListRef = ref(db, "language/" + user_id);
    const newPostRef = push(postListRef);
    await set(newPostRef, {
      value: language,
    });
    setLanguage("");
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const resumeBuilderRef = ref(db, "language/" + user_id);
    onValue(resumeBuilderRef, (snapshot) => {
      const data = snapshot.val();
     
        const response = data ? Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        })) : [];
        setItems(response);
      
    });
  }, []);

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
              {items.map((item, index) => (
                <Chip
                  key={index}
                  label={item.value}
                  className={styles.Chip}
                  onDelete={() => handleDelete(item.id)}
                />
              ))}
              <input
                type="text"
                placeholder={
                  items.length < 1 ? "Languages (E.g. Hindi, English)" : ""
                }
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className={styles.buttonHolder}>
          <Button click={handleClick} text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Language;
