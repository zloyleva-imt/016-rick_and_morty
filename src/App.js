import React, {Component} from 'react';
import './App.css';

import Menu from './components/Menu'
import Header from './components/Header'
import Catalog from './components/Catalog'
import FilterCharacter from './components/FilterCharacter'
import axios from 'axios';

class App extends Component {

    constructor(props){
        super(props);

        this.filterCharacters = this.filterCharacters.bind(this);
    }
    state = {
        apiUrl:"https://rickandmortyapi.com/api/character/",
        characters: [],
    };

    render() {

        const {characters} = this.state;

        return (
            <main>

                <Menu />

                <Header />

                <FilterCharacter filterCharacters={this.filterCharacters}/>

                <Catalog characters={characters}/>

            </main>
        );
    }

    componentDidMount() {
        const {apiUrl} = this.state;
        this.fetchApiData(apiUrl);
    }

    filterCharacters(filterObject){
        const queryArr = [];
        for(const key in filterObject){
            queryArr.push(`${key}=${filterObject[key]}`);
        }

        const query = "?" + queryArr.join("&");

        const {apiUrl} = this.state;
        this.fetchApiData(apiUrl + query);
    }

    fetchApiData(apiUrl){
        axios.get(apiUrl)
            .then(res => {
                console.log(res.data);

                this.setState({
                    characters: res.data.results
                });
            });
    }

}

export default App;
