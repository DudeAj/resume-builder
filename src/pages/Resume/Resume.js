import React, { useEffect } from "react";
import "./Resume.scss";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import SelectedTemplate from "../../Template/index";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import history from "../../utils/history";
import { ref, set, push, get, child } from "firebase/database";
import { db } from "../../firebase";
import { getPersonal,getExperience, getEducation, getSkills, getLanguages, getCertification, getSummary, getResume} from "../../store/reducers/data";

const Resume = () => {
  const { selectedTemplate } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const generatePDF = () => {
    const domElement = document.getElementById("content");
    html2canvas(domElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [794, 1150],
        compressPdf: true,
        // format: [4, 2]
      });

      pdf.addImage(imgData, "JPEG", 25, 25);
      pdf.save(`${new Date().toISOString()}.pdf`);
    });
  };

  const selectedTemp = selectedTemplate
    ? SelectedTemplate(selectedTemplate)
    : null;

  const setResume = async (resume_id) => {
    const user_id = localStorage.getItem("user_id");
    const data = await get(child(ref(db), `resume/${user_id}`));
    const latestData = data.val();
    
    const allResume = latestData ? Object.keys(latestData)
      .map((key) => {
        return {
          id: key,
          resumeId: latestData[key].resumeId,
        };
      })
      .filter((resume) => resume.resumeId == resume_id) : [];
    
    if (!allResume.length) {
      const postListRef = ref(db, "resume/" + user_id);
      const newPostRef = push(postListRef);
      // const postListRef = ref(db, "resume/" + user_id);
      await set(newPostRef, {
        resumeId: resume_id,
      });
      
    }
  };
  useEffect(()=> {
    dispatch(getPersonal());
    dispatch(getExperience());
    dispatch(getEducation());
    dispatch(getSkills());
    dispatch(getLanguages());
    dispatch(getCertification());
    dispatch(getSummary());
    dispatch(getResume());

  },[]);
  useEffect(() => {
    if (!selectedTemplate) {
      history.push("personal");
    }
    setResume(selectedTemplate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTemplate]);

  return (
    <div>
      <div className="buttonContainer">
        <Button
          className="download-btn"
          variant="contained"
          onClick={generatePDF}
        >
          Download
        </Button>
      </div>
      {selectedTemp?.temp}
    </div>
  );
};

export default Resume;
