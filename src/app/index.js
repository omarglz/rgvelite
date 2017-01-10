import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import { AwesomeComponent } from './components/AwesomeComponent.js';
import { NavBar } from './components/NavBar.js';
import { Schedules } from './components/Schedules.js';
import { Root } from './components/Root.js';
import { Tournaments } from './components/Tournaments.js';
import { Gallery } from './components/Gallery.js';
import { Rankings } from './components/Rankings.js';
import { Contact } from './components/Contact.js';

class App extends React.Component {
  render () {
    return (
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
    );
  }
}

render(<App/>, window.document.getElementById("app"));
