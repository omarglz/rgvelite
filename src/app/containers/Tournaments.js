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
				<tr key={obj.id}>
					<td className="pa3 mdl-data-table__cell--non-numeric">{obj.level}</td>
					<td className="pa3 mdl-data-table__cell--non-numeric">{obj.name}</td>
					<td className="pa3 mdl-data-table__cell--non-numeric">{obj.city}</td>
					<td className="pa3 mdl-data-table__cell--non-numeric">{obj.date}</td>
					<td className="pa3 red mdl-data-table__cell--non-numeric">{obj["sign up"]}</td>
					<td className="pa3 mdl-data-table__cell--non-numeric">
						<a target="_blank" className="db blue underline link" href={obj.link}>link to tournament</a>			
					</td>		
				</tr>
			);
        })  

	    return (
			<div className="mw9 center ph3-ns bg-near-white">
				<h2 className="tc f3 ttu tracked">Tournaments 2017</h2>
				
				<PillsTournaments />

				<div className="pa3 pb4 pt0">
				  <div className="overflow-auto mdl-shadow--4dp bg-white">
				    <table className="mdl-data-table f6 mw8 center" cellSpacing="0">
				      <thead>
				    	<tr>
				          <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">Level</th>
				          <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">Name</th>
				          <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">City</th>
				          <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">Start Date</th>
				          <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">Sign Up By</th>
						  <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">Link</th>
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


