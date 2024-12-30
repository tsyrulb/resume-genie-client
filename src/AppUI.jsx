// AppUI.jsx
import React from 'react';
import './App.css';

export default function AppUI(props) {
  const {
    // CV states
    jobDescription, updatedCV, finalCV, pdfUrl,
    handleUploadChange, handleJobDescChange,
    handleGenerateClick, handleConfirmAndGenerate, setFinalCV,

    coverLetterPdfUrl,
    coverLetterHTML,
    generateCoverLetter
  } = props;

  return (
    <div className="page-container">
      <header className="hero-header">
        <h1 className="app-title">CV Summary & Cover Letter</h1>
        <p className="app-subtitle">Empowered by Gemini AI</p>
      </header>

      <main className="content-wrapper">

        {/* Upload PDF & job desc */}
        <section className="glass-card fade-in">
          <h2 className="section-title">Generate Updated CV or Cover Letter</h2>
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

            {/* Buttons side by side */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button type="submit" className="action-btn">
                Generate Updated CV
              </button>
              <button
                type="button"
                className="action-btn confirm-btn"
                onClick={() => {
                  console.log('Cover Letter button clicked');
                  generateCoverLetter();
                }}
              >
                Generate Cover Letter
              </button>
            </div>
          </form>

          {/* If there's an updated CV, let user edit + confirm to PDF */}
          {updatedCV && (
            <div className="editor-area fade-in" style={{ marginTop: '20px' }}>
              <h3 className="small-title">Updated CV (Preview)</h3>
              <textarea
                rows="10"
                value={finalCV}
                onChange={(e) => setFinalCV(e.target.value)}
              />
              <button
                onClick={handleConfirmAndGenerate}
                className="action-btn confirm-btn"
                style={{ marginTop: '10px' }}
              >
                Confirm &amp; Generate (AI)
              </button>
            </div>
          )}
        </section>

        {/* PDF Preview for final CV */}
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

        {/* Cover Letter HTML preview */}
        {coverLetterHTML && (
          <section className="glass-card fade-in">
            <h2 className="section-title">Cover Letter Preview</h2>
            <div
              className="cover-letter-preview"
              dangerouslySetInnerHTML={{ __html: coverLetterHTML }}
            />
          </section>
        )}
      </main>

      <footer className="footer-area">
        <p>&copy; 2024 tsyrulb. All rights reserved.</p>
      </footer>
    </div>
  );
}
