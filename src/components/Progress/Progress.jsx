import React, { useState, useEffect } from "react";
import styles from "./progress.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ref, set, onValue } from "firebase/database";
import { db } from "../../firebase";
import {setProgress} from '../../store/reducers/data';
import { useDispatch, useSelector } from "react-redux";

const ProgressComponent = () => {
  const [percentage, setPercentage] = useState(0);
  const dispatch = useDispatch();
  const {progress} = useSelector(state=>state.data);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const personalRef = ref(db, "container/" + user_id);
    onValue(personalRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch(setProgress(20))
        
      }
    });
    const experienceRef = ref(db, "experience/" + user_id);
    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch(setProgress(40))
        
      }
    });
    const educationRef = ref(db, "education/" + user_id);
    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch(setProgress(60))
        
      }
    });

    const skillsRef = ref(db, "skills/" + user_id);
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch(setProgress(70))
        
      }
    });

    const languageRef = ref(db, "language/" + user_id);
    onValue(languageRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch(setProgress(80))
        
      }
    });

    const certificateRef = ref(db, "certification/" + user_id);
    onValue(certificateRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch(setProgress(90))
        
      }
    });

    const summaryRef = ref(db, "summary/" + user_id);
    onValue(summaryRef, (snapshot) => {
      const data = snapshot.val();
      
      if (data && data.value) {
        dispatch(setProgress(100))
      }
    });
  }, []);
  return (
    <div className={styles.progress}>
      <CircularProgressbar value={progress} text={`${progress}%`} />;
    </div>
  );
};

export default ProgressComponent;
