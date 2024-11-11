import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from '../assets/resume_cv.pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="py-16 mt-16">
      <div className="flex justify-center mb-4 md:mb-0">
        <a
          href={pdf}
          download="AliRaza.pdf" 
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded flex items-center"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload className="mr-2" />
          Download CV
        </a>
      </div>

      <div className="flex justify-center mb-2">
        <Document file={pdf} className="flex justify-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
