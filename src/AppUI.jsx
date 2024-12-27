// AppUI.jsx
import React from 'react';
import './App.css'; // We'll define creative styling in App.css

export default function AppUI(props) {
  const {
    jobDescription,
    updatedCV,
    finalCV,
    pdfUrl,

    handleUploadChange,
    handleJobDescChange,
    handleGenerateClick,
    handleConfirmAndGenerate,
    setFinalCV
  } = props;

  return (
    <div className="page-container">
      <header className="hero-header">
        <h1 className="app-title">CV Summary Adaptation</h1>
        <p className="app-subtitle">Empowered by Gemini AI</p>
      </header>

      <main className="content-wrapper">
        {/* Step 1 card (PDF upload + job desc => updatedCV) */}
        <section className="glass-card fade-in">
          <h2 className="section-title">1) Generate updated summary for your CV</h2>
          <form onSubmit={handleGenerateClick} className="form-area">
            <div className="form-group">
              <label>Upload CV (PDF):</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleUploadChange}
              />
            </div>
            <div className="form-group">
              <label>Job Description:</label>
              <textarea
                rows="5"
                value={jobDescription}
                onChange={handleJobDescChange}
              />
            </div>
            <button type="submit" className="action-btn">
              Generate Updated CV
            </button>
          </form>

          {updatedCV && (
            <div className="editor-area fade-in">
              <h3 className="small-title">Updated CV (Preview)</h3>
              <textarea
                rows="10"
                value={finalCV}
                onChange={(e) => setFinalCV(e.target.value)}
              />
              <button
                onClick={handleConfirmAndGenerate}
                className="action-btn confirm-btn"
              >
                Confirm &amp; Generate (AI)
              </button>
            </div>
          )}
        </section>

        {/* Step 2: PDF Preview (AI result) */}
        {pdfUrl && (
          <section className="glass-card fade-in">
            <h3 className="small-title">Final PDF</h3>
            <a href={pdfUrl} download="AICV.pdf" className="action-btn download-btn">
              Download PDF
            </a>
            <iframe
              src={pdfUrl}
              title="AI CV PDF"
              className="pdf-frame"
            />
          </section>
        )}
      </main>

      <footer className="footer-area">
        <p>&copy; 2024 tsyrulb CV Summary Adaptor. All rights reserved.</p>
      </footer>
    </div>
  );
}
