import React from "react";
import HTMLFlipBook from 'react-pageflip';
import { Image } from 'react-bootstrap';
import cover from '../../images/cover.png';
import binding from '../../images/binding_bg.png';

const PageCover = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density="hard">
            <Image
                src={cover}
                alt="Book Cover Image"
                style={{height:"100vh"}}
                // width={600}
                // height={500}
            />
        </div>
    );
});

const PageCoverEnd = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} data-density="hard">
            <Image
                src={binding}
                alt="Book Cover End Image"
                style={{height:"100vh"}}
                // width={600}
                // height={500}
            />
        </div>
    );
});

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref} data-density={props.density | "soft"}>
            <div>
                <h2 className="page-header">Page header - {props.number}</h2>
                <div
                    className="page-image"
                    style={{ backgroundImage: "url(images/html/" + props.image + ")" }}
                />
                <div className="page-text">{props.children}</div>
                <div className="page-footer">{props.number + 1}</div>
            </div>
        </div>
    );
});

/*
.page {
    // background-image: url(https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFwZXIlMjB0ZXh0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80);
    border: 1px solid rgb(198, 194, 194);
    // border-radius: 0.5rem;
    box-sizing: border-box;
    box-shadow: 0 1.5em 3em -1em rgb(70, 69, 69);
    opacity: 1;
}
*/

export default class HMYEHY extends React.Component {
    constructor(props) {
        super(props);
    
        const pages = [ <PageCover key={0}/> ];
    
        for (let i = 0; i < 6; i++) {
            pages.push(
                <Page key={i + 1} number={i + 1}>
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
  
        pages.push(
            <PageCoverEnd key={8} />
        );
  
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
                <div style={{ position:"relative", width:"500px !important" }}>
                    <HTMLFlipBook
                        width={550}
                        height={733}
                        size="stretch"
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
                        style={{ backgroundImage: "url(images/background.jpg)" }}
                        ref={(el) => (this.flipBook = el)}
                    >
                        {this.state.pages}
                    </HTMLFlipBook>
                </div>
            </div>
        );
    }
}
  
  
/*
const HMYEHY = () => {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Image
                src={cover}
                alt="Cover Image"
                style={{height:"100vh"}}
            />
            <div style={{background:"repeating-linear-gradient(90deg, pink, chocolate 0.024px)", width:"12px"}}/>
            <Image
                src={cover}
                alt="Cover Image"
                style={{height:"100vh"}}
            />
        </div>
    )
}
*/