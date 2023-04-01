import React from "react";
import HTMLFlipBook from 'react-pageflip';
import { Badge, Image } from 'react-bootstrap';
import cover from '../../images/cover.png';
import backCover from '../../images/back_cover.png';
import bindingBG from '../../images/binding_bg.png';
import pageBG from '../../images/page_bg.png';
import * as constants from './constants';
import './hmyehy.scss';

const PageHardCover = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density="hard">
            <Image
                src={props.source}
                alt={props.alt}
                style={{height:"872px", border:"2px solid rgb(198, 194, 194)"}}
            />
        </div>
    )
});

const Page = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density={props.density | "soft"}>
            <div style={{backgroundImage: `url(${pageBG})`, height:"872px", width:"550px", border:"2px solid rgb(198, 194, 194)", padding:"20px 20px 10px 20px"}}>
                {/* box-shadow: 0 1.5em 3em -1em rgb(70, 69, 69); */}
                {props.chapterNo||props.chapter ?
                    <div>
                        <h2><Badge bg="secondary">{props.chapterNo}</Badge></h2>
                        <h2 style={{margin:"15px 0px 40px 0px", fontFamily:"caveat"}}>{props.chapter}</h2>
                    </div>
                    : 
                    <div>
                        {props.pageNo%2===0 ?
                            <div className="page_heading">
                                <p>{props.pageNo}</p>
                                <p>{constants.page_header}</p>
                            </div> :
                            <div className="page_heading">
                                <p>{constants.page_header}</p>
                                <p>{props.pageNo}</p>
                            </div>
                        }
                    </div>
                }
                {props.quote ?
                    <h3 style={{marginTop:"10px 0px"}}>{props.quote}</h3>
                    : ''
                }
                <div style={{fontFamily:"monospace"}}>{props.children}</div>  {/*text-align:"justify"*/}
                {props.chapter ?
                    <div style={{margin:"20px 0px", position:"absolute", bottom:"0px", left:"270px"}}>{props.pageNo}</div>
                    : ""
                }
            </div>
        </div>
    );
});

const PageTemplate = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density={props.density | "soft"}>
            <div style={{backgroundImage: `url(${pageBG})`, height:"872px", width:"550px", border:"2px solid rgb(198, 194, 194)"}}>
                {props.children}
            </div>
        </div>
    );
});

export default class HMYEHY extends React.Component {
    constructor(props) {
        super(props);
        const pages = [];

        pages.push(<PageHardCover key="cover" source={cover} alt="Book Cover Image"/>);
        pages.push(<PageHardCover key="behindCover" source={bindingBG} alt="Behind Book Cover Image" />);

        pages.push(
            <PageTemplate key="title">
                <div style={{display:"flex", height:"inherit", flexDirection:"column", justifyContent:"center", padding:"0px 10px", gap:"20px"}}>
                    <h1 style={{fontFamily:"caveat"}}>{constants.title}</h1>
                    <h4 style={{fontFamily:"caveat"}}>{constants.subtitle}</h4>
                </div>
            </PageTemplate>
        );
        pages.push(<PageTemplate key="plain" />);

        pages.push(
            <PageTemplate key="dedication">
                <div style={{display:"flex", height:"inherit", flexDirection:"column", justifyContent:"center", padding:"0px 20px"}}>
                    <h8 style={{fontFamily:"monospace"}}>{constants.dedication_content}</h8>
                </div>
            </PageTemplate>
        );
        pages.push(<PageTemplate key="plain" />);

        pages.push(
            <PageTemplate key="toc">
                <div style={{display:"flex", height:"inherit", flexDirection:"column", justifyContent:"center", padding:"0px 10px"}}>
                    <h1 style={{fontFamily:"caveat"}}>{constants.toc_title}</h1>
                    <h8 style={{fontFamily:"monospace"}}>{constants.toc_content_p1}</h8>
                </div>
            </PageTemplate>
        );
        pages.push(
            <PageTemplate key="toc">
                <div style={{display:"flex", height:"inherit", flexDirection:"column", justifyContent:"center", padding:"0px 10px"}}>
                    <h8 style={{fontFamily:"monospace"}}>{constants.toc_content_p2}</h8>
                </div>
            </PageTemplate>
        );

        pages.push(<PageTemplate key="plain" />);
        pages.push(<PageTemplate key="plain" />);

        let page_no=1;

        pages.push(
            <Page key="intro" pageNo={page_no} chapter={constants.intro_title} chapterNo="Intro">
                {constants.intro_content}
            </Page>
        );

        for (let i = 1; i <= constants.chapters_count; i++) {
            for (let page_i=0; page_i<constants.chap_contents[i-1].length; page_i++) {
                page_no+=1;
                pages.push(
                    <Page key={""+i+page_i} pageNo={page_no} chapter={page_i===0 ? constants.chap_titles[i-1] : ""} chapterNo={page_i===0 ? i : ""}>
                        {constants.chap_contents[i-1][page_i]}
                    </Page>
                );
            }
        }

        for (let page_i=0; page_i<constants.conclusion_content.length; page_i++) {
            page_no+=1;
            pages.push(
                <Page key={"conclusion"+page_i} pageNo={page_no} chapter={page_i===0? constants.conclusion_title:""} chapterNo={page_i===0? "Conclusion":""}>
                    {constants.conclusion_content[page_i]}
                </Page>
            );
        }

        for (let page_i=0; page_i<constants.summary_content.length; page_i++) {
            page_no+=1;
            pages.push(
                <Page key={"summary"+page_i} pageNo={page_no} chapter={page_i===0? "Summary":""}>
                    {constants.summary_content[page_i]}
                </Page>
            );
        }

        pages.push(<PageHardCover key="behindBackCover" source={bindingBG} alt="Behind Book Cover Image"/>);
        pages.push(<PageHardCover key="backCover" source={backCover} alt="Book Back Cover Image" />);

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
                <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
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
                </div>
            </div>
        );
    }
}
