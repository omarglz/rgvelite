import React from 'react';
import { Link } from 'react-router';
import { Header } from './RegularHeader.js';

export class NavBar extends React.Component {
	hideDrawer() {
	  const layout = document.querySelector('.mdl-layout');
	  layout.MaterialLayout.toggleDrawer();
	}

	render() {
		var back_to_top = null;
		if (this.props.children.props.location.pathname === "/tournaments") {
			back_to_top = (
				<div className="tr z-max fixed db bottom-l right-1 right-3-l">
					<a href={"#top"}>
						<button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab mdl-button--colored-custom">
						  <i className="material-icons">keyboard_arrow_up</i>
						</button>
					</a>
				</div>	
			)
		}

		var back_to_top_rankings = null;
		if (this.props.children.props.location.pathname === "/rankings") {
			back_to_top_rankings = (
				<div className="tr z-max fixed db bottom-l right-1 right-3-l">
					<a href={"#top"}>
						<button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab mdl-button--colored-custom-rankings">
						  <i className="material-icons">keyboard_arrow_up</i>
						</button>
					</a>
				</div>	
			)
		}
		
		var footer_contact = (
			<div className="dtc pb2 pl5-l">
			  <a href="tel:9567891144">
			      <h2 className="dib f5 f4-ns fw3 pr3 w-auto-ns footer-gray w-100 underline hover-blue">
					<i className="material-icons dib v-mid green pr2">phone</i>(956) 789-1144
				  </h2>
			  </a>
			  <a href="mailto:danieldelacruz71@hotmail.com" target="_blank">
				  <h2 className="dib f5 f4-ns fw3 pr3 w-auto-ns w-100 footer-gray underline hover-blue">
					<i className="material-icons dib v-mid blue pr2">mail</i>danieldelacruz71@hotmail.com
				  </h2>
			  </a>
			  <a href="https://www.google.com/maps/place/Bentsen+Palm+Community+Park,+Inspiration+Rd,+Mission,+TX+78572/@26.1980166,-98.363231,16z/data=!3m1!4b1!4m5!3m4!1s0x8665a9cc9d416ddd:0xbc33ecd102bfb138!8m2!3d26.1948335!4d-98.3560799">
				  <h2 className="dib f5 f4-ns fw3 w-auto-ns w-100 footer-gray underline hover-blue">
					<i className="material-icons dib v-mid red pr2">location_on</i>Bentsen Palm Community Park, Mission, TX
				  </h2>
			  </a>
		    </div>
		);
		if (this.props.children.props.location.pathname === "/") {
			footer_contact = (<Link to={"/sign-in"} className="f4 fw3 footer-gray no-underline">Sign In</Link>);
		}
		else if (this.props.children.props.location.pathname === "/about-us") {
			footer_contact = (
				<div className="dtc pb2 pl5-l">
				  <a href="https://www.google.com/maps/place/Bentsen+Palm+Community+Park,+Inspiration+Rd,+Mission,+TX+78572/@26.1980166,-98.363231,16z/data=!3m1!4b1!4m5!3m4!1s0x8665a9cc9d416ddd:0xbc33ecd102bfb138!8m2!3d26.1948335!4d-98.3560799">
					<h2 className="dib f5 f4-ns fw3 w-auto-ns w-100 footer-gray underline hover-blue">
						<i className="material-icons dib v-mid red pr2">location_on</i>Bentsen Palm Community Park, Mission, TX
				  	</h2>
				  </a>
			    </div>
		    );
		}

	    return (
			<div itemScope itemType="http://schema.org/LocalBusiness" className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			  <Header />
			  
			  <div className="mdl-layout__drawer">
				  <header className="mdl-layout__drawer-header">
				    <div className="mdl-layout__header-row">
						  <div className="mdl-layout__drawer-button">
								<i className="material-icons forrest-green" onClick={() => this.hideDrawer()}>close</i>
						  </div>
				    </div>
				  </header>
			    <div className="cf">
			    	  <Link to={"/"}    onClick={() => this.hideDrawer()} className="no-underline">
				    	  <h2 className="tc f3 fw4 link forrest-green no-underline bg-animate hover-bg-white-80">
							<i className="material-icons dib v-mid lh-copy pr2">home</i>
	    					<span className="dib v-mid lh-copy">Home</span>
	    				  </h2>
			    	  </Link>
			    	  <Link to={"/about-us"}  onClick={() => this.hideDrawer()} className="no-underline">
			    	  	<h2 className="tc f3 fw4 link forrest-green no-underline bg-animate hover-bg-white-80">
			    	  		<i className="material-icons dib v-mid lh-copy pr2">info</i>
	    					<span className="dib v-mid lh-copy">About Us</span>
			    	  	</h2>
			    	  </Link>
					  <Link to={"/programs"}    onClick={() => this.hideDrawer()} className="no-underline">
					  	<h2 className="tc f3 fw4 link forrest-green no-underline bg-animate hover-bg-white-80">
					  		<i className="material-icons dib v-mid lh-copy pr2">people</i>
	    					<span className="dib v-mid lh-copy">Programs</span>
					  	</h2>
					  </Link>
					  {/*<Link to={"/summer-camp"} onClick={() => this.hideDrawer()} className="no-underline">
			          	<h2 className="tc f3 fw4 link forrest-green no-underline bg-animate hover-bg-white-80">
							<i className="fa fa-sun-o dib v-mid lh-copy pr2"></i>
	    					<span className="dib v-mid lh-copy">Summer Camp</span>
			          	</h2>
			          </Link>*/}
			          <Link to={"/tournaments"} onClick={() => this.hideDrawer()} className="no-underline">
			          	<h2 className="tc f3 fw4 link forrest-green no-underline bg-animate hover-bg-white-80">
							<i className="fa fa-trophy dib v-mid lh-copy pr2"></i>
	    					<span className="dib v-mid lh-copy">Tournaments</span>
			          	</h2>
			          </Link>
					  <Link to={"/rankings"}    onClick={() => this.hideDrawer()} className="no-underline">
					  	<h2 className="tc f3 fw4 link forrest-green no-underline bg-animate hover-bg-white-80">
					  		<i className="material-icons dib v-mid lh-copy pr2">trending_up</i>
	    					<span className="dib v-mid lh-copy">Rankings</span>
					  	</h2>
					  </Link>
					  <Link to={"/strategies"}    onClick={() => this.hideDrawer()} className="no-underline">
					  	<h2 className="tc f3 fw4 link forrest-green no-underline bg-animate hover-bg-white-80">
					  		<i className="material-icons dib v-mid lh-copy pr2">lightbulb_outline</i>
	    					<span className="dib v-mid lh-copy">Strategies</span>
					  	</h2>
					  </Link>
			          <Link to={"/gallery"}     onClick={() => this.hideDrawer()} className="no-underline">
			          	<h2 className="tc f3 fw4 link forrest-green no-underline bg-animate hover-bg-white-80">
			          		<i className="material-icons dib v-mid lh-copy pr2">photo_camera</i>
	    					<span className="dib v-mid lh-copy">Gallery</span>
			          	</h2>
			          </Link>
			    </div>
			  </div>

			  <main className="mdl-layout__content">
			    <div className="page-content">
			    	{this.props.children}
			    </div>
			    <div className="mdl-layout-spacer"></div>
			    <footer className="mdl-mini-footer">
				  <div className="ph2-ns">
				    <div className="dtc pt2 fn-l fl w-auto-l w-100">
				      <h2 className="f4 fw3">© 2019 RGV Elite Tennis Academy</h2>
				    </div>

				    { footer_contact }

				  </div>
				</footer>
				{ back_to_top }
				{ back_to_top_rankings }
			  </main>
			</div>
		);
	}
}