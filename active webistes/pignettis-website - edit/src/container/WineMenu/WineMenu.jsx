import React from 'react';
import ReactDOM from 'react-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFViewer } from '@react-pdf/renderer';
import menuPDF from '../../assets/menu.pdf';
import './WineMenu.css';

// Set the worker URL for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const WineMenu = () => {
  const pdfUrl = menuPDF;

  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        {/* <img src={images.chef} alt='chef' /> */}
      </div>
      <div className="app__wrapper_info">
        <h1 className='headtext__cormorant'> What we believe in </h1>
        <div className="pdf__viewer">
          <PDFViewer>
            <Document file={pdfUrl}>
              <Page pageNumber={1} className="pdf__menu" />
            </Document>
          </PDFViewer>
        </div>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            {/* <img src={images.quote} alt='quote'/> */}
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
        
          <p className="p__opensans">Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          {/* <img src={images.sign} alt='sign'/> */}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<WineMenu />, document.getElementById('root'));

export default WineMenu;

