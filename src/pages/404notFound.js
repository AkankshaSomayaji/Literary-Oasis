import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <div className='notfound-body'>
            <Button variant="outline-accent" style={{color:"#A9714B", borderColor:"#A9714B", pointerEvents:"none"}}>404 not found</Button>
            <div>
                <h3 style={{marginBottom:"10px"}}>Oops the page does not exist!</h3>
                <div>Sorry, the page you are looking for doesn't exist.</div>
                <div>Let's find a better place for you to go.</div>
            </div>
            <Button variant="outline-accent" className='notfound-gohome' onClick={() => navigate("/")}>Back to Home</Button>
        </div>
    )
}

export default NotFoundPage;