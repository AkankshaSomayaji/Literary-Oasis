import { Button, Container, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';
import { BookmarkHeart, Twitter, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';

function NavBar() {
    return (
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/home" style={{marginLeft:"10px"}}>
                    <BookmarkHeart/>
                    Literary Oasis
                </Navbar.Brand>
            </Container>
            <Container>
                <Nav className="me-auto">
                    <Stack direction="horizontal" gap={4}>
                        <Nav.Link href="/home" color="accent">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Stack>
                </Nav>
            </Container>
            <Nav className="me-auto">
                <Stack direction="horizontal" gap={2} style={{marginRight:"20px"}}>
                    <Button variant="outline-accent"><Twitter/></Button>
                    <Button variant="outline-accent"><Facebook/></Button>
                    <Button variant="outline-accent"><Instagram/></Button>
                    <Button variant="outline-accent"><Linkedin/></Button>
                </Stack>
            </Nav>
        </Navbar>
    );
  }
  
  export default NavBar;