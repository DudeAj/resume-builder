import React, { useState, useEffect } from "react";
import styles from "./progress.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ref, set, onValue } from "firebase/database";
import { db } from "../../firebase";

const Progress = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const personalRef = ref(db, "container/" + user_id);
    onValue(personalRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPercentage(20)
        console.log("data in progress", data)
      }
    });
    const experienceRef = ref(db, "experience/" + user_id);
    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPercentage(40)
      }
    });
    const educationRef = ref(db, "education/" + user_id);
    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPercentage(60)
      }
    });

    const skillsRef = ref(db, "skills/" + user_id);
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPercentage(70)
      }
    });

    const languageRef = ref(db, "language/" + user_id);
    onValue(languageRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPercentage(80)
      }
    });

    const certificateRef = ref(db, "certification/" + user_id);
    onValue(certificateRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPercentage(90)
      }
    });

    const summaryRef = ref(db, "summary/" + user_id);
    onValue(summaryRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPercentage(100)
      }
    });
  }, []);
  return (
    <div className={styles.progress}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  );
};

export default Progress;
