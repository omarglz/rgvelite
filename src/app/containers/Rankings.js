import React from 'react';
import { connect } from 'react-redux';
import PillsRankings from './PillsRankings.js';
import firebaseApp from '../firebase.js';

class Rankings extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		};
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

	componentDidUpdate() {
	    componentHandler.upgradeDom();
	}

	render() {
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
				<tr className="dt-row-ns db pv3 pv0-ns bb b--light-silver" key={obj.name}>
					<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db i fs-normal-ns ranking-name-background">{obj.name}</td>
					<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db">
						<span className="fw6 dn-ns">Division: </span>{obj.division}
					</td>
					<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db date-background">
						<span className="fw6 dn-ns">Rank Position: </span>{obj["rank position"]}
					</td>
					<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db">
						<span className="fw6 dn-ns">Calculated Date: </span>{obj["as of"]}
					</td>
					<td className="pa3-ns pv1 ph3 bb-ns b--light-silver dtc-ns db">
						<a target="_blank" className="db link-rankings underline link" href={obj.info}>more info</a>
					</td>
				</tr>
			);
        })

	    return (
			<div id={"top"} className="mw9 center rankings-section">
				<h2 className="tc f3 fw3 bg-white o-90 forrest-green">Rankings</h2>

				<PillsRankings />

				<div className="ph4 pb4 pt0 relative">
				  <div className="overflow-auto shadow-3 bg-rankings-table br2 mw7 hcustom center">
				    <table className="f6 w-100" cellSpacing="0">
				      <thead className="table-box-shadow table-header-custom">
				        <tr className="dt-row-ns db pv3 pv0-ns">
				          <th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">Name</th>
				          <th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">Division</th>
				          <th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">Rank Position</th>
				          <th className="fw6 tl pa3-ns pv1 ph3 dtc-ns db">Calculated Date</th>
				        </tr>
				      </thead>
				      <tbody className="lh-copy">
				        { playersList }
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
	rankingsButtonsState: state.rankingsLevelReducer,
	rankingsLevelSelected: state.rankingsLevelReducer.levelSelected
  };
};


export default connect(mapStateToProps)(Rankings);
