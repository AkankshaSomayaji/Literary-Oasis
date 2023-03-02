import { Container, Image } from 'react-bootstrap';
import NavBar from '../components/navbar';
import chatImage from '../images/girl-boy-chat.png';
import * as constants from './constants';

function Contact() {
    return (
        <>
            <NavBar/>
            <Container style={{backgroundColor:"#eae5df"}}>
                <Image
                    className="d-block w-100"
                    src={chatImage}
                    alt="Book One"
                    width={700}
                    height={500}
                />
                <Container style={{display:"flex", flexDirection:"column", alignItems:"flex-start", paddingRight:"0px"}}>
                    <p>{constants.contact1}</p>
                    <p>{constants.contact2}</p>
                    <p>{constants.contact3}</p>
                    <p>{constants.contact4}</p>
                </Container>
            </Container>
        </>
    );
}
  
export default Contact;