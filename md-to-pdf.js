const { mdToPdf } = require('md-to-pdf');
const path = require('path');

(async () => {
  const mdPath = path.resolve(__dirname, 'resume.md');
  const pdfPath = path.resolve(__dirname, 'resume-md.pdf');
  const cssPath = path.resolve(__dirname, 'md-pdf-style.css');

  await mdToPdf(
    { path: mdPath },
    {
      dest: pdfPath,
      stylesheet: cssPath,
      pdf_options: { margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' } }
    }
  );

  console.log('PDF generated at', pdfPath);
})();
