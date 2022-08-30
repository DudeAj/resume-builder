import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";
import { ArrowForward } from "@mui/icons-material";

const Button = ({ click, text }) => {
  return (
    <p onClick={click} className={styles.button}>
      {text} <ArrowForward className={styles.icon} fontSize="small" />
    </p>
  );
};

export default Button;
