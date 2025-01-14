# ResumeGenie Client

**ResumeGenie** is a React-based frontend application that implies magical ease in creating professional resumes and cover letters, highlighting the AI-driven aspect.


## Features

- **Upload CV**: Easily upload your existing CV in PDF format.
- **Job Description Input**: Provide details about the job you're applying for.
- **Generate Updated CV**: Automatically create a tailored CV aligned with the job requirements.
- **Generate Cover Letter**: Produce a professional cover letter based on your CV and job details.
- **Preview & Download**: View the generated documents in the browser and download them as PDFs.

## Technologies Used

- **React**
- **Axios**
- **Puppeteer**
- **CSS**

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/resume-genie-client.git
   cd resume-genie-client
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory:

   ```bash
   touch .env
   ```

   Add the following (adjust the API base URL if necessary):

   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000/api/cv
   ```

## Usage

1. **Start the Development Server**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Generate Documents**

   - **Upload your CV** in PDF format.
   - **Enter the job description** relevant to your application.
   - Click **"Generate Updated CV"** or **"Generate Cover Letter"**.
   - **Preview** the generated PDF and **download** as needed.

## License

This project is licensed under the [MIT License](LICENSE).
