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
		var database = firebaseApp.database();
		var tournamentsRef = database.ref().child('tournaments');
		tournamentsRef.once('value', snap => {
			this.setState({
				tournaments: snap.val()
			});
		});
	}

	componentDidUpdate() {
	    componentHandler.upgradeDom();
	}

	render() {
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

	    return (
			<div id={"top"} className="mw9 center tournaments-section">
				<h2 className="tc f3 fw3 bg-white o-90 forrest-green">Tournaments 2017</h2>
				
				<PillsTournaments />
				
				<div className="ph4 pb4 pt0 relative">
				  <div className="overflow-auto shadow-3 bg-tournaments-table br2 mw7 hcustom center">
				    <table className="f6 mw8 center" cellSpacing="0">
				      <thead>
				    	<tr>
				          <th className="bb fw6 tl pa3">Level</th>
				          <th className="bb fw6 tl pa3">Name</th>
				          <th className="bb fw6 tl pa3">City</th>
				          <th className="bb fw6 tl pa3">Date</th>
				          <th className="bb fw6 tl pa3">Deadline</th>
						  <th className="bb fw6 tl pa3">Link</th>
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


