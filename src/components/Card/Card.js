import './Card.css'

const Card = (props) => {
    return (
        <div className = "Card">
            <div className="Card-image">
                <img src={props.imageUrl}></img>      
            </div>
            <div className='Card-info' >
                <span><i class="fa fa-map-marker" aria-hidden="true"></i> {props.location}</span>
                <span className='Card-link'> <a href = {props.googleMapsUrl}>View on google maps</a></span>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card