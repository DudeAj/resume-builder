import React from "react";
import styles from "./select.module.scss";

const Select = ({ type, value, name, onChange }) => {
  let data = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (type === "year") {
    data = [
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ];
  }

  return (
    <div className={styles.Inputholder}>
      <select
        className={styles.Inputbox}
        name={name}
        value={value}
        onChange={onChange}
      >
        {data.map((month, i) => {
          return (
            <option key={i} value={data[i]}>
              {month}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
