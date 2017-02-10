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
		
		var title_text = "RGV Elite Tennis Academy";
		
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
			footer_contact = null;
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
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			  <Header title={title_text} />
			  <div className="mdl-layout__drawer">
				  <header className="mdl-layout__drawer-header">
				    <div className="mdl-layout__header-row">
						  <div className="mdl-layout__drawer-button">
								<i className="material-icons white" onClick={() => this.hideDrawer()}>close</i>
						  </div>
				    </div>
				  </header>
			    <nav className="mdl-navigation">
			    	  <Link to={"/"}    onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">home</Link>
			    	  <Link to={"/about-us"}  onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">about us</Link>
					      <Link to={"/programs"}    onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">programs</Link>
			          <Link to={"/tournaments"} onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">tournaments</Link>
						  	<Link to={"/rankings"}    onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">rankings</Link>
			          <Link to={"/gallery"}     onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">gallery</Link>
			    </nav>
			  </div>

			  <main className="mdl-layout__content">
			    <div className="page-content">
			    	{this.props.children}
			    </div>
			    <div className="mdl-layout-spacer"></div>
			    <footer className="mdl-mini-footer">
				  <div className="ph2-ns">
				    <div className="dtc pt2 fn-l fl w-auto-l w-100">
				      <h2 className="f4 fw3">© 2017 RGV Elite Tennis Academy</h2>
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