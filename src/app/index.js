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
import { Strategies } from './components/Strategies.js';
import { Admin } from './components/Admin.js';
import { Summer } from './components/Summer.js';
import Tournaments from './containers/Tournaments.js';
import Rankings from './containers/Rankings.js';
import UpdateRankings from './containers/UpdateRankings.js';
import UpdateTournaments from './containers/UpdateTournaments.js';
import UpdateGallery from './containers/UpdateGallery.js';

render (
    <Provider store={store}>
    	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    		<Route path={"/"} component={Root}>
    			<IndexRoute component={Home} />
                <Route path={"home"} component={Home} />
                <Route path={"summer-camp"} component={Summer} />
    		   	<Route path={"programs"} component={Programs} />
    			<Route path={"tournaments"} component={Tournaments} />
    			<Route path={"gallery"} component={Gallery} />
    			<Route path={"rankings"} component={Rankings} />
    			<Route path={"about-us"} component={About} />
                <Route path={"strategies"} component={Strategies} />
                <Route path={"sign-in"} component={SignIn} />
                <Route path={"admin"} component={Admin} />
                <Route path={"admin-rankings"} component={UpdateRankings} />
                <Route path={"admin-tournaments"} component={UpdateTournaments} />
                <Route path={"admin-gallery"} component={UpdateGallery} />         
    		</Route>
    	</Router>
    </Provider>,
    window.document.getElementById("app"));
