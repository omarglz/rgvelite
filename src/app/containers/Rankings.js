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
		var rankingsRef = firebaseApp.ref('rankings/');
		rankingsRef.orderByChild("rank position").on("child_added", snap => {
		    dummyList.push(snap.val());
			this.setState({
				players: dummyList
			});
		});
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
			console.log(obj);
			return (
				<tr key={obj.id}>
					<td className="pa3 mdl-data-table__cell--non-numeric">{obj.name}</td>
					<td className="pa3 mdl-data-table__cell--non-numeric">{obj.division}</td>
					<td className="pa3 mdl-data-table__cell--non-numeric">{obj["rank position"]}</td>
					<td className="pa3 mdl-data-table__cell--non-numeric">{obj["as of"]}</td>
					<td className="pa3 mdl-data-table__cell--non-numeric">
						<a target="_blank" className="db blue underline link" href={obj.info}>more info</a>			
					</td>		
				</tr>
			);
        })  

	    return (
			<div className="mw9 center ph3-ns bg-near-white">
				<h2 className="tc f3 ttu tracked">Rankings</h2>

				<PillsRankings />

				<div className="pa3 pb4 pt0">
				  <div className="overflow-auto mdl-shadow--4dp bg-white">
				    <table className="mdl-data-table f6 mw8 center" cellSpacing="0">
				      <thead>
				        <tr>
				          <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">Name</th>
				          <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">Division</th>
				          <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">Rank Position</th>
				          <th className="bb fw6 tl pa3 mdl-data-table__cell--non-numeric">Calculated Date</th>
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

