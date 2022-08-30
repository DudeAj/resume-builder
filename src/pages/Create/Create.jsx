import React, { useEffect, useState } from "react";
import Progress from "../../components/Progress/Progress";
import Input from "../../components/UI/Input/Input";
import styles from "./create.module.scss";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import PersonIcon from "@mui/icons-material/Person";
import Button from "../../components/UI/Button/Button";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { ref, set, onValue, remove } from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../../firebase";
import history from "../../utils/history";

const Create = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: "",
    email: "",
    website: "",
    city: "",
    country: "",
  });
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateForm = () => {
    let formdata = new FormData();
    Object.keys(formData).map((key) => {
      formdata.append(key, formData[key]);
    });
    formdata.append("photo", file);
    return formdata;
  };

  const handleClick = async () => {
    setLoading(true)
    const data = generateForm();
    const user_id = localStorage.getItem("user_id");
    const fileName = file.name;
    try {
      const storageReference = storageRef(storage, file.name);
      const uploadTask = await uploadBytes(storageReference, file);

      const response = await set(
        ref(db, "container/" + user_id + "/personal"),
        { ...formData, profile: fileName }
      );
      setLoading(false);
      console.log("repsonse", response);
      console.log("uploadTask", uploadTask);
      
      history.push("/experience");
    } catch (err) {
      console.log("Error ", err);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    setFile(acceptedFiles[0]);
    const picture = URL.createObjectURL(acceptedFiles[0]);
    setPhoto(picture);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { getRootProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const resumeBuilderRef = ref(db, "container/" + user_id + "/personal");
    onValue(resumeBuilderRef, async (snapshot) => {
      const { profile, ...data } = snapshot.val();
      if (data) {
        setFormData(data);
        const imageURL = await getDownloadURL(storageRef(storage, profile));
        setPhoto(imageURL);
      }
    });
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.subContainer}>
        <div className={styles.Heading}>
          <p>Personal Details</p>
          <Progress />
        </div>
        <div className={styles.box}>
          <div className={styles.basicForm}>
            <div className={styles.profileForm} {...getRootProps()}>
              <div className={styles.dropzone}>
                {photo ? (
                  <img
                    src={photo}
                    alt="person"
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  <PersonIcon fontSize="large" />
                )}
              </div>
            </div>
            <div className={styles.info}>
              <Input
                placeholder="First Name"
                name="firstName"
                error={false}
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                placeholder="Last Name"
                error={false}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <Input
                placeholder="Job Title"
                name="jobTitle"
                error={false}
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.contact}>
            <h2>Contact Details</h2>
            <div>
              <Input
                placeholder="Phone Number"
                name="phone"
                error={false}
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                placeholder="Email Address"
                name="email"
                value={formData.email}
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
            <h2>Location</h2>
            <div className={styles.flex}>
              <Input
                placeholder="City"
                name="city"
                error={false}
                value={formData.city}
                onChange={handleChange}
              />
              <Input
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonHolder}>
          <Button
            click={handleClick}
            text={
              loading ? (
                <CircularProgress size={18} sx={{ color: "#fff" }} />
              ) : (
                "Continue"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
