import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import PillsRankings from './PillsRankings.js';
import firebaseApp from '../firebase.js';

class UpdateRankings extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
	} 

	write(name, level, rank, age, date) {
		const division = level + " " + age;
		var database = firebaseApp.database();
		database.ref('rankings/' + name + '/as of').set(date);
		database.ref('rankings/' + name + '/division').set(division);
		database.ref('rankings/' + name + '/level').set(level);
		if (rank != "") {
			database.ref('rankings/' + name + '/rank position').set(Number(rank));
		}
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

	componentDidUpdate() {
	    componentHandler.upgradeDom();
	}

	render() {
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

		const allLevels = ["Super Champs", "Champs", "Challenger"];
		const allAges = ["G12", "G14", "G16", "G18", "B12", "B14", "B16", "B18"];
		const playersList = filteredPlayers.map( (obj) => {
			var notCurrentLevel = []
			var arrayLength = allLevels.length;
			for (var i = 0; i < arrayLength; i++) {
			    if (obj.level != allLevels[i]) {
			    	notCurrentLevel.push(allLevels[i]);
			    }
			}
			
			var currAge = obj.division.split(" ").pop();
			var currDate = obj["as of"].split("/");
			var notCurrentAge = []
			var lenAge = allAges.length;
			for (var i = 0; i < lenAge; i++) {
			    if (currAge != allAges[i]) {
			    	notCurrentAge.push(allAges[i]);
			    }
			}
			return (
				<div>
				<li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
					<h2 className="fw5 f4 lh-copy">{obj.name} - <a target="_blank" className="blue underline pointer" href={obj.info}>link to USTA</a></h2>
					<div className="change-level pb2">
						<h2 className="fw3 f5 lh-copy dib pr3">Level</h2>
						<select id={obj.name + " level"}>
						  <option selected="selected">{obj.level}</option>
						  <option>{notCurrentLevel[0]}</option>
						  <option>{notCurrentLevel[1]}</option>
						</select>
					</div>
					<div className="change-rank pb2">
						<h2 className="fw3 f5 lh-copy dib pr3">Current Rank: {obj["rank position"]}</h2>
						<h2 className="fw3 f5 lh-copy dib pr3">New Rank <input type="text" id={obj.name + " rank"}/></h2>
					</div>
					<div className="change-age pb2">
						<h2 className="fw3 f5 lh-copy dib pr3">Age</h2>
						<select id={obj.name + " age"}>
						  <option selected="selected">{currAge}</option>
						  <option>{notCurrentAge[0]}</option>
						  <option>{notCurrentAge[1]}</option>
						  <option>{notCurrentAge[2]}</option>
						  <option>{notCurrentAge[3]}</option>
						  <option>{notCurrentAge[4]}</option>
						  <option>{notCurrentAge[5]}</option>
						  <option>{notCurrentAge[6]}</option>
						</select>
					</div>
					<div className="save-changes">
						<a onClick={() => 
							this.write(obj.name, 
								document.getElementById(obj.name + " level").value, 
								document.getElementById(obj.name + " rank").value, 
								document.getElementById(obj.name + " age").value,
								document.getElementById("calc-date").value.split("-")[1]+"/"+document.getElementById("calc-date").value.split("-")[2]+"/"+document.getElementById("calc-date").value.split("-")[0]
							)} 
							className="green pointer link dim br-pill">
							Save
						</a>
					</div>
				</li>
				</div>
			);
        })  

	    return (
			<div className={"mw9 center update-rankings " + this.props.className}>
				<h2 className="tc f3 fw3 bg-white o-90 forrest-green">Update Rankings</h2>

				<PillsRankings />
				<div className="tc center">
					Calculated Date <input type="date" id="calc-date"/>
				</div>
				<div className="ph4 pb4 pt0">
			    	<ul className="list pl0 measure center">
			    		{playersList}
					</ul>
				</div>
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


export default connect(mapStateToProps)(UpdateRankings);

