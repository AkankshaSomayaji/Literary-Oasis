import React, { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Loader from "./loader";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;


const PageSoftCover = React.forwardRef(({ source, alt }, ref) => (
    <div ref={ref} data-density="soft">
        <img
        src={source}
        alt={alt}
        style={{ height: "872px", border: "2px solid rgb(198, 194, 194)" }}
        />
    </div>
    ));

    const FlipBookPDF = ({ pdfFile }) => {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const flipBookRef = useRef(null);

    useEffect(() => {
        const loadPdf = async () => {
        try {
            const loadingTask = pdfjs.getDocument(pdfFile);
            const pdf = await loadingTask.promise;
            const imageUrls = [];

            for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const scale = 2;
            const viewport = page.getViewport({ scale });

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = { canvasContext: context, viewport };
            await page.render(renderContext).promise;

            imageUrls.push(canvas.toDataURL("image/png"));
            }

            setPages(imageUrls);
        } catch (error) {
            console.error("Error loading PDF:", error);
        } finally {
            setLoading(false);
        }
        };

        loadPdf();
    }, [pdfFile]);


    return (
        <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        {loading ? (
            <Loader />
        ) : (
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
                style={{ backgroundImage: `url(../../images/page_bg.png)` }}
                ref={flipBookRef}
            >
                {pages.map((src, index) => (
                    <PageSoftCover key={index} source={src} alt={`Page ${index + 1}`} />
                ))}
            </HTMLFlipBook>
        )}
        </div>
    );
};

export default FlipBookPDF;
