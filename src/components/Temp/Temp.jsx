import React from "react";
import styles from "./temp.module.scss";


const Temp = ({ link, click }) => {
  return (
    <div className={styles.Temp} onClick={() => click(link.id)}>
      <img src={link.img} alt={`template${link.id}`} />
    </div>
  );
};

export default Temp;
