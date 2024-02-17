import React from 'react';
import pdfFile from '../../Components/Images/resume.pdf';

const DownloadPDF = () => {

  return (
    <div>
      <a className='btn1' href={pdfFile} download="Resume.pdf">
        Click Here....
      </a>
    </div>
  );
};

export default DownloadPDF;
