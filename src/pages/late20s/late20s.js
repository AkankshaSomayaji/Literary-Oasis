import React, { useState, useEffect, useRef } from "react";
import { Image } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import './late20s.scss';

// Set the workerSrc to point to the provided worker file
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

const Book = (props) => {
    const [pages, setPages] = useState([]);
    const canvasRefs = useRef([]);
    const flipBookRef = useRef(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        const pagesArray = [];

        // Add inner pages dynamically
        for (let i = 1; i <= numPages; i++) {
            const canvasRef = React.createRef();
            canvasRefs.current[i] = canvasRef;
            pagesArray.push(
                <Page key={`page-${i}`} pageNumber={i} renderAnnotationLayer={false} renderTextLayer={false} canvasRef={canvasRef}>
                    {({ canvas }) => {
                        const imageSrc = canvas.toDataURL();
                        return (
                            <PageSoftCover key={`cover-${i}`} source={imageSrc} alt={`Page ${i}`} ref={canvasRef} />
                        );
                    }}
                </Page>
            );
        }

        // Add the back cover
        pagesArray.push(<PageSoftCover key="back-cover" />);

        // Update the state with pages
        setPages(pagesArray);
    };

    return (
        <div>
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Document file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                    <HTMLFlipBook
                        width={550}
                        height={872}
                        minWidth={115}
                        maxWidth={2000}
                        minHeight={100}
                        maxHeight={2533}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        mobileScrollSupport={true}
                        onFlip={props.onPage}
                        onChangeOrientation={props.onChangeOrientation}
                        onChangeState={props.onChangeState}
                        style={{ backgroundImage: `url(../../images/page_bg.png)` }}
                        ref={flipBookRef}
                    >
                        {pages}
                    </HTMLFlipBook>
                </Document>
            </div>
        </div>
    );
};

const PageSoftCover = React.forwardRef((props, ref) => {
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

export default Book;