import React from 'react';

export class Programs extends React.Component {
	// componentDidMount() {
	// 	componentHandler.upgradeDom();
	// }
	componentDidUpdate() {
	    componentHandler.upgradeDom();
	}

	render() {
	    return (
			<div className="programs-section pb4">
			  <h2 className="tc f3 ttu tracked white">Programs</h2>
			  <article className="br2 ba bg-white dark-gray b--black-10 w-75 w-50-ns center">
				  <h2 className="db w-100 bb b--black-10 pl2">Elite</h2>
				  <div className="pa2 ph3-ns pb3-ns">
				  	<div className="dtc center">
				        <h1 className="f5-small f4-ns mv0 b">Hours</h1>
				    </div>

				    <div className="dt w-100 mt1">
				      <div className="dtc center">
				        <h1 className="f5-small f4-ns mv0">Monday - Thursday:</h1>
						<h1 className="f5-small f4-ns mv0">Friday:</h1>
				      </div>
				      <div className="dtc center">
				        <h1 className="f5-small f4-ns mv0 tr">6:45pm - 8:45pm</h1>
				        <h1 className="f5-small f4-ns mv0 tr">5:30pm - 7:10pm</h1>
				      </div>
				    </div>

				    <div className="dtc center pt3">
				        <h1 className="f5-small f4-ns b mv0">Cost</h1>
				    </div>

				    <div className="dt w-100 mt1">
				      <div className="dtc center">
				        <h1 className="f5-small f4-ns mv0">$320 per month</h1>
				      </div>
				    </div>

				 







				  </div>
				</article>
	        </div>
		);
	}
}