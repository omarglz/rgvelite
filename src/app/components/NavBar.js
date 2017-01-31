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
		if (this.props.children.props.location.pathname === "/") {
			title_text="";
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
					      <Link to={"/programs"}    onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">programs</Link>
			          <Link to={"/tournaments"} onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">tournaments</Link>
						  	<Link to={"/rankings"}    onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">rankings</Link>
			          <Link to={"/gallery"}     onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">gallery</Link>
			          <Link to={"/about-us"}  onClick={() => this.hideDrawer()} className="pv3 tc f3 fw3 tracked link white no-underline bg-animate hover-bg-white-80 hover-hot-pink">about us</Link>
			    </nav>
			  </div>

			  <main className="mdl-layout__content">
			    <div className="page-content">
			    	{this.props.children}
			    </div>
			    <div className="mdl-layout-spacer"></div>
			    <footer className="mdl-mini-footer">
				  
				  <div className="ph2-ns">
				    <div className="dtc pv2 fn-l fl w-auto-l w-100">
				      <h2 className="f4 fw3">© 2017 RGV Elite Tennis Academy</h2>
				    </div>
				    <div className="dtc pv2 pl5-l">
				      <h2 className="dib f5 f4-ns fw3 pr3 w-auto-ns w-100">
						<i className="material-icons dib v-mid green pr2">phone</i>(956) 240-6058
					  </h2>
					  <h2 className="dib f5 f4-ns fw3 pr3 w-auto-ns w-100">
						<i className="material-icons dib v-mid blue pr2">mail</i>hello@rgvelite.com
					  </h2>
					  <h2 className="dib f5 f4-ns fw3 w-auto-ns w-100">
						<i className="material-icons dib v-mid red pr2">location_on</i>Bentsen Palm Community Park, Mission, TX
					  </h2>
				    </div>
				  </div>

				  {/*<div className="mdl-mini-footer__left-section">
				    <h2 className="f3 fw3">© 2017 RGV Elite Tennis Academy</h2>
				  </div>
				  <div className="mdl-mini-footer__right-section">
					<h2 className="fl w-third-ns w-100 f5-contact f4-ns fw3">
						<i className="material-icons dib v-mid red pr2">location_on</i>Bentsen Palm Community Park, Mission, TX
					</h2>
					<h2 className="fl w-third-ns w-100 f5-contact f4-ns fw3">
						<i className="material-icons dib v-mid red pr2">location_on</i>Bentsen Palm Community Park, Mission, TX
					</h2>
				  </div>
				  <div className="cf db footer-contact-section">
					<h2 className="fl w-third-ns w-100 f5-contact f4-ns fw3">
						<i className="material-icons dib v-mid green pr2">phone</i>(956) 240-6058
					</h2>
					<h2 className="fl w-third-ns w-100 f5-contact f4-ns fw3">
						<i className="material-icons dib v-mid blue pr2">email</i>hello@rgvelite.com
					</h2>
					<h2 className="fl w-third-ns w-100 f5-contact f4-ns fw3">
						<i className="material-icons dib v-mid red pr2">location_on</i>Bentsen Palm Community Park, Mission, TX
					</h2>
				  </div>*/}
				</footer>
				{ back_to_top }
				{ back_to_top_rankings }
			  </main>
			</div>
		);
	}
}