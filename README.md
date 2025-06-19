# Resume Project

This project contains a resume in `index.html` and provides automation for:
- Deploying the resume to GitHub Pages using GitHub Actions
- Converting the HTML resume to a PDF using Puppeteer

## Deploy to GitHub Pages

Deployment is automated via GitHub Actions. On every push to the `main` branch, the site is published to GitHub Pages.

## Convert HTML to PDF

1. Install dependencies:
   ```bash
   npm install
   ```
2. Generate the PDF:
   ```bash
   npm run pdf
   ```
   This will create `index.pdf` from `index.html`.

## Project Structure
- `index.html` — Your resume in HTML format
- `index.pdf` — Generated PDF (not tracked in git)
- `html-to-pdf.js` — Script to convert HTML to PDF
- `.github/workflows/deploy.yml` — GitHub Actions workflow for deployment
- `package.json` — Project dependencies and scripts
- `.gitignore` — Files and folders excluded from git

## Requirements
- Node.js (for PDF generation)
- GitHub repository with Pages enabled (for deployment)
