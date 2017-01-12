import React from 'react';
import PillsTournaments from './PillsTournaments.js';
import { connect } from 'react-redux';
import firebaseApp from '../firebase.js';

class Tournaments extends React.Component {	
	constructor() {
		super();
		this.state = {
			tournaments: []
		};
	} 
	componentDidMount() {
		// read all tournaments from firebase
		var tournamentsRef = firebaseApp.ref().child('tournaments');
		tournamentsRef.once('value', snap => {
			this.setState({
				tournaments: snap.val()
			});
		});
	}

	render() {
		// Level	Name	City	Start Date	Sign Up By	Link
		// Dynamically build table rows from database
		var filteredTournaments = [];

		// no filters
		if (this.props.levelSelected === "none" && this.props.monthSelected === "none") {
			console.log("no filters");
			this.state.tournaments.map( (obj) => {
				filteredTournaments.push(obj);
			})
		}

		// level filter only
		if (this.props.levelSelected != "none" && this.props.monthSelected === "none") {
			console.log("levelSelected");
			this.state.tournaments.map( (obj) => {
				if (obj.level === this.props.levelSelected) {
					filteredTournaments.push(obj);
				}
			})
		}

		// month filter only
		if (this.props.levelSelected === "none" && this.props.monthSelected != "none") {
			console.log("monthSelected");
			this.state.tournaments.map( (obj) => {
				if (obj.month === this.props.monthSelected) {
					filteredTournaments.push(obj);
				}
			})
		}

		// combo filter
		if (this.props.levelSelected != "none" && this.props.monthSelected != "none") {
			console.log("both selected!");
			this.state.tournaments.map( (obj) => {
				if (obj.month === this.props.monthSelected && obj.level === this.props.levelSelected) {
					filteredTournaments.push(obj);
				}
			})
		}

		const tournList = filteredTournaments.map( (obj) => {
			console.log(obj);
			return (
				<tr className="stripe-dark" key={obj.id}>
					<td className="pa3">{obj.level}</td>
					<td className="pa3">{obj.name}</td>
					<td className="pa3">{obj.city}</td>
					<td className="pa3">{obj.date}</td>
					<td className="pa3 red">{obj["sign up"]}</td>
					<td className="pa3">
						<a target="_blank" className="db blue underline link hover-green" href={obj.link}>link to tournament</a>			
					</td>		
				</tr>
			);
        })  

	    return (
			<div className="mw9 center ph3-ns">
				<h2 className="tc f3 ttu tracked">Tournaments 2017</h2>
				
				<PillsTournaments />

				<div className="pa1">
				  <div className="overflow-auto">
				    <table className="f6 w-100 mw8 center" cellSpacing="0">
				      <thead>
				        <tr className="stripe-dark">
				          <th className="fw6 tl pa3 bg-white">Level</th>
				          <th className="fw6 tl pa3 bg-white">Name</th>
				          <th className="fw6 tl pa3 bg-white">City</th>
				          <th className="fw6 tl pa3 bg-white">Start Date</th>
				          <th className="fw6 tl pa3 bg-white">Sign Up By</th>
						  <th className="fw6 tl pa3 bg-white">Link</th>
				        </tr>
				      </thead>
				      <tbody className="lh-copy">
						{ tournList }
				      </tbody>
				    </table>
				  </div>
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


export default connect(mapStateToProps)(Tournaments);


