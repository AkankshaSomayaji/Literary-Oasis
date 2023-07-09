import './home.css';
import { Button, OverlayTrigger, Tooltip, Carousel } from 'react-bootstrap';
import NavBar from '../../components/navbar';
import * as constants from '../constants';

const Home = () => {
    return (
        <div className='home-container'>
            <NavBar/>
            <div className='home-body-container'>
                <OverlayTrigger
                    key="right"
                    placement="top"
                    overlay={
                        <Tooltip>
                            Yes, you! <br/><strong>Straigten your back now!</strong>
                        </Tooltip>
                    }
                >
                    <Button as="a" className='home-button-tooltip'>
                        Hello there, fellow developer + reader!
                    </Button>
                </OverlayTrigger>

                <div className='home-intro'>
                    <text> {constants.HomeIntro1} </text>
                    <text> {constants.HomeIntro2} </text>
                    <text> {constants.HomeIntro3} </text>
                </div>

                <div className='home-carousel-container'>
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