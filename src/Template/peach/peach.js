
import React from "react";
import styles from "./peach.module.scss";

const Peach = ({ data }) => {
  const header = () => (
    <div className={styles.header}>
      <div className={styles.nameContainer}>
        <h3>
          {data.personal.firstName} {data.personal.lastName}
        </h3>
      </div>
      <div className={styles.personalInfo}>
        <p className={styles.heading}>
          <span>Address: </span> {data.personal.city} , {data.personal.country}
        </p>
      </div>

      <div className={styles.personalInfo}>
        <p className={styles.heading}>
          <span>Email: </span>
          {data.personal.email}
        </p>
        <p> | </p>
        <p className={styles.heading}>
          <span>Mob. No.: </span>
          {data.personal.phone}
        </p>
      </div>
    </div>
  );

  const summary = (title, text) => (
    <div className={styles.outerContainer}>
      <h2 className={styles.descHeading}>{title && title}</h2>
      <p> {text}</p>
    </div>
  );

  const section = (title, info) => (
    <div className={styles.outerContainer}>
      <h2 className={styles.descHeading}>{title}</h2>
      <div className={styles.dataContainer}>
        {info?.map((item) => (
          <div className={styles.innerContainer}>
            <p className={styles.time}>
              <span>
                {item.startMonth}, {item.startYear}
              </span>{" "}
              -{" "}
              <span>
                {item.endMonth && item.endYear
                  ? item.endMonth + " , " + item.endYear
                  : "Till Now"}
              </span>
            </p>
            <p className={styles.jobTitle}>
              {item.jobTitle}, {item.companyProject}
            </p>
            <p className={styles.jobDesc}>{item.accomplishments}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const sectionEducation = (title, info) => (
    <div className={styles.outerContainer}>
      <h2 className={styles.descHeading}>{title}</h2>
      <div className={styles.dataContainer}>
        {info?.map((item) => (
          <div className={styles.innerContainer}>
            <p className={styles.time}>
              <span>{item.year}</span>
            </p>
            <p className={styles.jobTitle}>
              {item.degree} ({item.field}), {item.university}
            </p>
            <p className={styles.jobDesc}>{item.accomplishments}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const shortInfo = (title, info) => {    
    console.log(info)
    return (
      <div className={styles.outerContainer}>
        <h2 className={styles.descHeading}>{title}</h2>
        <div className={styles.shortContainer}>
          <ul className={styles.optionContainer}>
            {Array.isArray(info) ? info?.map(item=>{
              return <li>{item.value}</li>
            }): <li>{info}</li>}
          </ul>
        </div>
      </div>
    );
  };

  const content = () => (
    <div className={styles.templateContainer}>
      <div className={styles.subContainer}>
        <div id="content">
          <div className={styles.template}>
            {header()}
            <div className={styles.infoContainer}>
              <div>{summary("", data.summary)}</div>
              <div>{section("Experience", data.experience)}</div>
              <div>{sectionEducation("Education", data.education)}</div>
              <div>{shortInfo("Certification", data.certification)}</div>
              <div>{shortInfo("Skills", data.skills)}</div>
              <div>{shortInfo("Known Language", data.languages)}</div>
              <div>
                {summary(
                  "Declaration",
                  "I Here by Declare that above given information is corrent and true in my belief and i will be responsible if any of the given information found to be wrong"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return content();
};

export default Peach;
