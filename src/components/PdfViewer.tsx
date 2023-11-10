import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PdfViewerProps {
  file: string; // Assuming 'file' is a string, you can adjust the type accordingly
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
  return (
    <Document file={file}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default PdfViewer;