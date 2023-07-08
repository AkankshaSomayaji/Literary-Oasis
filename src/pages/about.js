import "./about.css";
import { Image } from 'react-bootstrap';
import NavBar from '../components/navbar';
import * as constants from './constants';
import girlInChairImage from '../images/girl-chair-laptop.png';
import girlUnicornImage from '../images/girl-and-unicorn-nobg.png';
import girlCatImage from '../images/girl-and-cat-nobg.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import AboutCard from '../components/aboutCard';

function About() {
    return (
        <div>
            <Parallax pages={3}>
                {/* <ParallaxLayer offset={0} speed={1} factor={5} style={{backgroundImage:`url(${girlInChairImage})`, backgroundSize:'cover'}}/> */}
                {/* <ParallaxLayer sticky={{start:0.5, end:0.2}}>
                    <Image
                        src={girlInChairImage}
                        alt="Girl In Chair Image"
                        width={400}
                        height={300}
                    />
                </ParallaxLayer> */}
                <ParallaxLayer offset={0} speed={0.05} style={{backgroundColor:"#eae5df", padding:"150px"}}>
                    <text style={{fontSize:"40px"}}>Here's a few things about me!</text>
                </ParallaxLayer>
                <ParallaxLayer offset={0.9} speed={2} factor={2.9} style={{backgroundColor:"thistle", paddingTop:"30px"}}>
                    <text style={{fontSize:"20px"}}>If you're curious, then keep scolling ^</text>
                    <div className='about-card-container'>
                        <AboutCard header="Writing" cardCover={<></>} tagLabel="# 1" contentHeader={constants.about1} save={false} contentFooter=""/>
                        <AboutCard header="Procrastination" cardCover={<></>} tagLabel="# 2" contentHeader={constants.about2} save={true} contentFooter=""/>
                        <AboutCard header="Degree" tagLabel="# 3" contentHeader={constants.about3} save={false} contentFooter=""/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5} style={{backgroundColor:"darkgrey"}}>
                    <text>{constants.about1}</text>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.5} style={{backgroundColor:"bisque"}}>
                    <text>{constants.about2}</text>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}
  
export default About;