import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import './style.css';

export default assignPropTypes({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
})((props) => {

    const {image, name, id, status, species, gender, origin, location} = props;

    return (
        <article className="CharacterCard__Wrapper">

            <div className="CharacterCard__ImgWrapper">
                <div className="card-image">
                    <img src={image} alt={name} />
                </div>
                <div className="CharacterCard__Title">
                    <h2 className="CharacterCard__Name">{name}</h2>
                    <p className="CharacterCard__Description">id: {id} - created a year ago</p>
                </div>
            </div>

            <div className="CharacterCard__InfoWrapper">
                <div className="CharacterCard__TextWrapper">
                    <span>STATUS</span>
                    <p>{status}</p>
                </div>
                <div className="CharacterCard__TextWrapper">
                    <span>SPECIES</span>
                    <p>{species}</p>
                </div>
                <div className="CharacterCard__TextWrapper">
                    <span>GENDER</span>
                    <p>{gender}</p>
                </div>
                <div className="CharacterCard__TextWrapper">
                    <span>ORIGIN</span>
                    <p>{origin.name}</p>
                </div>
                <div className="CharacterCard__TextWrapper">
                    <span>LAST LOCATION</span>
                    <p>{location.name}</p>
                </div>
            </div>

        </article>
    );
});