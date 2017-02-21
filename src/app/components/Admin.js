import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import PillsRankings from './PillsRankings.js';
import firebaseApp from '../firebase.js';

class Admin extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	} 

	componentWillMount() {
		console.log("componentWillMount");
	    this.authListener = this.authListener.bind(this);
	    this.authListener();
	}

	componentDidMount() {
		// read all rankings from firebase
		var dummyList = [];
		var database = firebaseApp.database();
		var rankingsRef = database.ref('rankings/');
		rankingsRef.orderByChild("rank position").on("child_added", snap => {
		    dummyList.push(snap.val());
			this.setState({
				players: dummyList
			});
		});
	}

	logoutWithPass() {
		console.log("logoutWithPass");
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		}, function(error) {
		  // An error happened.
		  console.log("ERROR");
		});
	}

	authListener() {
		console.log("authListener");
		this.fireBaseListener = firebase.auth().onAuthStateChanged((user) => {
	      if (user) {
	        console.log('user changed.. uid', user.uid);
	      } else {
	        // No user is signed in.
	        console.log('not logged in');
			window.location.href = "../sign-in";
	      }
	    });
	}

	writeUserData(userId, name, email, imageUrl) {
		var database = firebaseApp.database();
		var rankingsRef = database.ref('rankings/');
		firebase.database().ref('users/' + userId).set({
			username: name,
			email: email,
			profile_picture : imageUrl
		});
	}

	render() {
		// as of: 
		// "02/14/2017"
		//  division: 
		// "Super Champs B16"
		//  info: 
		// "https://tennislink.usta.com/tournaments/Ranking..."
		//  level: 
		// "Super Champs"
		//  name: 
		// "Fernando Gonzalez"
		//  rank position: 
		// 183

		console.log("render");
		// Name	  Division	 Standing	Calculated  Date  Link
		// Dynamically build table rows from database
		// order by ranking
		var filteredPlayers = [];
		// level filter
		if (this.props.rankingsLevelSelected != "none") {
			this.state.players.map( (obj) => {
				if (obj.level === this.props.rankingsLevelSelected) {
					filteredPlayers.push(obj);
				}
			})
		}

		
		const playersList = filteredPlayers.map( (obj) => {
			return (
				<tr key={obj.name}>
					<td className="pa3 bb">{obj.name}</td>
					<td className="pa3 bb">{obj.division}</td>
					<td className="pa3 bb">{obj["rank position"]}</td>
					<td className="pa3 bb">{obj["as of"]}</td>
					<td className="pa3 bb">
						<a target="_blank" className="db link-rankings underline link" href={obj.info}>more info</a>			
					</td>		
				</tr>
			);
        })  

	    return (
	    	<div>
	    		<div id={"top"} className="mw9 center admin-rankings">
					<h2 className="tc f3 fw3 bg-white o-90 forrest-green">Update Rankings</h2>
					<PillsRankings />

					<div className="ph4 pb4 pt0">
					  <div className="overflow-auto shadow-3 bg-rankings-table br2 mw7 hcustom center">
					    <table className="f6 mw8 center" cellSpacing="0">
					      <thead>
					        <tr>
					          <th className="bb fw6 tl pa3">Name</th>
					          <th className="bb fw6 tl pa3">Division</th>
					          <th className="bb fw6 tl pa3">Rank Position</th>
					          <th className="bb fw6 tl pa3">Calculated Date</th>
					        </tr>
					      </thead>
					      <tbody className="lh-copy">
					        { playersList }
					      </tbody>
					    </table>
					  </div>
					</div>
				</div>
				<main className="pa4 black-80">
				  <form className="measure center">
				     <div className="">
				      <input className="b ph3 pv2 ba b--black bg-transparent grow pointer f6 dib" 
				      	value="Sign out" onClick={() => this.logoutWithPass()}
				      />
				    </div>
				  </form>
				</main>
			<div>
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
