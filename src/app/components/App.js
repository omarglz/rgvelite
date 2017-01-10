import React from 'react';

import { NavBar } from './components/NavBar.js';
import { Schedules } from './components/Schedules.js';
import { Root } from './components/Root.js';
import { Tournaments } from './components/Tournaments.js';
import { Gallery } from './components/Gallery.js';
import { Rankings } from './components/Rankings.js';
import { Contact } from './components/Contact.js';

class App extends React.Component {
    constructor() {
        super();
    }

    changeUsername(newName) {

    }

    render() {
        return (
            <div>
                <NavBar />
                <Schedules />
            </div>

        );
    }
}