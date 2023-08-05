import './home.css';
import { Button, OverlayTrigger, Tooltip, Carousel } from 'react-bootstrap';
import NavBar from '../../components/navbar';
import * as constants from '../constants';
import CarouselCard from '../../components/carouselCard';

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
                            <CarouselCard
                                title={<h3>How to Make Your Employees Hate You : <br/> An Idiot's Guide to Management</h3>}
                                info="Creating a Toxic Work Environment, One Bad Decision at a Time"
                                hlink='/hmyehy'
                                bg={"72, 209, 204"}
                                bgOnHover={"173, 216, 230"}
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <CarouselCard
                                title={<h3>Why Be a Good Manager <br/> When You Can Be a Terrible One? : <br/> A Study in Ineptitude</h3>}
                                info="Avoiding Success at All Costs: The Ultimate Handbook for Bad Managers"
                                hlink='/'
                                bg={"209, 72, 122"}
                                bgOnHover={"230, 173, 203"}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Home;