import React from "react";
import "./Resume.scss";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import SelectedTemplate from '../../Template/index';
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Resume = () => {

  const {data} = useSelector(state=>state);
  console.log("personal from selector", data)

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

  const selectedTemplate = SelectedTemplate(2);

  return (
    <div>
      <div className="buttonContainer">
        <Button className="download-btn" variant="contained" onClick={generatePDF}>
          Download
        </Button>
      </div>
      {selectedTemplate.temp}
    </div>
  );
};

export default Resume;
