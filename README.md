# ResumeGenie Client

**ResumeGenie** is a React-based frontend application that provides a magical, AI-driven approach to creating professional resumes. It integrates with a backend service to parse your existing CV, adapt it's summary to specific job descriptions, and generate a polished, downloadable PDF—all in one streamlined process.


## Features

- **Upload CV**: Easily upload your existing CV in PDF format.
- **Job Description Input**: Provide details about the job you're applying for.
- **Generate Updated CV**: Automatically create a tailored CV aligned with job requirements using AI.
- **Preview & Download**: View the generated CV in the browser and download it as a PDF.

## Technologies Used

- **React**
- **Axios**
- **Puppeteer**
- **CSS**

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tsyrulb/resume-genie-client.git
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
   - Click **"Generate Updated CV"**.
   - **Preview** the generated PDF and **download** as needed.

## License

This project is licensed under the [MIT License](LICENSE).
