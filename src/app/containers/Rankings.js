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
		// read all tournaments from firebase
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

		// no filters
		if (this.props.rankingsLevelSelected === "none") {
			console.log("no filters");
			this.state.players.map( (obj) => {
				filteredPlayers.push(obj);
			})
		}

		// level filter
		if (this.props.rankingsLevelSelected != "none") {
			console.log("rankingsLevelSelected");
			this.state.players.map( (obj) => {
				if (obj.level === this.props.rankingsLevelSelected) {
					filteredPlayers.push(obj);
				}
			})
		}

		
		const playersList = filteredPlayers.map( (obj) => {
			return (
				<tr key={obj.id}>
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
			<div id={"top"} className="mw9 center rankings-section">
				<h2 className="tc f3 fw3 bg-white o-90 hot-pink">Rankings</h2>

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

