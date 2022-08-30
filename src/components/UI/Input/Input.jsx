import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder, name, error, value, onChange }) => {
  let inputClass = styles.Inputbox;

  if (error) {
    inputClass = [styles.Inputbox].concat(styles.InputError).join(" ");
  }

  return (
    <div className={styles.Inputholder}>
      <input
        className={inputClass}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
