import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Temp from "../../components/Temp/Temp";
import styles from "./template.module.scss";
import { Templates } from "../../Template";
import { setSelectedResume } from "../../store/reducers/data";
import { useDispatch } from "react-redux";
import history from "../../utils/history";

const Template = () => {
  const dispatch = useDispatch();

  const onChange = (resumeId) => {
    dispatch(setSelectedResume(resumeId));
    history.push('/personal')
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.subContainer}>
        <h2>Templates</h2>
        <div className={styles.Templates}>
          {Templates.map((item) => (
            <Temp key={item.id} link={item} click={onChange}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Template;
