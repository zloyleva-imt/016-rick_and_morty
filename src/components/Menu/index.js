import React from 'react';

import './style.css';

export default () => {
    return (
        <header>
            <nav className="Header__Nav">
                <ul className="Header__List">
                    <li><a href="" className="Header__Link">Home</a></li>
                    <li><a href="" className="Header__Link">About</a></li>
                    <li><a href="" className="Header__Link">Docs</a></li>
                </ul>
            </nav>
        </header>
    );
}