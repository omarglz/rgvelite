import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import PillsTournaments from './PillsTournaments.js';
import firebaseApp from '../firebase.js';

class UpdateTournaments extends React.Component {
	constructor() {
		super();
		this.state = {
			tournaments: []
		};
	} 

	// write(name, level, rank, age, date) {
	// 	const division = level + " " + age;
	// 	var database = firebaseApp.database();
	// 	database.ref('rankings/' + name + '/as of').set(date);
	// 	database.ref('rankings/' + name + '/division').set(division);
	// 	database.ref('rankings/' + name + '/level').set(level);
	// 	if (rank != "") {
	// 		database.ref('rankings/' + name + '/rank position').set(Number(rank));
	// 	}
	// }

	componentDidMount() {
		// read all tournaments from firebase
		var database = firebaseApp.database();
		var tournamentsRef = database.ref('test/');
		var dummyList = [];
		tournamentsRef.on("child_added", snap => {
			dummyList.push(snap.val());
			this.setState({
				tournaments: dummyList
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

	render() {
		console.log("renderrrr");
		console.log(this.state.tournaments);
		// Level	Name	City	Start Date	Sign Up By	Link
		// Dynamically build table rows from database
		var filteredTournaments = [];

		// no filters
		if (this.props.levelSelected === "none" && this.props.monthSelected === "none") {
			this.state.tournaments.map( (obj) => {
				filteredTournaments.push(obj);
			})
		}

		// level filter only
		if (this.props.levelSelected != "none" && this.props.monthSelected === "none") {
			this.state.tournaments.map( (obj) => {
				if (obj.level === this.props.levelSelected) {
					filteredTournaments.push(obj);
				}
			})
		}

		// month filter only
		if (this.props.levelSelected === "none" && this.props.monthSelected != "none") {
			this.state.tournaments.map( (obj) => {
				if (obj.month === this.props.monthSelected) {
					filteredTournaments.push(obj);
				}
			})
		}

		// combo filter
		if (this.props.levelSelected != "none" && this.props.monthSelected != "none") {
			this.state.tournaments.map( (obj) => {
				if (obj.month === this.props.monthSelected && obj.level === this.props.levelSelected) {
					filteredTournaments.push(obj);
				}
			})
		}
		// const allLevels = ["Super Champs", "Champs", "Challenger"];
		// const allAges = ["G12", "G14", "G16", "G18", "B12", "B14", "B16", "B18"];
		// console.log(filteredTournaments);
		const tournList = filteredTournaments.map( (obj) => {
			return (
				<tr key={obj.id}>
					<td className="pa3 bb b--light-silver">{obj.level}</td>
					<td className="pa3 bb b--light-silver">{obj.name}</td>
					<td className="pa3 bb b--light-silver">{obj.city}</td>
					<td className="pa3 bb b--light-silver">{obj.date}</td>
					<td className="pa3 red bb b--light-silver">{obj["sign up"]}</td>
					<td className="pa3 bb b--light-silver">
						<a target="_blank" className="db blue underline link" href={obj.link}>link to tournament</a>			
					</td>		
				</tr>
			);
        }) 


		// const playersList = filteredPlayers.map( (obj) => {
		// 	var notCurrentLevel = []
		// 	var arrayLength = allLevels.length;
		// 	for (var i = 0; i < arrayLength; i++) {
		// 	    if (obj.level != allLevels[i]) {
		// 	    	notCurrentLevel.push(allLevels[i]);
		// 	    }
		// 	}
			
		// 	var currAge = obj.division.split(" ").pop();
		// 	var currDate = obj["as of"].split("/");
		// 	var notCurrentAge = []
		// 	var lenAge = allAges.length;
		// 	for (var i = 0; i < lenAge; i++) {
		// 	    if (currAge != allAges[i]) {
		// 	    	notCurrentAge.push(allAges[i]);
		// 	    }
		// 	}
		// 	return (
		// 		<div>
		// 		<li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
		// 			<h2 className="fw5 f4 lh-copy">{obj.name} - <a target="_blank" className="blue underline pointer" href={obj.info}>link to USTA</a></h2>
		// 			<div className="change-level pb2">
		// 				<h2 className="fw3 f5 lh-copy dib pr3">Level</h2>
		// 				<select id={obj.name + " level"}>
		// 				  <option selected="selected">{obj.level}</option>
		// 				  <option>{notCurrentLevel[0]}</option>
		// 				  <option>{notCurrentLevel[1]}</option>
		// 				</select>
		// 			</div>
		// 			<div className="change-rank pb2">
		// 				<h2 className="fw3 f5 lh-copy dib pr3">Current Rank: {obj["rank position"]}</h2>
		// 				<h2 className="fw3 f5 lh-copy dib pr3">New Rank <input type="text" id={obj.name + " rank"}/></h2>
		// 			</div>
		// 			<div className="change-age pb2">
		// 				<h2 className="fw3 f5 lh-copy dib pr3">Age</h2>
		// 				<select id={obj.name + " age"}>
		// 				  <option selected="selected">{currAge}</option>
		// 				  <option>{notCurrentAge[0]}</option>
		// 				  <option>{notCurrentAge[1]}</option>
		// 				  <option>{notCurrentAge[2]}</option>
		// 				  <option>{notCurrentAge[3]}</option>
		// 				  <option>{notCurrentAge[4]}</option>
		// 				  <option>{notCurrentAge[5]}</option>
		// 				  <option>{notCurrentAge[6]}</option>
		// 				</select>
		// 			</div>
		// 			<div className="change-date pb2">
		// 				<h2 className="fw3 f5 lh-copy dib pr3">
		// 					Calculated Date (MM/DD/YYYY)
		// 					<span className="flex">
		// 						<input type="text" id={obj.name + " currMonth"} defaultValue={currDate[0]}/>
		// 						/
		// 						<input type="text" id={obj.name + " currDay"} defaultValue={currDate[1]}/>
		// 						/
		// 						<input type="text" id={obj.name + " currYear"} defaultValue={currDate[2]}/>
		// 					</span>
		// 				</h2>
		// 			</div>
		// 			<div className="save-changes">
		// 				<a onClick={() => this.write(obj.name, 
		// 						document.getElementById(obj.name + " level").value, 
		// 						document.getElementById(obj.name + " rank").value, 
		// 						document.getElementById(obj.name + " age").value, 
		// 						document.getElementById(obj.name + " currMonth").value + "/" + document.getElementById(obj.name + " currDay").value + "/" + document.getElementById(obj.name + " currYear").value
		// 					)} 
		// 					className="green pointer link dim br-pill">
		// 						Save
		// 				</a>
		// 			</div>
		// 		</li>
		// 		</div>
		// 	);
  //       })  

	    return (
			<div className={"mw9 center update-tournaments " + this.props.className}>
				<h2 className="tc f3 fw3 bg-white o-90 forrest-green">Update Tournaments</h2>

				<div>
					<h2 className="f3 fw3 prim-text">Add Tournament</h2>
				</div>

				<div>
					<h2 className="f3 fw3 prim-text">Delete Tournament</h2>
				</div>

				<PillsTournaments />

				<div className="ph4 pb4 pt0">
			    	<ul className="list pl0 measure center">
			    		{tournList}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
	buttonsState: state.tournamentsLevelReducer,
	levelSelected: state.tournamentsLevelReducer.levelSelected,
	monthButtonsState: state.tournamentsMonthReducer,
	monthSelected: state.tournamentsMonthReducer.monthSelected
  };
};


export default connect(mapStateToProps)(UpdateTournaments);

