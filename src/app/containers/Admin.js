import React from 'react';
import * as firebase from 'firebase';
import UpdateRankings from './UpdateRankings.js';
import { connect } from 'react-redux';

class Admin extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	} 

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
				<div className="admin-options">
					<a className="forrest-green pointer">Update Tournaments</a>
					<a className="forrest-green pointer">Update Rankings</a>
					<a className="forrest-green pointer">Update Gallery</a>
				</div>
				<UpdateRankings />
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

const mapStateToProps = (state) => {
  return {
	rankingsButtonsState: state.rankingsLevelReducer,
	rankingsLevelSelected: state.rankingsLevelReducer.levelSelected
  };
};


export default connect(mapStateToProps)(Admin);
