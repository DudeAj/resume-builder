import React, { useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./frontpage.module.scss";
import EditResume from "../../components/EditResume/EditResume";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Footer from "../../components/Footer/Footer";
import history from "../../utils/history";
import { useSelector, useDispatch } from "react-redux";
import { Templates } from "../../Template";
import { setSelectedResume, getResume } from "../../store/reducers/data";
import {remove, ref} from 'firebase/database';
import {db} from '../../firebase';

const Frontpage = () => {
  const { resume } = useSelector((state) => state.data);
  
  const dispatch = useDispatch();

  const editResume = (id) => {
    dispatch(setSelectedResume(id));
    history.push("/personal");
  };

  const deleteResume = async (id) => {
    const user_id = localStorage.getItem("user_id");
    await remove(ref(db, "resume/" + user_id + "/" + id));
    dispatch(getResume());
  };

  const download = (id) => {
    dispatch(setSelectedResume(id));
    history.push("/preview");
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.subContainer}>
        <div className={styles.CreateResume}>
          <h2>Create Resume</h2>
          <div className={styles.newResume}>
            <div className={styles.box}>
              <div
                className={styles.boxInner}
                onClick={() => history.push("/template")}
              >
                <AddCircleOutlineIcon fontSize="large" />
                <p>Create New</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.CreateResume}>
          <h2>My Resume</h2>
          {resume?.map((res, i) => {
            const data = Templates.filter(
              (item) => item.id === res.resumeId
            )[0];

            console.log("data", data)
            if(data) {
              return (
                <EditResume
                  key={i}
                  resume={data}
                  id={res.id}
                  download={download}
                  editResume={editResume}
                  deleteResume={deleteResume}
                />
              );
            }
            else {
              return null;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Frontpage;
