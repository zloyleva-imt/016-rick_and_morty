import React, {Component} from 'react';

import './style.css';

export default class FilterCharcter extends Component {

    state = {
        name: "",
        gender: "",
    };

    render() {
        const {filterCharacters} = this.props;

        return (
            <div className="Filter__Wrapper">
                <h2 className="Filter__Wrapper_Title">Search characters</h2>
                <form action="" className="Form__Wrapper_container" onSubmit={(event) => {
                    this.submitFilterHandler(event, filterCharacters)
                }}>
                    <div className="Input__Wrapper">
                        <label htmlFor="search_name" className="Label__InputText">Name:</label>
                        <input id="search_name" type="text" className="Input__SearchText"
                               placeholder="Enter name of character" onInput={this.inputNameHandler}/>
                    </div>
                    <div className="Input__Wrapper">
                        <div className="Label__For_Radio">gender:</div>
                        <label className="Label__InputText">Male
                            <input type="radio" className="Input__Radio_select" value="male"
                                   name="gender" onChange={this.changeGenderHandler}/>
                        </label>
                        <label className="Label__InputText">Female
                            <input type="radio" className="Input__Radio_select" value="female"
                                   name="gender" onChange={this.changeGenderHandler}/>
                        </label>
                        <label className="Label__InputText">Genderless
                            <input type="radio" className="Input__Radio_select" value="genderless"
                                   name="gender" onChange={this.changeGenderHandler}/>
                        </label>
                        <label className="Label__InputText">Unknown
                            <input type="radio" className="Input__Radio_select" value="unknown"
                                   name="gender" onChange={this.changeGenderHandler}/>
                        </label>
                    </div>
                    <button className="Btn__Filter_data">Filter</button>
                </form>
            </div>
        );
    }

    changeGenderHandler = (e) => {
        console.log(e.target.value);
    }

    inputNameHandler = (e) => {
        console.log(e.target.value);

        this.setState({
            name: e.target.value
        })
    };

    submitFilterHandler = (e, filterCharacters) => {
        console.log("submitFilterHandler");
        e.preventDefault();

        if (this.hasDataToFilter(e)) {
            const search = this.getSearchValue(e);
            const gender = this.getRadioValue(e);

            const o = {};

            if (search) {
                o.name = search
            }
            if (gender) {
                o.gender = gender
            }

            filterCharacters(o);
        }

    };

    getRadioValue = (e) => {
        return [...e.target].filter(el => el.checked).length > 0 ? [...e.target].filter(el => el.checked)[0].value : ""
    };

    getSearchValue = (e) => {
        return e.target[0].value;
    };

    hasDataToFilter = (e) => this.getSearchValue(e) || this.getRadioValue(e);
}