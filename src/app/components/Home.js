import React from 'react';
import { Link } from 'react-router';

export class Home extends React.Component {
	componentDidUpdate() {
	    componentHandler.upgradeDom();
	}

	render() {
	    return (
			<div className="home-section mw9 center">


				<div className="home-title bg-dark-gray">
					<div className="home-title-overlay pa5 pa6-ns">
						<h1 className="db f-headline lh-solid tc fw3 mt0 pa0 white">rgv elite</h1>
						<h1 className="f3 lh-solid tc fw3 mv0 pa0 ttu white">tennis academy</h1>
					</div>
				</div>


				<div className="home-about bg-near-white cf pa3 pa5-ns dt-l">
					<div className="home-about-overlay pr5-l dtc-l v-mid-l">
						<h1 className="db f1-ns f2 lh-solid tc tl-l fw3 mt0 pa0 prim-text">Forming excellent athletes and even better people</h1>
						<h1 className="f3-ns f4 fw3 tc tl-l sec-text">
							We have been developing athletes in the Rio Grande Valley since 2009.
							We have over a decade of international coaching experience, and our players
							stand in the state rankings, national rankings, and ITF rankings. 
						</h1>
						<div className="tc tl-l mb0 pb4 pb0-l">
							<Link to={"/about-us"} className="custom-link mdl-typography--text-uppercase">
								LEARN MORE ABOUT US
								<i className="material-icons">chevron_right</i>
							</Link>
						</div>
					</div>
					<div className="dtc-l v-mid-l">
						<img src={"../images/elite2_edited.jpg"} className="fl w-100 shadow-5-ns" />
					</div>
				</div>


				<div className="home-programs bg-light-gray">
					<div className="home-programs-overlay pa4 pa5-ns">
						<h1 className="db f1-ns f2 lh-solid tl mt2 fw3 pa0 white">Programs</h1>
						<p className="f3-ns f4 fw3 tl white">
							We have programs for all ages and any experience level.
						</p>
						<div className="tl mb2">
							<Link to={"/programs"} className="custom-link mdl-typography--text-uppercase">
								VIEW OUR PROGRAMS
								<i className="material-icons">chevron_right</i>
							</Link>
						</div>
					</div>
				</div>


				<div className="home-tournaments bg-near-white cf pa5-ns dt-l">
					<div className="dtc-l v-mid-l ph0-l ph5 pt3 pt0-ns fn-l fl">
						<img src={"../images/lolita1_resize1.jpg"} className="fl w-100 shadow-5-ns" />
					</div>
					<div className="home-tournaments-overlay dtc-l v-mid-l pl5-l fn-l fl ph3">
						<h1 className="f1-ns f2 lh-solid tc tl-l fw3 mt0-l pa0 prim-text">Tournaments</h1>
						<h1 className="f3-ns f4 fw3 tc tl-l sec-text">
							We encourage our players to measure their skills by competing in tournaments.
							It's the best way to know how much they have improved.
						</h1>
						<article className="cf">
						  <div className="fl w-100 w-50-ns tc tl-l pb3 pb0-ns">
						  	<Link to={"/tournaments"} className="custom-link mdl-typography--text-uppercase">
								FIND TOURNAMENTS 
								<i className="material-icons">chevron_right</i>
							</Link>
						  </div>

						  <div className="fl w-100 w-50-ns tc tl-l pb4 pb0-ns">
						  	<Link to={"/rankings"} className="custom-link mdl-typography--text-uppercase">
								FIND RANKINGS
								<i className="material-icons">chevron_right</i>
							</Link>
						  </div>
						</article>
					</div>
				</div>


				<div className="home-contact bg-white">
					<div className="home-contact-overlay pa4 pa5-ns">
						<h1 className="db f1 lh-solid tc fw3 mt0 pa0 black">Contact us</h1>
						<p className="f3 fw3 tc">
							Let us know if you have any questions.
						</p>

						<div className="tl center mw6">
							<div className="phone">
								<i className="material-icons dib v-mid green pr2">phone</i>
								<h2 className="dib f5-contact f4-ns fw3 v-mid">(956) 240-6058</h2>
							</div>
							<div className="phone">
								<i className="material-icons dib v-mid green pr2">phone</i>
								<h2 className="dib f5-contact f4-ns fw3 v-mid">(956) 789-1144</h2>
							</div>
							<div className="email">
								<i className="material-icons dib v-mid blue pr2">email</i>
								<h2 className="dib f5-contact f4-ns fw3 v-mid">hello@rgvelite.com</h2>
							</div>
							<div className="location">
								<i className="material-icons dib v-mid red pr2">location_on</i>
								<h2 className="dib f5-contact f4-ns fw3 v-mid pr2">Bentsen Palm Community Park</h2>
								<h2 className="dib f5-contact f4-ns fw3 v-mid pad-small">Mission, TX</h2>
							</div>
						</div>
					</div>
				</div>
	        </div>
		);
	}
}