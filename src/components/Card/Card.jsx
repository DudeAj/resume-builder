import React from "react";
import styles from "./card.module.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Card = ({ title,subTitle, id, editData, deleteData }) => {
  return (
    <div className={styles.box}>
      <div className={styles.inner}>
        <div className={styles.information}>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>

        <div className={styles.icons}>
          <EditOutlinedIcon onClick={() => editData(id)} />
          <DeleteOutlineOutlinedIcon onClick={() => deleteData(id)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
