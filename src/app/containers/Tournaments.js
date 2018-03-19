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
		var dummyList = [];
		var database = firebaseApp.database();
		var tournamentsRef = database.ref().child('tournaments');
		tournamentsRef.orderByChild("date").on("child_added", snap => {
			dummyList.push(snap.val());
			this.setState({
				tournaments: dummyList
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
				<tr className="dt-row-ns db pv3 pv0-ns bb b--light-silver" key={obj.id}>
						<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db i fs-normal-ns">{obj.name}</td>
						<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db">
							<span className="fw6 dn-ns">Level: </span>{obj.level}
						</td>
						<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db">
							<span className="fw6 dn-ns">City: </span>{obj.city}
						</td>
						<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db date-background">
							<span className="fw6 dn-ns">Date: </span>{obj.date}
						</td>
						<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db deadline-background">
							<span className="fw6 dn-ns">Deadline: </span>
							<span className="red">{obj["sign up"]}</span>
						</td>
						<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db">
							<a target="_blank" className="db blue underline link" href={obj.link}>link to tournament</a>
						</td>
				</tr>
			);
        })

	    return (
			<div id={"top"} className="mw9 center tournaments-section">
				<h2 className="tc f3 fw3 bg-white o-90 forrest-green">Tournaments 2018</h2>

				<PillsTournaments />

				<div className="ph4 pb4 pt0 relative">
				  <div className="overflow-auto shadow-3 bg-tournaments-table br2 mw7 hcustom center">
				    <table className="f6 w-100" cellSpacing="0">
				      <thead className="table-box-shadow table-header-custom">
				    		<tr className="dt-row-ns db pv3 pv0-ns">
									<th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">Name</th>
				          <th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">Level</th>
				          <th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">City</th>
				          <th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">Date</th>
				          <th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">Deadline</th>
						  		<th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">Link</th>
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
