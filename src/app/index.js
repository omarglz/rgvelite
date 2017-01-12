import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store.js';
import { NavBar } from './components/NavBar.js';
import { Schedules } from './components/Schedules.js';
import { Root } from './components/Root.js';
import { Gallery } from './components/Gallery.js';
import { Contact } from './components/Contact.js';
import Tournaments from './containers/Tournaments.js';
import Rankings from './containers/Rankings.js';
import { createStore } from 'redux';

render (
    <Provider store={store}>
    	<Router history={browserHistory}>
    		<Route path={"/"} component={Root}>
    			<IndexRoute component={Schedules} />
    		   	<Route path={"schedules"} component={Schedules} />
    			<Route path={"tournaments"} component={Tournaments} />
    			<Route path={"gallery"} component={Gallery} />
    			<Route path={"rankings"} component={Rankings} />
    			<Route path={"contact"} component={Contact} />
    		</Route>
    	</Router>
    </Provider>,
    window.document.getElementById("app"));
