import "./carouselCard.css";

function CarouselCard(props) {
    const handleClick = () => {
        window.location.href = props.hlink;
    };

    return (
        <div class="carousel-card" info={props.info} style={{'--rgb-value':props.bg, '--rgb-value-hover':props.bgOnHover}} onClick={handleClick}>{props.title}</div>
    )
}

export default CarouselCard;