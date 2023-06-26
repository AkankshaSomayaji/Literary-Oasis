import "./aboutCard.css";

function AboutCard(props) {
    return (
        <div className="about-comp-card">
            <div className="about-comp-content">
                <div className="about-comp-back">
                    <div className="about-comp-back-content">
                        {props.cardCover}
                        <strong>{props.header}</strong>
                    </div>
                </div>

                <div className="about-comp-front">
                    <div className="about-comp-img">
                        <div className="about-comp-circle" />
                        <div className="about-comp-circle" id="about-comp-right" />
                        <div className="about-comp-circle" id="about-comp-bottom" />
                    </div>

                    <div className="about-comp-front-content">
                        {props.tagLabel &&
                            <small className="about-comp-badge">{props.tagLabel}</small>
                        }
                        <div className="about-comp-description">
                            <div className="about-comp-title">
                                <strong>{props.contentHeader}</strong>
                            </div>
                            <p className="about-comp-card-footer">
                                {props.contentFooter}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;