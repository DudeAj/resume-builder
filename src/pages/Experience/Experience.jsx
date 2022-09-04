import React, { useState, useEffect } from "react";
import Progress from "../../components/Progress/Progress";
import Input from "../../components/UI/Input/Input";
import styles from "./experience.module.scss";
import Button from "../../components/UI/Button/Button";
import Select from "../../components/UI/Select/Select";
import CancelIcon from "@mui/icons-material/Cancel";
import { CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Card from "../../components/Card/Card";
import { ref, set, onValue, remove, push } from "firebase/database";
import { db } from "../../firebase";
import history from "../../utils/history";

const Experience = () => {
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyProject: "",
    website: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    accomplishments: "",
  });

  const [current, setCurrent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    setLoading(true);
    const user_id = localStorage.getItem("user_id");
    const postListRef = ref(db, "experience/" + user_id);
    const newPostRef = push(postListRef);
    let latestdata = {...formData};
    if(current) {
      latestdata = {...formData, endMonth:'', endYear:''}
    }

    await set(newPostRef, {
      ...latestdata,
    });
    setExperience([...experience, formData]);
    setShow(false);
    setLoading(false);
  };

  const handleSubmit = async () => {};

  const editData = (id) => {
    setEditing(true);
    const data = experience.filter((e, i) => i === id);
    setShow(true);
    setFormData({ ...data[0] });
    setSelectedId(id);
  };
  const deleteData = async (index) => {
    const data = experience.filter((e, i) => i !== index);
    const user_id = localStorage.getItem("user_id");
    const [{ id }] = data;
    await remove(ref(db, "experience/" + user_id + "/" + id));
  };

  const handleEditSave = async () => {
    setLoading(true);

    const user_id = localStorage.getItem("user_id");
    const { id, ...rest } = formData;

    const postListRef = ref(db, "experience/" + user_id + "/" + id);
    await set(postListRef, {
      ...rest,
    });
    setShow(false);
    setEditing(false);
    setLoading(false);
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const resumeBuilderRef = ref(db, "experience/" + user_id);
    onValue(resumeBuilderRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const response = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setExperience(response);
      }
    });
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.subContainer}>
        <div className={styles.Heading}>
          <p>Experience</p>
          <Progress />
        </div>

        <div className={styles.Addnew} onClick={() => setShow(!show)}>
          <AddIcon />
          <p>Add Experience</p>
        </div>

        {show ? (
          <div>
            <div className={styles.box}>
              <div className={styles.closeButton}>
                <CancelIcon onClick={() => setShow(false)} />
              </div>
              <div className={styles.contact}>
                <div>
                  <Input
                    placeholder="Job title"
                    name="jobTitle"
                    error={false}
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />

                  <Input
                    placeholder="Company or Project"
                    name="companyProject"
                    value={formData.companyProject}
                    onChange={handleChange}
                  />

                  <Input
                    placeholder="Personal Website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.contact}>
                <div className={styles.flex}>
                  <Select
                    type="month"
                    name="startMonth"
                    value={formData.startMonth}
                    onChange={handleChange}
                  />

                  <Select
                    type="year"
                    name="startYear"
                    value={formData.startYear}
                    onChange={handleChange}
                  />

                  <div>-</div>

                  <Select
                    type="month"
                    name="endMonth"
                    value={formData.endMonth}
                    onChange={handleChange}
                  />

                  <Select
                    type="year"
                    name="endYear"
                    value={formData.endYear}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.checkholder}>
                <div className={styles.check}>
                  <input
                    type="checkbox"
                    name="current"
                    checked={current}
                    onChange={(e) => setCurrent(e.target.checked)}
                  />
                  <label>Currently Working here</label>
                </div>
              </div>

              <div className={styles.contact}>
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
            {experience.map((item, id) => {
              return (
                <Card
                  key={id}
                  title={item.jobTitle}
                  subTitle={item.companyProject}
                  id={id}
                  editData={editData}
                  deleteData={deleteData}
                />
              );
            })}
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
