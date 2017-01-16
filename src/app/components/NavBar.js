import React from 'react';
import { Link } from 'react-router';

export class NavBar extends React.Component {
	hideDrawer() {
	  var layout = document.querySelector('.mdl-layout');
	  layout.MaterialLayout.toggleDrawer();
	}

	render() {
	    return (
			<div>
				<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				  <header className="mdl-layout__header">
				    <div className="mdl-layout__header-row">
				      <span className="mdl-layout-title header-font-small">RGV Elite Tennis Academy</span>
				      {/* Add spacer, to align navigation to the right*/}
				      <div className="mdl-layout-spacer"></div>
				      {/* Navigation. We hide it in small screens.*/}
				      <nav className="mdl-navigation mdl-layout--large-screen-only">
				      	<Link to={"/programs"}   className="mdl-navigation__link">Programs</Link>
				        <Link to={"/tournaments"} className="mdl-navigation__link">Tournaments</Link>
								<Link to={"/rankings"}    className="mdl-navigation__link">Rankings</Link>
				        <Link to={"/gallery"}     className="mdl-navigation__link">Gallery</Link>
				        <Link to={"/contact-us"}     className="mdl-navigation__link">Contact Us</Link>
				      </nav>
				    </div>
				  </header>
				  <div className="mdl-layout__drawer">
				    <span id="drawer-icon" className="mdl-layout-title">
		          <img src={"http://i.imgur.com/K08Rx4F.png"}/>
		        </span>
				    <nav className="mdl-navigation">
				      <Link to={"/programs"}   onClick={() => this.hideDrawer()} className="mdl-navigation__link">Programs</Link>
		          <Link to={"/tournaments"} onClick={() => this.hideDrawer()} className="mdl-navigation__link">Tournaments</Link>
					  	<Link to={"/rankings"}    onClick={() => this.hideDrawer()} className="mdl-navigation__link">Rankings</Link>
		          <Link to={"/gallery"}     onClick={() => this.hideDrawer()} className="mdl-navigation__link">Gallery</Link>
		          <Link to={"/contact-us"}     onClick={() => this.hideDrawer()} className="mdl-navigation__link">Contact Us</Link>
				    </nav>
				  </div>
				  <main className="mdl-layout__content">
				    <div className="page-content">
				    	{this.props.children}
				    </div>
				    <div className="mdl-layout-spacer"></div>
				    <footer className="mdl-mini-footer">
					  <div className="mdl-mini-footer__left-section">
					    <div className="mdl-logo">© 2017 RGV Elite Tennis Academy</div>
					  </div>
					</footer>
				  </main>
				</div>
			</div>
		);
	}
}