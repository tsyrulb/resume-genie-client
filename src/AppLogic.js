// AppLogic.js
import { useState } from "react";
import axios from "axios";

export function useAppLogic() {
  // 1) States for CV adaptation
  const [pdfFile, setPdfFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [updatedCV, setUpdatedCV] = useState("");
  const [finalCV, setFinalCV] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  // -- Upload PDF
  const handleUploadChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  // -- Track job description text
  const handleJobDescChange = (e) => {
    setJobDescription(e.target.value);
  };

  // -- Generate updated CV from PDF + jobDescription
  const handleGenerateClick = async (e) => {
    e.preventDefault();
    if (!pdfFile || !jobDescription) {
      alert("Please select a PDF and enter a job description");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", pdfFile);
      formData.append("jobDescription", jobDescription);

      const response = await axios.post(
        "http://localhost:5000/api/cv/generate",
        formData
      );
      const { updatedCV } = response.data;
      setUpdatedCV(updatedCV);
      setFinalCV(updatedCV);
    } catch (err) {
      console.error(err);
      alert("Error generating updated CV via /generate.");
    }
  };

  // -- Confirm final CV text -> /generate-advanced -> PDF
  const handleConfirmAndGenerate = async () => {
    if (!finalCV) {
      alert("No final CV text to convert to PDF.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cv/generate-advanced",
        { fullText: finalCV },
        { responseType: "blob" }
      );
      const fileBlob = new Blob([response.data], { type: "application/pdf" });
      const fileUrl = URL.createObjectURL(fileBlob);
      setPdfUrl(fileUrl);
    } catch (err) {
      console.error("Error generating AI PDF from final CV text:", err);
      alert("Failed to generate AI-based PDF via /generate-advanced.");
    }
  };

  return {
    // States
    pdfFile,
    setPdfFile,
    jobDescription,
    setJobDescription,
    updatedCV,
    setUpdatedCV,
    finalCV,
    setFinalCV,
    pdfUrl,
    setPdfUrl,

    // Handlers
    handleUploadChange,
    handleJobDescChange,
    handleGenerateClick,
    handleConfirmAndGenerate
  };
}
