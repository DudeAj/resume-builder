import React, { useState, useEffect } from "react";
import Progress from "../../components/Progress/Progress";
import Input from "../../components/UI/Input/Input";
import styles from "./certification.module.scss";
import Button from "../../components/UI/Button/Button";
import {CircularProgress} from '@mui/material';
import { ref, set, onValue } from "firebase/database";
import { db } from "../../firebase";

const Certification = () => {
  const [certification, setCertification] = useState("");
  const [loading,setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const user_id = localStorage.getItem("user_id");
    const postListRef = ref(db, "certification/" + user_id);
    const response = await set(postListRef, {
      value: certification,
    });
    console.log("its Clicked");
    setLoading(false);
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const resumeBuilderRef = ref(db, "certification/" + user_id);
    onValue(resumeBuilderRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCertification(data.value);
      }
    });
  }, []);
  return (
    <div className={styles.Container}>
      <div className={styles.subContainer}>
        <div className={styles.Heading}>
          <p>Certification</p>
          <Progress />
        </div>
        <div className={styles.box}>
          <div className={styles.contact}>
            <Input
              placeholder="Certification Name"
              value={certification}
              onChange={(e) => setCertification(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.buttonHolder}>
          <Button click={handleClick} text={loading ? <CircularProgress size={18} sx={{color:"#fff"}}/> :  "Submit"} />
        </div>
      </div>
    </div>
  );
};

export default Certification;
