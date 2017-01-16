import React from 'react';

export class Contact extends React.Component {
	render() {
	    return (
			<div className="dt-ns dt--fixed-ns">
			  <div className="dtc-ns tc pv4 bg-dark-green">
			    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
				  <div className="tc">
				    <img src={"http://tachyons.io/img/avatar_1.jpg"} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
				    <h1 className="f3 mb2">Francisco Diaz</h1>
				    <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
				  </div>
				</article>
			  </div>
			  <div className="dtc-ns tc pv4">
			    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-100">
				  <div className="tc">
				    <img src={"http://tachyons.io/img/avatar_1.jpg"} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
				    <h1 className="f3 mb2">Daniel de la Cruz</h1>
				    <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
				  </div>
				</article>
			  </div>
			  <div className="dtc-ns tc pv4 bg-dark-green">
			    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
				  <div className="tc">
				    <img src={"http://tachyons.io/img/avatar_1.jpg"} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
				    <h1 className="f3 mb2">Fernando Gonzalez</h1>
				    <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
				  </div>
				</article>
			  </div>
			</div>
		);
	}
}