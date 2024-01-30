/**
 * Component that displays the results of a playlist search
 */
import PropTypes from 'prop-types';
import "./CardPlaylist.css";

export default function Card (props) {
    return (
        <a href="./" className="cards">
            <div className="cards" style={{background: props.bgColor}}>
                <img src={props.image} alt="" />
                <span>{props.title}</span>
            </div>
        </a>  
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired
};
