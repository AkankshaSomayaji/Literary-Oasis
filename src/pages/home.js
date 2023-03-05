import { Button, OverlayTrigger, Tooltip, Carousel, Container } from 'react-bootstrap';
import NavBar from '../components/navbar';
import * as constants from './constants';

const Home = () => {
    return (
        <div className="home-container">
            <NavBar/>
            <div style={{backgroundColor:"#eae5df", marginTop:"60px"}}>
                <OverlayTrigger
                    key="right"
                    placement="right"
                    overlay={
                        <Tooltip>
                            Yes, you! <br/><strong>Straigten your back now!</strong>
                        </Tooltip>
                    }
                >
                    <Button as="a" variant="warning" style={{marginTop:"25px", fontFamily:"fangsong"}}>
                        Hello there, fellow developer + reader!
                    </Button>
                </OverlayTrigger>

                <div style={{padding:"1% 10%", fontFamily:"fangsong"}}>
                    <Container style={{display:"flex", flexDirection:"column", gap:"30px", marginBottom:"100px"}}>
                        <text> {constants.HomeIntro1} </text>
                        <text> {constants.HomeIntro2} </text>
                        <text> {constants.HomeIntro3} </text>
                    </Container>

                    <Carousel fade> {/* default:keyboard pasue="hover" touch */}
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                                alt="Book One"
                            />
                            <Carousel.Caption>
                                <h3>How to Make Your Employees Hate You : An Idiot's Guide to Management</h3>
                                <p>Creating a Toxic Work Environment, One Bad Decision at a Time</p>
                                {/* <p>Why Be a Good Manager When You Can Be a Terrible One? A Study in Ineptitude</p> */}
                                {/* <p>Avoiding Success at All Costs: The Ultimate Handbook for Bad Managers</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                                alt="Book Two"
                            />
                            <Carousel.Caption>
                                <h3>Label for second slide</h3>
                                <p>Sample Text for Image Two</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Home;