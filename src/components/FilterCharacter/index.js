import React from 'react';

import './style.css';

export default (props) => {

    const {filterCharacters} = props;

    return (
        <div className="Filter__Wrapper">
            <h2 className="Filter__Wrapper_Title">Search characters</h2>
            <form action="" className="Form__Wrapper_container" onSubmit={(event) => {submitFilterHandler(event,filterCharacters)}}>
                <div className="Input__Wrapper">
                    <label htmlFor="search_name" className="Label__InputText">Name:</label>
                    <input id="search_name" type="text" className="Input__SearchText" placeholder="Enter name of character"/>
                </div>
                <div className="Input__Wrapper">
                    <div className="Label__For_Radio">gender:</div>
                    <label className="Label__InputText">Male
                        <input type="radio" className="Input__Radio_select" value="male" name="gender"/>
                    </label>
                    <label className="Label__InputText">Female
                        <input type="radio" className="Input__Radio_select" value="female" name="gender"/>
                    </label>
                    <label className="Label__InputText">Genderless
                        <input type="radio" className="Input__Radio_select" value="genderless" name="gender"/>
                    </label>
                    <label className="Label__InputText">Unknown
                        <input type="radio" className="Input__Radio_select" value="unknown" name="gender"/>
                    </label>
                </div>
                <button className="Btn__Filter_data">Filter</button>
            </form>
        </div>
    );
}

const submitFilterHandler = (e, filterCharacters) => {
    console.log("submitFilterHandler");
    e.preventDefault();

    if(hasDataToFilter(e)){
        const search = getSearchValue(e);
        const gender = getRadioValue(e);

        const o = {};

        if(search){o.name = search}
        if(gender){o.gender = gender}

        filterCharacters(o);
    }

};

const getRadioValue = (e) => {
    return [...e.target].filter(el => el.checked).length > 0 ? [...e.target].filter(el => el.checked)[0].value:""
};

const getSearchValue = (e) => {
    return e.target[0].value;
};

const hasDataToFilter = (e) => getSearchValue(e) || getRadioValue(e);