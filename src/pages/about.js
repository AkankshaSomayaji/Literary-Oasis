import './general.css';
import { Image } from 'react-bootstrap';
import NavBar from '../components/navbar';
import * as constants from './constants';
import girlInChairImage from '../images/girl-chair-laptop.png';
import girlUnicornImage from '../images/girl-and-unicorn-nobg.png';
import girlCatImage from '../images/girl-and-cat-nobg.png';

function About() {
    return (
        <div className="about-container">
            <NavBar/>
            <div style={{backgroundColor:"#eae5df", marginTop:"10px"}}>
                <div className='about-section'>
                    <Image
                        src={girlInChairImage}
                        alt="Girl In Chair Image"
                        width={400}
                        height={300}
                    />
                    <div>
                        <div className='about-code'>{constants.about1}</div>
                        <div className='about-code'>{constants.about2}</div>
                        <div className='about-code'>{constants.about3}</div>
                        <div className='about-code'>{constants.about4}</div>
                        <div className='about-code'>{constants.about5}</div>
                    </div>
                </div>
                <div className='about-section'>
                    <div>
                        <div className='about-code'>{constants.about6}</div>
                        <div className='about-code'>{constants.about7}</div>
                        <div className='about-code'>{constants.about8}</div>
                        <div className='about-code'>{constants.about9}</div>
                        <div className='about-code'>{constants.about10}</div>
                    </div>
                    <Image
                        src={girlUnicornImage}
                        alt="Girl And Unicorn Image"
                        width={400}
                        height={300}
                    />
                </div>
                <div className='about-section'>
                    <Image
                        src={girlCatImage}
                        alt="Girl And Cat Image"
                        width={400}
                        height={300}
                    />
                    <div>
                        <div className='about-code'>{constants.about11}</div>
                        <div className='about-code'>{constants.about12}</div>
                        <div className='about-code'>{constants.about13}</div>
                        <div className='about-code'>{constants.about14}</div>
                        <div className='about-code'>{constants.about15}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default About;