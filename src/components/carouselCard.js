import "./carouselCard.css";

function CarouselCard(props) {
    return (
        <div class="carousel-card" info={props.info}>{props.title}</div>
    )
}

export default CarouselCard;