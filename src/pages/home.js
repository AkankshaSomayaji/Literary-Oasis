import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NavBar from '../components/navbar';
import * as constants from './constants';

const Home = () => {
    return (
        <div className="home-container">
            <NavBar/>

            <OverlayTrigger
                key="right"
                placement="right"
                overlay={
                    <Tooltip>
                        Yes, you! <br/><strong>Straigten your back now!</strong>
                    </Tooltip>
                }
            >
                <Button as="a" variant="warning" style={{marginTop:"3%"}}>Hello there, fellow developer + reader!</Button>
            </OverlayTrigger>

            <div style={{height:"800px", padding:"1% 10%"}}>
                <text> {constants.HomeIntro1} </text>
                <br/>
                <br/>
                <text> {constants.HomeIntro2} </text>
                <br/>
                <br/>
                <text> {constants.HomeIntro3} </text>
            </div>
        </div>
    )
}

export default Home;