import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store.js';
import { Home } from './components/Home.js';
import { Programs } from './components/Programs.js';
import { Root } from './components/Root.js';
import { Gallery } from './components/Gallery.js';
import { About } from './components/About.js';
import { SignIn } from './components/SignIn.js';
import Admin from './containers/Admin.js';
import Tournaments from './containers/Tournaments.js';
import Rankings from './containers/Rankings.js';

render (
    <Provider store={store}>
    	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    		<Route path={"/"} component={Root}>
    			<IndexRoute component={Home} />
                <Route path={"home"} component={Home} />
    		   	<Route path={"programs"} component={Programs} />
    			<Route path={"tournaments"} component={Tournaments} />
    			<Route path={"gallery"} component={Gallery} />
    			<Route path={"rankings"} component={Rankings} />
    			<Route path={"about-us"} component={About} />
                <Route path={"sign-in"} component={SignIn} />
                <Route path={"admin"} component={Admin} />
    		</Route>
    	</Router>
    </Provider>,
    window.document.getElementById("app"));
