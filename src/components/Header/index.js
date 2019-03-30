import React from 'react';

import './style.css';

export default () => {
    return (
        <section className="Home__HeroWrapper">
            <h1 className="Home__Title">The Rick and Morty API</h1>
            <div className="Home__SubTitleWrapper">
                <h2 className="Home__SubTitle">Hey, did you ever want to hold a Terry fold?</h2>
                <h2 className="Home__HiddenSubTitle">      I got one right here, grab my terry flap     </h2>
            </div>
        </section>
    );
}