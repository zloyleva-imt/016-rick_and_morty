import React, {Component} from 'react';
import './App.css';

import Header from './components/Header'
import Catalog from './components/Catalog'
import FilterCharacter from './components/FilterCharacter'
import axios from 'axios';

class App extends Component {

    state = {
        apiUrl:"https://rickandmortyapi.com/api/character/",
        characters: [],
    };

    render() {

        const {characters} = this.state;

        return (
            <main>

                <Header />

                <FilterCharacter />

                <Catalog characters={characters}/>

            </main>
        );
    }

    componentDidMount() {
        const {apiUrl} = this.state;
        axios.get(apiUrl)
            .then(res => {
                console.log(res.data);

                this.setState({
                    characters: res.data.results
                })
            });
    }

}

export default App;
