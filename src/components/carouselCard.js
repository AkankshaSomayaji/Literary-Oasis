import "./carouselCard.css";

function CarouselCard(props) {
    return (
        <div class="carousel-card" info={props.info} style={{'--rgb-value':props.bg, '--rgb-value-hover':props.bgOnHover}}>{props.title}</div>
    )
}

export default CarouselCard;