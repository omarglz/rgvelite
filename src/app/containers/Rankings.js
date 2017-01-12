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
				<tr className="stripe-dark" key={obj.id}>
					<td className="pa3">{obj.name}</td>
					<td className="pa3">{obj.division}</td>
					<td className="pa3">{obj["rank position"]}</td>
					<td className="pa3">{obj["as of"]}</td>
					<td className="pa3">
						<a target="_blank" className="db blue underline link hover-green" href={obj.info}>more info</a>			
					</td>		
				</tr>
			);
        })  

	    return (
			<div className="mw9 center ph3-ns">
				<h2 className="tc f3 ttu tracked">Rankings</h2>

				<PillsRankings />

				<div className="pa1">
				  <div className="overflow-auto">
				    <table className="f6 w-100 mw8 center" cellSpacing="0">
				      <thead>
				        <tr className="stripe-dark">
				          <th className="fw6 tl pa3 bg-white">Name</th>
				          <th className="fw6 tl pa3 bg-white">Division</th>
				          <th className="fw6 tl pa3 bg-white">Rank Position</th>
				          <th className="fw6 tl pa3 bg-white">Calculated Date</th>
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

