import React, { useEffect, useState } from "react";
import Progress from "../../components/Progress/Progress";
import Input from "../../components/UI/Input/Input";
import styles from "./education.module.scss";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import Card from "../../components/Card/Card";
import { ref, set, onValue, remove, push } from "firebase/database";
import { db } from "../../firebase";
import { CircularProgress } from "@mui/material";
import history from "../../utils/history";

const Experience = () => {
  const [show, setShow] = useState(false);

  const [editing, setEditing] = useState(false);

  const [loading, setLoading] = useState(false);

  const [education, setEducation] = useState([]);

  const [formData, setFormData] = useState({
    university: "",
    degree: "",
    year: "2003",
    field: "",
    accomplishments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    setLoading(true);
    const user_id = localStorage.getItem("user_id");
    try {
      const postListRef = ref(db, "education/" + user_id);
      const newPostRef = push(postListRef);
      await set(newPostRef, {
        ...formData,
      });
      setEducation([...education, formData]);
      setShow(false);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    history.push('/skills')
  };

  const editData = (id) => {
    setEditing(true);
    
    const data = education.filter((e, i) => i === id);
    setShow(true);
    setFormData({ ...data[0] });
  };

  const deleteData = async (index) => {
    const data = education.filter((e, i) => i !== index);
    const user_id = localStorage.getItem("user_id");
    const [{id}] = data;
    await remove(ref(db, "education/" + user_id + "/" + id));
  };

  const handleEditSave = async () => {
    setLoading(true);
    const user_id = localStorage.getItem("user_id");
    const { id, ...rest } = formData;
    const postListRef = ref(db, "education/" + user_id + "/" + id);
    await set(postListRef, {
      ...rest,
    });
    setShow(false);
    setEditing(false);
    setLoading(false);
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const resumeBuilderRef = ref(db, "education/" + user_id);
    onValue(resumeBuilderRef, async (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const response = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setEducation(response);
      }
    });
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.subContainer}>
        <div className={styles.Heading}>
          <p>Education</p>
          <Progress />
        </div>

        <div className={styles.Addnew} onClick={() => setShow(!show)}>
          <AddIcon />
          <p>Add Education</p>
        </div>

        {show ? (
          <div>
            <div className={styles.box}>
              <div className={styles.closeButton}>
                <CancelIcon onClick={() => setShow(false)} />
              </div>

              <div className={styles.contact}>
                <Input
                  placeholder="University/School"
                  name="university"
                  error={false}
                  value={formData.university}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Degree"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                />
                <div className={styles.flex}>
                  <Select
                    type="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                  />
                </div>
                <Input
                  placeholder="Field of Study"
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Accomplishments"
                  name="accomplishments"
                  value={formData.accomplishments}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.buttonHolder}>
              <Button
                click={editing ? handleEditSave : handleSave}
                text={
                  loading ? (
                    <CircularProgress size={18} sx={{ color: "#fff" }} />
                  ) : editing ? (
                    "Update"
                  ) : (
                    "Submit"
                  )
                }
              />
            </div>
          </div>
        ) : (
          <div>
            {education.map((item, id) => (
              <Card
                key={id}
                title={item.university}
                subTitle={item.degree}
                id={id}
                editData={editData}
                deleteData={deleteData}
              />
            ))}
            <div className={styles.buttonHolder}>
              <Button click={handleSubmit} text="Continue" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
