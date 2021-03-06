import React from 'react'
import { Link } from 'react-router-dom'
import defaultImage from '../images/room-1.jpeg'
import propTypes from 'prop-types'
import RoomsContainer from '../components/RoomsContainer'
export default function Room({ room }) {
    const { name, slug, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImage} alt="Single room" />
                <div class="price-top">
                    <h6>${price}</h6>
                    <p>Per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}
Room.propTypes = {
    room: propTypes.shape(
        {
            name: propTypes.string.isRequired,
            slug: propTypes.string.isRequired,
            images: propTypes.arrayOf(propTypes.string),
            price: propTypes.number.isRequired,
        }
    )
}