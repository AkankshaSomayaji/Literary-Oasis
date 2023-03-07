import React from "react";
import HTMLFlipBook from 'react-pageflip';
import { Badge, Image } from 'react-bootstrap';
import cover from '../../images/cover.png';
import bindingBG from '../../images/binding_bg.png';
import pageBG from '../../images/page_bg.png';
import * as constants from './constants';

const PageCover = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density="hard">
            <Image
                src={cover}
                alt="Book Cover Image"
                style={{height:"872px", border:"2px solid rgb(198, 194, 194)"}}
            />
        </div>
    );
});

const PageCoverEnd = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density="hard">
            <Image
                src={bindingBG}
                alt="Book Cover End Image"
                style={{height:"872px", border:"2px solid rgb(198, 194, 194)"}}
            />
        </div>
    );
});

const Page = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density={props.density | "soft"}>
            <div style={{ backgroundImage: `url(${pageBG})`, height:"872px", width:"550px", border:"2px solid rgb(198, 194, 194)"}}>
                {/* box-shadow: 0 1.5em 3em -1em rgb(70, 69, 69); */}
                {props.chapter ?
                    <div style={{marginTop:"10px"}}>
                        <h2><Badge bg="secondary">11</Badge></h2>
                        <h2>{props.chapter}</h2>
                    </div>
                    : ''
                }
                {props.quote ?
                    <h3>{props.quote}</h3>
                    : ''
                }
                <div>{props.children}</div>
                <div>{props.number}</div>
            </div>
        </div>
    );
});

const PageTemplate = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density={props.density | "soft"}>
            <div style={{ backgroundImage: `url(${pageBG})`, height:"872px", width:"550px", border:"2px solid rgb(198, 194, 194)"}}>
                {props.children}
            </div>
        </div>
    );
});

export default class HMYEHY extends React.Component {
    constructor(props) {
        super(props);
        const pages = [];
    
        pages.push(<PageCover key="cover" />);
        pages.push(<PageCoverEnd key="behindCover" />);

        pages.push(
            <PageTemplate key="title">
                <div style={{display:"flex", height:"inherit", flexDirection:"column", justifyContent:"center", padding:"0px 10px"}}>
                    <h1 style={{fontFamily:"caveat"}}>{constants.title}</h1>
                    <h4 style={{fontFamily:"caveat"}}>{constants.subtitle}</h4>
                </div>
            </PageTemplate>
        );
        pages.push(<PageTemplate key="plain" />);
        pages.push(
            <PageTemplate key="intro">
                <div style={{display:"flex", height:"inherit", flexDirection:"column", justifyContent:"center", padding:"0px 10px"}}>
                    <h1 style={{fontFamily:"caveat"}}>{constants.intro_title}</h1>
                    <h8 style={{fontFamily:"monospace"}}>{constants.intro_content}</h8>
                </div>
            </PageTemplate>
        );
        pages.push(<PageTemplate key="plain" />);
        pages.push(
            <PageTemplate key="dedication">
                <div style={{display:"flex", height:"inherit", flexDirection:"column", justifyContent:"center", padding:"0px 10px"}}>
                    <h8 style={{fontFamily:"monospace"}}>{constants.dedication_content}</h8>
                </div>
            </PageTemplate>
        );
        pages.push(<PageTemplate key="plain" />);

        let i=0;
    
        for (i = 0; i < 6; i++) {
            pages.push(
                <Page key={i} number={i} chapter={"hello meri jaan"} chapterNo={1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
                    mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
                    Aenean vitae pellentesque erat. Integer non tristique quam.
                    Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra
                    metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus,
                    accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
                    sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. In cursus mollis nibh, non convallis ex
                    convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat.
                    Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin
                    mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
                </Page>
            );
        }
  
        pages.push(<PageCoverEnd key="behindCover" />);
        pages.push(<PageCoverEnd key="EndCover" />);
  
        this.state = {
            page: 0,
            totalPage: 100,
            orientation: "landscape",
            state: "read",
            pages: pages
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
  
    render() {
        return (
            <div>
                <div style={{ height:"100vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
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
                        style={{ backgroundImage: `url(../../images/page_bg.png)` }}
                        ref={(el) => (this.flipBook = el)}
                    >
                        {this.state.pages}
                    </HTMLFlipBook>
                </div>
            </div>
        );
    }
}
