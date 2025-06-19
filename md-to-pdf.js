const { mdToPdf } = require('md-to-pdf');
const path = require('path');

(async () => {
  const mdPath = path.resolve(__dirname, 'resume.md');
  const pdfPath = path.resolve(__dirname, 'resume-md.pdf');
  const cssPath = path.resolve(__dirname, 'md-pdf-style.css');

  await mdToPdf({ path: mdPath }, { dest: pdfPath, stylesheet: cssPath });

  console.log('PDF generated at', pdfPath);
})();
