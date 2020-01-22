import React from 'react';
import PillsTournaments from './PillsTournaments.js';
import { connect } from 'react-redux';
import firebaseApp from '../firebase.js';
var _ = require('lodash');

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
		tournamentsRef.once("value")
		.then((snapshot) => {
			const wholeObj = snapshot.val();
			const vals = _.values(wholeObj);
			vals.sort((a, b) => {
				const aa = a.date.split('/');
				const bb = b.date.split('/');
				return aa[0] - bb[0] || aa[1] - bb[1];
			});
			this.setState({ tournaments: vals });
		})
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

		const tournList = filteredTournaments.map( (obj) => (
			<tr className="dt-row-ns db pv3 pv0-ns bb b--light-silver" key={obj.id}>
					<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db i fs-normal-ns tourn-name-background">{obj.name}</td>
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
						<a target="_blank" className="dib blue underline v-mid link" href={obj.link}>link to tournament</a>
						{ !_.isNil(obj.travel) && <i className="material-icons v-mid forrest-green dib pl2">star</i> }
					</td>
			</tr>
		));

	    return (
			<div id={"top"} className="mw9 center tournaments-section">
				<div className="bg-white o-90 tc">
					<h2 className="f3 fw3 forrest-green">Tournaments 2020</h2>
					<div className="">
						<i className="material-icons forrest-green v-mid">star</i>
						<span className="f6 fw3 forrest-green v-mid">-- tournaments RGV Elite will travel to</span>
					</div>
				</div>

				<div className="flex-l">
					<PillsTournaments />

					<div className="ph4 pv4 relative center">
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
