import React from "react";
import { Image } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';

// Set the workerSrc to point to the provided worker file
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;


const PageComp = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density={props.kind || "soft"}>
            <Image
                src={props.source}
                alt={props.alt}
                style={{ height: "872px", width: "550px", border: "2px solid rgb(198, 194, 194)", padding: "20px 20px 10px 20px" }}
            />
        </div>
    );
});

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            totalPage: 0,
            orientation: "landscape",
            state: "read",
            pages: []
        };
    }

    onPage = (e) => {
        this.setState({
            page: e.data
        });
    };

    onChangeOrientation = (e) => {
        this.setState({
            orientation: e.data
        });
    };

    onChangeState = (e) => {
        this.setState({
            state: e.data
        });
    };
    
    onDocumentLoadSuccess = ({numPages}) => {
        const pages = [];

        // Add inner pages dynamically
        for (let i = 1; i <= numPages; i++) {
            pages.push(
                <Page key={`page-${i}`} pageNumber={i} renderAnnotationLayer={false} renderTextLayer={false}>
                    {({ canvas }) => (
                        <PageComp
                            key={`softcover-${i}`}
                            source={canvas.toDataURL()}
                            alt={`Page ${i}`}
                        />
                    )}
                </Page>
            );
        }

        // Add the back cover
        pages.push(<PageComp key="back-cover" />);

        // Update the state with pages and total page count
        this.setState({
            totalPage: numPages,
            pages: pages
        });
    };

    render() {
        return (
            <div>
                <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Document file={this.props.pdfFile} onLoadSuccess={this.onDocumentLoadSuccess}>
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
                            onFlip={this.onPage}
                            onChangeOrientation={this.onChangeOrientation}
                            onChangeState={this.onChangeState}
                            style={{backgroundImage: `url(../../images/page_bg.png)`}}
                            ref={(el) => (this.flipBook = el)}
                        >
                            {this.state.pages}
                        </HTMLFlipBook>
                    </Document>
                </div>
            </div>
        );
    }
}
