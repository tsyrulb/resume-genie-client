// AppLogic.js
import { useState } from 'react';
import axios from 'axios';

export function useAppLogic() {
  // Step 1 states
  const [pdfFile, setPdfFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [updatedCV, setUpdatedCV] = useState('');
  const [finalCV, setFinalCV] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  // Step 2 states (raw text approach is replaced by finalCV usage)
  // Actually we do not need a second approach if we are focusing
  // on "Confirm & Generate" calling generate-advanced

  // 1) Upload PDF (file) + jobDescription => /generate => updatedCV
  const handleUploadChange = (e) => {
    setPdfFile(e.target.files[0]);
  };
  const handleJobDescChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleGenerateClick = async (e) => {
    e.preventDefault();
    if (!pdfFile || !jobDescription) {
      alert('Please select a PDF and enter a job description');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', pdfFile);
      formData.append('jobDescription', jobDescription);

      const response = await axios.post(
        'http://localhost:5000/api/cv/generate',
        formData
      );
      const { updatedCV } = response.data;
      setUpdatedCV(updatedCV);
      setFinalCV(updatedCV);
    } catch (err) {
      console.error(err);
      alert('Error generating updated CV via /generate.');
    }
  };

  // 2) “Confirm & Generate” => /generate-advanced => final PDF
  const handleConfirmAndGenerate = async () => {
    if (!finalCV) {
      alert('No final CV text to send to the AI.');
      return;
    }
    try {
      // Post finalCV as { fullText: finalCV } to /generate-advanced
      const response = await axios.post(
        'http://localhost:5000/api/cv/generate-advanced',
        { fullText: finalCV },
        { responseType: 'blob' }
      );
      const fileBlob = new Blob([response.data], { type: 'application/pdf' });
      const fileUrl = URL.createObjectURL(fileBlob);
      setPdfUrl(fileUrl);
    } catch (err) {
      console.error('Error generating AI PDF from final CV text:', err);
      alert('Failed to generate AI-based PDF via /generate-advanced.');
    }
  };

  return {
    // states
    pdfFile, setPdfFile,
    jobDescription, setJobDescription,
    updatedCV, setUpdatedCV,
    finalCV, setFinalCV,
    pdfUrl, setPdfUrl,

    // handlers
    handleUploadChange,
    handleJobDescChange,
    handleGenerateClick,
    handleConfirmAndGenerate
  };
}
