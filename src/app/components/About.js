import React from 'react';

export class About extends React.Component {
	render() {
	    return (
	    	<div className="about-section">
	    		<div className="about-rgvelite bg-white">
					<div className="about-rgvelite-overlay pa4 ph5-ns pt2 pb4">
						<h1 className="db f1 lh-solid tc fw3 pa0 prim-text">About Us</h1>
						<h3 className="f3-ns f4 fw3 tc sec-text lh-copy">
							At <span className="f3-ns f4 about-us-bold lh-copy">RGV Elite Tennis Academy</span>, we are committed to make our players better athletes. 
							In doing so, our players <span className="f3-ns f4 about-us-bold lh-copy">learn valuable lessons</span> that make them stronger both physically and mentally. 
						</h3>
						<h3 className="f3-ns f4 fw3 tc sec-text lh-copy">
							Our years of experience allow us to teach our players the proper techniques that will take them to their goals quicker. 
							Our well-structured training <a href={"../programs"} className="link underline-hover fw4">programs</a> allow our 
							players to <span className="f3-ns f4 about-us-bold lh-copy">have fun and build friendships</span> while also pushing 
							themselves to <span className="f3-ns f4 about-us-bold lh-copy">improve every day</span>. 
							And most importantly, our players <span className="f3-ns f4 about-us-bold lh-copy">develop positive habits</span> on the tennis court 
							that they can apply to school or work settings.
						</h3>
						<h3 className="pt2 f3-ns f4 fw3 tc sec-text lh-copy">
							We provide a <span className="f3-ns f4 about-us-bold lh-copy">welcoming, comfortable environment</span> for everyone. Stop by during one of our training sessions or contact any of our head coaches
							for more information. We look forward to working with you!
						</h3>
					</div>
				</div>


		    	<div className="about-pancho bg-near-white cf pb5 ph0-l ph5-ns ph0">
		    		<div className="">
						<img src={"../images/contact-pancho-editweb.jpg"} className="fl w-100 w-40-l" />
					</div>
					<div className="about-pancho-text fl w-100 w-50-l">
						<article className="cf">
						  <div className="pv2 ph3 fl w-100">
						  	<p className="f4-small f3 i fw3 prim-text tl mb0">
						  		Francisco "Pancho" Diaz
							</p>
							<p className="f5-small f4 fw3 sec-text tl mb0">
						  		Owner / Head Coach
							</p>
						  </div>
						  <div className="pt3 ph3 fl w-100">
						    <div className="dt w-100">
						      <div className="dtc center">
						      	<a href="tel:9562406058">
							        <h2 className="dib f4 fw3 pr3 w-100 mb2 sec-text underline hover-blue">
										<i className="material-icons dib v-mid green pr2">phone</i>(956) 240-6058
					  				</h2>
				  				</a>
				  				<a href="mailto:lepanche@hotmail.com" target="_blank">
							        <h2 className="dib f4 fw3 pr3 w-100 mb2 sec-text underline hover-blue">
										<i className="material-icons dib v-mid dark-red pr2">mail</i>lepanche@hotmail.com
									</h2>
								</a>
								<a href="https://twitter.com/lepanchie" target="_blank">
									<h2 className="dib f4 fw3 pr3 w-100 mb0 sec-text underline hover-blue">
										<i className="fa fa-twitter dib v-mid blue pr2" aria-hidden="true"></i>@lepanchie
									</h2>
								</a>
						      </div>
						    </div>
						  </div>
						</article>
					</div>
				</div>
				<div className="about-daniel bg-white cf pb5 ph0-l ph5-ns ph0">
					<img src={"../images/contact-daniel-editweb.jpg"} className="fl w-100 w-40-l" />
					<div className="about-daniel-text fl w-100 w-50-l">
						<article className="cf">
						  <div className="pv2 ph3 fl w-100">
						  	<p className="f4-small f3 i fw3 prim-text tl mb0">
						  		Daniel De La Cruz
							</p>
							<p className="f5-small f4 fw3 sec-text tl mb0">
						  		Head Coach
							</p>
						  </div>
						  <div className="pt3 ph3 fl w-100">
						    <div className="dt w-100">
						      <div className="dtc center">
						      	<a href="tel:9567891144">
							        <h2 className="dib f4 fw3 pr3 w-100 mb2 sec-text underline hover-blue">
										<i className="material-icons dib v-mid green pr2">phone</i>(956) 789-1144
					  				</h2>
				  				</a>
				  				<a href="mailto:danieldelacruz71@hotmail.com" target="_blank">
							        <h2 className="dib f4 fw3 w-100 mb0 sec-text underline hover-blue">
										<i className="material-icons dib v-mid dark-red pr2">mail</i>danieldelacruz71@hotmail.com
									</h2>
								</a>
						      </div>
						    </div>
						  </div>
						</article>
					</div>
				</div>
			</div>
		);
	}
}