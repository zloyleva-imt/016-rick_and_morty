import React from 'react';

import './style.css';

export default (props) => {
    return (
        <article className="CharacterCard__Wrapper">

            <div className="CharacterCard__ImgWrapper">
                <div className="card-image">
                    <img src="https://rickandmortyapi.com/api/character/avatar/37.jpeg" alt="Beth Sanchez" />
                </div>
                <div className="CharacterCard__Title">
                    <h2 className="CharacterCard__Name">Beth Sanchez</h2>
                    <p className="CharacterCard__Description">id: 37 - created a year ago</p>
                </div>
            </div>

            <div className="CharacterCard__InfoWrapper">
                <div className="CharacterCard__TextWrapper">
                    <span>STATUS</span>
                    <p>Alive</p>
                </div>
                <div className="CharacterCard__TextWrapper">
                    <span>SPECIES</span>
                    <p>Human</p>
                </div>
                <div className="CharacterCard__TextWrapper">
                    <span>GENDER</span>
                    <p>Female</p>
                </div>
                <div className="CharacterCard__TextWrapper">
                    <span>ORIGIN</span>
                    <p>Earth (C-500A)</p>
                </div>
                <div className="CharacterCard__TextWrapper">
                    <span>LAST LOCATION</span>
                    <p>Earth (C-500A)</p>
                </div>
            </div>

        </article>
    );
}