import './general.css';
import { Image } from 'react-bootstrap';
import NavBar from '../components/navbar';
import chatImage from '../images/girl-boy-chat-nobg.png';
import * as constants from './constants';

function Contact() {
    return (
        <div className="contact-container">
            <NavBar/>
            <div style={{backgroundColor:"#eae5df", marginTop:"10px", display:"flex", alignItems:"center", minHeight:"94vh"}}>
                <Image
                    className="d-block"
                    src={chatImage}
                    alt="Chatting Image"
                    width={600}
                    height={500}
                />
                <div className='contact-code'>
                    <p>{constants.contact1}</p>
                    <p>{constants.contact2}</p>
                    <p>{constants.contact3}</p>
                    <p style={{paddingLeft:"20px"}}>{constants.contact4}</p>
                    <p style={{paddingLeft:"20px"}}>{constants.contact5}</p>
                    <p style={{paddingLeft:"20px"}}>{constants.contact6}</p>
                    <p style={{paddingLeft:"40px"}}>{constants.contact7}</p>
                    <p style={{paddingLeft:"40px"}}>{constants.contact8}</p>
                    <p style={{paddingLeft:"40px"}}>{constants.contact9}</p>
                    <p style={{paddingLeft:"20px"}}>{constants.contact10}</p>
                </div>
            </div>
        </div>
    );
}
  
export default Contact;