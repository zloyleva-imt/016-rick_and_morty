import React, {Component} from 'react';
import './App.css';

import About from './components/About';
import Home from './components/Home';
import Docs from './components/Docs';

import {BrowserRouter, Route} from 'react-router-dom';
import Menu from "./components/Menu";

class App extends Component {

    render() {

        return (

            <BrowserRouter>

                <Menu />
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/docs" component={Docs}/>

            </BrowserRouter>

        );
    }
}

export default App;
