import './general.css';
import { Image } from 'react-bootstrap';
import NavBar from '../components/navbar';
import chatImage from '../images/girl-boy-chat-nobg.png';
import * as constants from './constants';

function Contact() {
    return (
        <div>
            <NavBar/>
            <div className='contact-body'>
                <Image
                    className="d-block"
                    src={chatImage}
                    alt="Chatting Image"
                    width={600}
                    height={500}
                />
                <div className='contact-code'>
                    <text>{constants.contact1}</text>
                    <text>{constants.contact2}</text>
                    <text>{constants.contact3}</text>
                    <text style={{paddingLeft:"20px"}}>{constants.contact4}</text>
                    <text style={{paddingLeft:"20px"}}>{constants.contact5}</text>
                    <text style={{paddingLeft:"20px"}}>{constants.contact6}</text>
                    <text style={{paddingLeft:"40px"}}>{constants.contact7}</text>
                    <text style={{paddingLeft:"40px"}}>{constants.contact8}</text>
                    <text style={{paddingLeft:"40px"}}>{constants.contact9}</text>
                    <text style={{paddingLeft:"20px"}}>{constants.contact10}</text>
                </div>
            </div>
        </div>
    );
}
  
export default Contact;