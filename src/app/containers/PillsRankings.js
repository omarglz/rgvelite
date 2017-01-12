import React from 'react';
import { connect } from 'react-redux';

import { rClickChallengerButton } from '../actions/rankingsLevelActions.js';
import { rClickChampsButton } from '../actions/rankingsLevelActions.js';
import { rClickSuperChampsButton } from '../actions/rankingsLevelActions.js';

class PillsRankings extends React.Component {
	render() {
	    return (
	    	<article className="cf">
			  	<ul className="list ph3 ph5-ns tc">
				  <li className="dib mr2"><a onClick={() => this.props.rClickChallengerButton()}  className={this.props.rankingsButtonsState.challengerBtn}>Challenger</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.rClickChampsButton()}      className={this.props.rankingsButtonsState.champsBtn}>Champs</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.rClickSuperChampsButton()} className={this.props.rankingsButtonsState.superChampsBtn}>Super Champs</a></li>
				</ul>
			</article>
	    );
	}
}

const mapStateToProps = (state) => {
  return {
	rankingsButtonsState: state.rankingsLevelReducer,
	rankingsLevelSelected: state.rankingsLevelReducer.levelSelected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    rClickChallengerButton: () => {
		dispatch(rClickChallengerButton());
    },
    rClickChampsButton: () => {
		dispatch(rClickChampsButton());
    },
    rClickSuperChampsButton: () => {
		dispatch(rClickSuperChampsButton());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PillsRankings);