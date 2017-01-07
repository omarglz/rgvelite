import React from 'react';
import { Link } from 'react-router';

export class NavBar extends React.Component {
	render() {
	    return (
	    	<div>
	    		{/* ------------ COMMENTED OUT NAV BAR ----------------*/}

	    		<header className="bg-white black-80 tc pv4 w-100">
	    		  <div>
		    		  <img src={"http://tachyons.io/img/logo.jpg"} className="br3 ba b--black-10 h3 w3" />
					  <h1 className="mt2 mb0 f3 ttu tracked">RGV Elite Tennis Academy</h1>
	    		  </div>
				  <nav className="bt bb tc mw7 center mt4">
				    <Link to={"/schedules"}   className="f6 f5-l link bg-animate black-80 hover-bg-blue hover-white dib pa3 ph4-l">Schedules</Link>
				    <Link to={"/tournaments"} className="f6 f5-l link bg-animate black-80 hover-bg-blue hover-white dib pa3 ph4-l">Tournaments</Link>
				    <Link to={"/rankings"}    className="f6 f5-l link bg-animate black-80 hover-bg-blue hover-white dib pa3 ph4-l">Rankings</Link>
				    <Link to={"/gallery"}     className="f6 f5-l link bg-animate black-80 hover-bg-blue hover-white dib pa3 ph4-l">Gallery</Link>
				    <Link to={"/contact"}     className="f6 f5-l link bg-animate black-80 hover-bg-blue hover-white dib pa3 ph4-l">Contact</Link>
				  </nav>
				</header>
							
				{/*<nav className="db dt-l w-100 border-box pa3">
				  <img src={"http://tachyons.io/img/logo.jpg"} className="db pv2 dtc-l center w-75-l tc tr-l br3 b--black-10 h2 w2" />
				  <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l f6 f5-l dib" title="Home">
				  	RGV Elite Tennis Academy
				  </a>
				  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
				    <Link to={"/schedules"}   className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">Schedules</Link>
				    <Link to={"/tournaments"} className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">Tournaments</Link>
				    <Link to={"/Rankings"}    className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">Rankings</Link>
				    <Link to={"/gallery"}     className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">Gallery</Link>
				    <Link to={"/"} className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l">Contact</Link>
				  </div>
				</nav>
				*/}
	    	</div>		
		);
	}
}