import React from 'react';
import { connect } from 'react-redux';

import { tClickChallenger1DayButton } from '../actions/tournamentsLevelActions.js';
import { tClickChallenger2DayButton } from '../actions/tournamentsLevelActions.js';
import { tClickChampsButton } from '../actions/tournamentsLevelActions.js';
import { tClickSuperChampsButton } from '../actions/tournamentsLevelActions.js';
import { tClickOpenButton } from '../actions/tournamentsLevelActions.js';

import { clickAllButton } from '../actions/tournamentsMonthActions.js';
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
	    	<article className="cf w-33-l">
			  <div className="fl w-100 tc pb3 pt4">
			  	<ul className="list ph3 ph5-ns tc mb0">
				  <li className="dib mr2"><button onClick={() => this.props.tClickChallenger1DayButton()}  className={this.props.buttonsState.challenger1DayBtn}>Challenger 1-Day</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.tClickChallenger2DayButton()}  className={this.props.buttonsState.challenger2DayBtn}>Challenger 2-Day</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.tClickChampsButton()}      className={this.props.buttonsState.champsBtn}>Champs</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.tClickSuperChampsButton()} className={this.props.buttonsState.superChampsBtn}>Super Champs</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.tClickOpenButton()}        className={this.props.buttonsState.openBtn}>Open</button></li>
				</ul>
			  </div>
			  <div className="fl w-100 tc pb3">
			  	<ul className="list ph3 ph5-ns tc mb0">
			  	  <li className="dib mr2"><button onClick={() => this.props.clickAllButton()} className={this.props.monthButtonsState.allButton}>All Months</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickJanButton()} className={this.props.monthButtonsState.janButton}>Jan</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickFebButton()} className={this.props.monthButtonsState.febButton}>Feb</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickMarButton()} className={this.props.monthButtonsState.marButton}>Mar</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickAprButton()} className={this.props.monthButtonsState.aprButton}>Apr</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickMayButton()} className={this.props.monthButtonsState.mayButton}>May</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickJuneButton()} className={this.props.monthButtonsState.juneButton}>June</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickJulyButton()} className={this.props.monthButtonsState.julyButton}>July</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickAugButton()} className={this.props.monthButtonsState.augButton}>Aug</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickSepButton()} className={this.props.monthButtonsState.sepButton}>Sep</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickOctButton()} className={this.props.monthButtonsState.octButton}>Oct</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickNovButton()} className={this.props.monthButtonsState.novButton}>Nov</button></li>
				  <li className="dib mr2"><button onClick={() => this.props.clickDecButton()} className={this.props.monthButtonsState.decButton}>Dec</button></li>
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
    tClickChallenger1DayButton: () => {
		dispatch(tClickChallenger1DayButton());
    },
    tClickChallenger2DayButton: () => {
		dispatch(tClickChallenger2DayButton());
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
    clickAllButton: () => {
		dispatch(clickAllButton());
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
