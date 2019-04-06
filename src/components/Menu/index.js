import React from 'react';

import './style.css';

import {Link} from 'react-router-dom';

export default () => {
    return (
        <header>
            <nav className="Header__Nav">
                <ul className="Header__List">
                    <li><Link to="/" className="Header__Link">Home</Link></li>
                    <li><Link to="/about" className="Header__Link">About</Link></li>
                    <li><Link to="/docs" className="Header__Link">Docs</Link></li>
                </ul>
            </nav>
        </header>
    );
}