import React from 'react';

export class Programs extends React.Component {
	// componentDidMount() {
	// 	componentHandler.upgradeDom();
	// }
	/*
	 *   Used so mdl lite components can do their thing
	 */
	componentDidUpdate() {
	    componentHandler.upgradeDom();
	}

	render() {
	    return (
			<div className="programs-section mw9 center">
			  <div className="programs-title bg-dark-gray">
				<div className="programs-title-overlay ph4 pv5 pa5-ns pa6-l">
					<h1 className="db f1-ns f2 lh-solid tc fw3 mt0 pa0 white">Programs</h1>
					<p className="f3-ns f4 fw3 white tc">
						Private lessons for adults, and 3 different sessions for juniors.
				  		Check out all of our options below.
				  		There is limited enrollment.
				  	</p>
				</div>
			  </div>


			  <div className="programs-beginner bg-near-white cf pb5">
		  		<div className="beginner-title bg-beginners-orange pv3">
					<h2 className="db f3 f2-l lh-solid tc fw3 mt0 pa0 white">Beginners / 10 and Under</h2>
				</div>
				<img src={"../images/beginners5_editweb.jpg"} className="fl w-100 w-50-l" />
				<div className="programs-beginner-overlay pv2 ph4 fl w-100 w-50-l">
				  <div className="mw6 mw7-ns center">
				  	<p className="f5-small f4 prim-text-bold tl mb0">
				  		Beginners have lots of fun while getting familiar with competitive tennis and its rules.
					</p>
				  </div>
				  <div className="mw6 mw7-ns center">
				  	<div className="dtc center pt3">
			        	<h1 className="f5-small f4 mv0 prim-text">Hours</h1>
				    </div>
				    <div className="dt w-100 mt1">
				      <div className="dtc center">
				        <h1 className="f6-small f5 f4-ns mv0 sec-text">Monday - Thursday:</h1>
				      </div>
				      <div className="dtc center">
				        <h1 className="f6-small f5 f4-ns mv0 tr sec-text">4:45pm - 5:45pm</h1>
				      </div>
				    </div>
				    <div className="dtc center pt3">
				        <h1 className="f5-small f4 mv0 prim-text">Cost</h1>
				    </div>
				    <div className="dt w-100 mt1">
				      <div className="dtc center">
				        <h1 className="f6-small f5 f4-ns mv0 sec-text">2 days a week:</h1>
						<h1 className="f6-small f5 f4-ns mv0 sec-text">3 days a week:</h1>
				        <h1 className="f6-small f5 f4-ns mv0 sec-text">4 days a week:</h1>
				      </div>
				      <div className="dtc center">
						<h1 className="f6-small f5 f4-ns mv0 tr sec-text">$80 per month</h1>
				        <h1 className="f6-small f5 f4-ns mv0 tr sec-text">$100 per month</h1>
				        <h1 className="f6-small f5 f4-ns mv0 tr sec-text">$120 per month</h1>
				      </div>
				    </div>
				  </div>
				</div>
			  </div>


			  <div className="programs-challenger bg-near-white cf pb5">
				<div className="challenger-title bg-challengers-pink pv3">
					<h2 className="db f3 f2-l lh-solid tc fw3 mt0 pa0 white">Challenger</h2>
			  	</div>
				<img src={"../images/challenger1_editweb.jpg"} className="fl w-100 w-50-l" />
				<div className="programs-challenger-overlay pv2 ph4 fl w-100 w-50-l">
				  <div className="mw6 mw7-ns center">
				  	<p className="f5-small f4 prim-text-bold tl mb0">
				  		Challenger is our intermediate level.  Challengers are already familiar with competitive tennis.
				  		With longer training sessions, strength and conditioning routines, and higher expectations,
				  		Challengers are continuing to develop their tennis skills and abilities.
					</p>
				  </div>

				  <div className="mw6 mw7-ns center">

				  	<div className="dtc center pt3">
			        	<h1 className="f5-small f4 mv0 prim-text">Hours</h1>
				    </div>
				    <div className="dt w-100 mt1">
				      <div className="dtc center">
				        <h1 className="f6-small f5 f4-ns mv0 sec-text">Monday - Thursday:</h1>
				      </div>
				      <div className="dtc center">
				        <h1 className="f6-small f5 f4-ns mv0 tr sec-text">5:45pm - 7:10pm</h1>
				      </div>
				    </div>

				    <div className="dtc center pt3">
				        <h1 className="f5-small f4 mv0 prim-text">Cost</h1>
				    </div>
				    <div className="dt w-100 mt1">
				      <div className="dtc center">
				        <h1 className="f6-small f5 f4-ns mv0 sec-text">2 days a week:</h1>
						<h1 className="f6-small f5 f4-ns mv0 sec-text">3 days a week:</h1>
				        <h1 className="f6-small f5 f4-ns mv0 sec-text">4 days a week:</h1>
				      </div>
				      <div className="dtc center">
						<h1 className="f6-small f5 f4-ns mv0 tr sec-text">$120 per month</h1>
				        <h1 className="f6-small f5 f4-ns mv0 tr sec-text">$180 per month</h1>
				        <h1 className="f6-small f5 f4-ns mv0 tr sec-text">$240 per month</h1>
				      </div>
				    </div>
				  </div>
				</div>
			  </div>


			  <div className="programs-elite bg-near-white cf pb5">
			  	<div className="elite-title bg-elite-green pv3">
					<h2 className="db f3 f2-l lh-solid tc fw3 mt0 pa0 white">Elite</h2>
			  	</div>
			  	<img src={"../images/elite1_editweb.jpg"} className="fl w-100 w-50-l" />
				<div className="programs-elite-overlay pv2 ph4 fl w-100 w-50-l">
					  <div className="mw6 mw7-ns center">
					  	<p className="f5-small f4 prim-text-bold tl mb0">
					  		The Elite players' tennis abilities, strength, and endurance are well-developed.
					  		They compete in at least one tournament a month, and their expectations are the highest.
					  		They focus on the mental game, strategies, and decision-making, which are all crucial at this level.
							</p>
					  </div>

					  <div className="mw6 mw7-ns center">

					  <div className="dtc center pt3">
				        	<h1 className="f5-small f4 mv0 prim-text">Hours</h1>
					    </div>
					    <div className="dt w-100 mt1">
					      <div className="dtc center">
					        <h1 className="f6-small f5 f4-ns mv0 sec-text">Monday - Thursday:</h1>
					      </div>
					      <div className="dtc center">
					        <h1 className="f6-small f5 f4-ns mv0 tr sec-text">7:00pm - 8:45pm</h1>
					      </div>
					    </div>

					    <div className="dtc center pt3">
					        <h1 className="f5-small f4 mv0 prim-text">Cost</h1>
					    </div>
					    <div className="dt w-100 mt1">
					      <div className="dtc center">
					        <h1 className="f6-small f5 f4-ns mv0 sec-text">$320 per month</h1>
					      </div>
					    </div>
					  </div>
				</div>
			  </div>


			  <div className="programs-private bg-near-white cf pb5">
				<div className="private-title bg-private-purple pv3">
					<h2 className="db f3 f2-l lh-solid tc fw3 mt0 pa0 white">Private lessons</h2>
			  	</div>
				<img src={"../images/private1-editweb.jpg"} className="fl w-100 w-50-l" />
				<div className="programs-private-overlay fl w-100 w-50-l">
					  <div className="pv2 ph4 mw6 mw7-ns center">
					  	<p className="f5-small f4 prim-text-bold tl mb0">
					  		We offer personalized programs that focus on each player's necessities.
					  		These lessons will strengthen your weapons and improve your weaknesses.
					  		Private lessons are by appointment only.
						</p>
					  </div>
					  <div className="ph4 mw6 mw7-ns center">
					  	<div className="dib fl w-100 tc bb b--silver pt3">
				        	<h1 className="f5-small f4 mv0 prim-text">Adults</h1>
					    </div>
					  	<div className="dt w-100 pt1">
				        	<h1 className="f5-small f4 mv0 prim-text">Hours<span style={{color: "red"}}>**</span></h1>
					    </div>
					    <div className="dt w-100 mt1">
					      <div className="dtc center">
					        <h1 className="f6-small f5 f4-ns mv0 sec-text">Monday - Friday:</h1>
					      </div>
					      <div className="dtc center">
					        <h1 className="f6-small f5 f4-ns mv0 tr sec-text">8:00am - 12:00noon</h1>
					      </div>
					    </div>

					    <div className="dtc center pt3">
					        <h1 className="f5-small f4 mv0 prim-text">Cost</h1>
					    </div>
					    <div className="dt w-100 mt1">
					      <div className="dtc center">
					        <h1 className="f6-small f5 f4-ns mv0 sec-text">$40 per hour</h1>
					      </div>
					    </div>
					  </div>
					  <div className="pt3 ph4 mw6 mw7-ns center">
					  	<div className="dib fl w-100 tc bb b--silver">
				        	<h1 className="f5-small f4 mv0 prim-text">Juniors</h1>
					    </div>
					  	<div className="dt w-100 pt1">
				        	<h1 className="f5-small f4 mv0 prim-text">Hours<span style={{color: "red"}}>**</span></h1>
					    </div>
					    <div className="dt w-100 mt1">
					      <div className="dtc center">
					        <h1 className="f6-small f5 f4-ns mv0 sec-text">Saturday - Sunday:</h1>
					      </div>
					      <div className="dtc center">
					        <h1 className="f6-small f5 f4-ns mv0 tr sec-text">8:00am - 12:00noon</h1>
					      </div>
					    </div>

					    <div className="dtc center pt3">
					        <h1 className="f5-small f4 mv0 prim-text">Cost</h1>
					    </div>
					    <div className="dt w-100 mt1">
					      <div className="dtc center">
					        <h1 className="f6-small f5 f4-ns mv0 sec-text">$40 per hour</h1>
					      </div>
					    </div>
					  </div>
					  <div className="pt4 ph4 mw6 mw7-ns center">
					  	<div className="dib fl w-100 tc">
				        	<h1 className="f6-small f5 f4-ns mv0 prim-text">
				        		<span style={{color: "red"}}>**</span> - Hours depend on availability.
				        		Contact us to schedule your private lesson.
				        	</h1>
					    </div>
					  </div>
				</div>
			  </div>
	        </div>
		);
	}
}
