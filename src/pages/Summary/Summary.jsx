import React, { useState, useEffect } from "react";
import Progress from "../../components/Progress/Progress";
import Input from "../../components/UI/Input/Input";
import styles from "./summary.module.scss";
import Button from "../../components/UI/Button/Button";
import { ref, set, onValue } from "firebase/database";
import { db } from "../../firebase";
import {CircularProgress} from '@mui/material';

const Summary = () => {
  const [summary, setSummary] = useState("");
  const [loading,setLoading]= useState(false);

  const handleClick = async () => {
    setLoading(true);
    const user_id = localStorage.getItem("user_id");
    const postListRef = ref(db, "summary/" + user_id);
    await set(postListRef, {
      value: summary,
    });
    setLoading(false);
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const resumeBuilderRef = ref(db, "summary/" + user_id);
    onValue(resumeBuilderRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSummary(data.value);
      }
    });
  }, []);
  return (
    <div className={styles.Container}>
      <div className={styles.subContainer}>
        <div className={styles.Heading}>
          <p>Summary</p>
          <Progress />
        </div>
        <div className={styles.box}>
          <div className={styles.contact}>
            <Input
              placeholder="Your Professional Summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.buttonHolder}>
          <Button
            click={handleClick}
            text={
              loading ? (
                <CircularProgress size={18} sx={{ color: "#fff" }} />
              ) : (
                "Submit"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
