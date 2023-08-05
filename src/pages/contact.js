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
                    <text style={{paddingLeft:"2em"}}>{constants.contact1_1}</text>
                    <text>{constants.contact2}</text>
                    <text style={{paddingLeft:"2em"}}>{constants.contact2_1}</text>
                    <text>{constants.contact3}</text>
                    <text style={{paddingLeft:"2em"}}>{constants.contact3_1}</text>
                    <text style={{paddingLeft:"4em"}}>{constants.contact3_1_1}</text>
                    <text style={{paddingLeft:"2em"}}>{constants.contact3_2}</text>
                    <text style={{paddingLeft:"4em"}}>{constants.contact3_2_1}</text>
                    <text style={{paddingLeft:"2em"}}>{constants.contact3_3}</text>
                    <text style={{paddingLeft:"4em"}}>{constants.contact3_3_1}</text>
                    <text style={{paddingLeft:"4em"}}>{constants.contact3_3_2}</text>
                    <text style={{paddingLeft:"4em"}}>{constants.contact3_3_3}</text>
                </div>
            </div>
        </div>
    );
}
  
export default Contact;