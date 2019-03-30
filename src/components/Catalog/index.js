import React from 'react';

import './style.css';

import CharacterCard from '../CharacterCard'

export default () => {
    return (
        <section className="Home__ShowcaseWrapper">
            <div className="Home__ShowcaseInner">

                <CharacterCard />

            </div>
        </section>
    );
}