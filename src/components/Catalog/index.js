import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import './style.css';

import CharacterCard from '../CharacterCard'

export default assignPropTypes({
    characters: PropTypes.array.isRequired,
})(({characters}) => {
    return (
        <section className="Home__ShowcaseWrapper">
            <div className="Home__ShowcaseInner">

                {
                    characters.map(el => (<CharacterCard {...el} key={el.id} />))
                }

            </div>
        </section>
    );
})