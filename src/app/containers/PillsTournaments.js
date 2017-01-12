import React from 'react';
import { connect } from 'react-redux';

import { tClickChallengerButton } from '../actions/tournamentsLevelActions.js';
import { tClickChampsButton } from '../actions/tournamentsLevelActions.js';
import { tClickSuperChampsButton } from '../actions/tournamentsLevelActions.js';
import { tClickOpenButton } from '../actions/tournamentsLevelActions.js';

import { clickJanButton } from '../actions/tournamentsMonthActions.js';
import { clickFebButton } from '../actions/tournamentsMonthActions.js';
import { clickMarButton } from '../actions/tournamentsMonthActions.js';
import { clickAprButton } from '../actions/tournamentsMonthActions.js';
import { clickMayButton } from '../actions/tournamentsMonthActions.js';
import { clickJuneButton } from '../actions/tournamentsMonthActions.js';
import { clickJulyButton } from '../actions/tournamentsMonthActions.js';
import { clickAugButton } from '../actions/tournamentsMonthActions.js';
import { clickSepButton } from '../actions/tournamentsMonthActions.js';
import { clickOctButton } from '../actions/tournamentsMonthActions.js';
import { clickNovButton } from '../actions/tournamentsMonthActions.js';
import { clickDecButton } from '../actions/tournamentsMonthActions.js';

class PillsTournaments extends React.Component {
	render() {
	    return (
	    	<article className="cf">
			  <div className="fl w-100 w-50-l tc">
			  	<ul className="list ph3 ph5-ns tc">
				  <li className="dib mr2"><a onClick={() => this.props.tClickChallengerButton()}  className={this.props.buttonsState.challengerBtn}>Challenger</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.tClickChampsButton()}      className={this.props.buttonsState.champsBtn}>Champs</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.tClickSuperChampsButton()} className={this.props.buttonsState.superChampsBtn}>Super Champs</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.tClickOpenButton()}        className={this.props.buttonsState.openBtn}>Open</a></li>
				</ul>
			  </div>
			  <div className="fl w-100 w-50-l tc">
			  	<ul className="list ph3 ph5-ns tc">
				  <li className="dib mr2"><a onClick={() => this.props.clickJanButton()} className={this.props.monthButtonsState.janButton}>Jan.</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickFebButton()} className={this.props.monthButtonsState.febButton}>Feb.</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickMarButton()} className={this.props.monthButtonsState.marButton}>Mar.</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickAprButton()} className={this.props.monthButtonsState.aprButton}>Apr.</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickMayButton()} className={this.props.monthButtonsState.mayButton}>May</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickJuneButton()} className={this.props.monthButtonsState.juneButton}>June</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickJulyButton()} className={this.props.monthButtonsState.julyButton}>July</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickAugButton()} className={this.props.monthButtonsState.augButton}>Aug.</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickSepButton()} className={this.props.monthButtonsState.sepButton}>Sep.</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickOctButton()} className={this.props.monthButtonsState.octButton}>Oct.</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickNovButton()} className={this.props.monthButtonsState.novButton}>Nov.</a></li>
				  <li className="dib mr2"><a onClick={() => this.props.clickDecButton()} className={this.props.monthButtonsState.decButton}>Dec.</a></li>
				</ul>
			  </div>
			</article>
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

const mapDispatchToProps = (dispatch) => {
  return {
    tClickChallengerButton: () => {
		dispatch(tClickChallengerButton());
    },
    tClickChampsButton: () => {
		dispatch(tClickChampsButton());
    },
    tClickSuperChampsButton: () => {
		dispatch(tClickSuperChampsButton());
    },
    tClickOpenButton: () => {
		dispatch(tClickOpenButton());
    },
    clickJanButton: () => {
		dispatch(clickJanButton());
    },
    clickFebButton: () => {
		dispatch(clickFebButton());
    },
    clickMarButton: () => {
		dispatch(clickMarButton());
    },
    clickAprButton: () => {
		dispatch(clickAprButton());
    },
    clickMayButton: () => {
		dispatch(clickMayButton());
    },
    clickJuneButton: () => {
		dispatch(clickJuneButton());
    },
    clickJulyButton: () => {
		dispatch(clickJulyButton());
    },
    clickAugButton: () => {
		dispatch(clickAugButton());
    },
    clickSepButton: () => {
		dispatch(clickSepButton());
    },
    clickOctButton: () => {
		dispatch(clickOctButton());
    },
    clickNovButton: () => {
		dispatch(clickNovButton());
    },
    clickDecButton: () => {
		dispatch(clickDecButton());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PillsTournaments);
