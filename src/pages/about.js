import { Button, ListGroup } from 'react-bootstrap';
import { BookmarkHeart, Twitter, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import NavBar from '../components/navbar';
import * as constants from './constants';

function About() {
    return (
        <>
            <NavBar/>
            <ListGroup as="ol" numbered style={{paddingTop:"3%"}}>
                <ListGroup.Item as="li">{constants.about1}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about2}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about3}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about4}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about5}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about6}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about7}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about8}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about9}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about10}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about11}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about12}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about13}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about14}</ListGroup.Item>
                <ListGroup.Item as="li">{constants.about15}</ListGroup.Item>
            </ListGroup>
        </>
    );
}
  
export default About;