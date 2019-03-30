import React, {Component} from 'react';
import './App.css';

import Header from './components/Header'
import Catalog from './components/Catalog'

class App extends Component {
  render() {
    return (
        <main>

          <Header />

          <Catalog />

        </main>
    );
  }
}

export default App;
