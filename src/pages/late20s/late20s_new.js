import React, { useState, useRef } from 'react';
import { Document, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip'; // Ensure you have this library installed
import { Image } from 'react-bootstrap';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [finalPages, setFinalPages] = useState([]);
  const pdfRef = useRef();

  const PageComp = React.forwardRef((props, ref) => {
    return (
            <div ref={ref} data-density="soft">
                <Image
                    src={props.source}
                    alt={props.alt}
                    style={{ height: "872px", border: "2px solid rgb(198, 194, 194)" }}
                />
            </div>
        );
    });

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      renderPageToImage(i, pages);
    }
  }

  async function renderPageToImage(pageNumber, pages) {
    const pdf = pdfRef.current;
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport }).promise;
    const imageUrl = canvas.toDataURL();
    pages.push(<PageComp key={pageNumber} imageUrl={imageUrl} ref={pdfRef} />);
    setFinalPages([...pages]);
  }

  return (
    <div>
      <Document
        file="path/to/your/pdf-file.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        inputRef={pdfRef}
      />
      <HTMLFlipBook width={300} height={500}>
        {finalPages}
      </HTMLFlipBook>
    </div>
  );
}

export default MyApp;