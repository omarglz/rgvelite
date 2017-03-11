import React from 'react';
import * as firebase from 'firebase';

export class Admin extends React.Component {
	componentWillMount() {
	    this.authListener = this.authListener.bind(this);
	    this.authListener();
	}
	logoutWithPass() {
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		}, function(error) {
		  // An error happened.
		  console.log("ERROR");
		});
	}
	authListener() {
		this.fireBaseListener = firebase.auth().onAuthStateChanged((user) => {
	      if (user) {
	      } else {
	        // No user is signed in.
			window.location.href = "../sign-in";
	      }
	    });
	}

	render() {
	    return (
			<div className="mw9 center admin-section">
				<div className="admin-options pa5 dt-ns dt--fixed-ns">
					<div className="dtc-ns tc">
						<a href={"./admin-tournaments"} className="blue pointer f3 fw3 bg-white o-90 underline ph3">Update Tournaments</a>
					</div>
					<div className="dtc-ns tc">
						<a href={"./admin-rankings"} className="blue pointer f3 fw3 bg-white o-90 underline ph3">Update Rankings</a>
					</div>
					<div className="dtc-ns tc">
						<a href={"./admin-gallery"} className="blue pointer f3 fw3 bg-white o-90 underline ph3">Update Gallery</a>
					</div>
				</div>

				<main className="pa4 black-80">
				  <form className="measure center">
				    <div className="">
				      <input className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib" 
				      	value="Sign Out" onClick={() => this.logoutWithPass()}
				      />
				    </div>
				  </form>
				</main>
			</div>
		);
	}
}
