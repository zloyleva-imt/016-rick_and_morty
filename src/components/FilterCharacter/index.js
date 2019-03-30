import React from 'react';

import './style.css';

export default () => {
    return (
        <div className="Filter__Wrapper">
            <h2 className="Filter__Wrapper_Title">Search characters</h2>
            <form action="" className="Form__Wrapper_container">
                <div className="Input__Wrapper">
                    <label htmlFor="search_name" className="Label__InputText">Name:</label>
                    <input id="search_name" type="text" className="Input__SearchText" placeholder="Enter name of character"/>
                </div>
                <div className="Input__Wrapper">
                    <label className="Label__InputText">Male
                        <input type="radio" className="Input__Radio_select" name="gender"/>
                    </label>
                    <label className="Label__InputText">Female
                        <input type="radio" className="Input__Radio_select" name="gender"/>
                    </label>
                    <label className="Label__InputText">Genderless
                        <input type="radio" className="Input__Radio_select" name="gender"/>
                    </label>
                    <label className="Label__InputText">Unknown
                        <input type="radio" className="Input__Radio_select" name="gender"/>
                    </label>
                </div>
            </form>
        </div>
    );
}