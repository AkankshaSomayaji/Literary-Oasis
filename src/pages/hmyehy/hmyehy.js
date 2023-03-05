import { Image } from 'react-bootstrap';
import cover from '../../images/cover.png';

const HMYEHY = () => {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Image
                src={cover}
                alt="Cover Image"
                style={{height:"100vh"}}
            />
            <div style={{background:"repeating-linear-gradient(90deg, pink, chocolate 0.024px)", width:"12px"}}/>
            <Image
                src={cover}
                alt="Cover Image"
                style={{height:"100vh"}}
            />
        </div>
    )
}

export default HMYEHY;