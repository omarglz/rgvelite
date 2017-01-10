import React from 'react';

export class PillsTournaments extends React.Component {
	constructor() {
		super();
		this.state = {
			challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
			champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
			superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
			openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			selected: "none",
			month_selected: "none"
		};
	}

	clickChallengerButton() {
		if (this.state.challengerBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
			this.setState({
				challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer", 
				champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
		    	selected: "challengerBtn"
		    });
		}
		else {
			this.setState({
				challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
				champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
		    	selected: "none"
		    });
		}
	}

	clickChampsButton() {
		if (this.state.champsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
			this.setState({
				challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
				champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
				superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
		    	selected: "champsBtn"
		    });
		}
		else {
			this.setState({
				challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
				champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
		    	selected: "none"
		    });
		}
	}

	clickSuperChampsButton() {
	    if (this.state.superChampsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
			this.setState({
				challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
				champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
				openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
		    	selected: "superChampsBtn"
		    });
		}
		else {
			this.setState({
				challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
				champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
		    	selected: "none"
		    });
		}
	}

	clickOpenButton() {
	    if (this.state.openBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
			this.setState({
				challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
				champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
		    	selected: "openBtn"
		    });
		}
		else {
			this.setState({
				challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
				champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
				openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
		    	selected: "none"
		    });
		}
	}

	clickJanButton() {
	    if (this.state.janButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "janButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickFebButton() {
	    if (this.state.febButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "febButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickMarButton() {
	    if (this.state.marButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "marButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickAprButton() {
	    if (this.state.aprButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "aprButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickMayButton() {
	    if (this.state.mayButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "mayButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}
	
	clickJuneButton() {
	    if (this.state.juneButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "juneButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickJulyButton() {
	    if (this.state.julyButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "julyButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickAugButton() {
	    if (this.state.augButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "augButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickSepButton() {
	    if (this.state.sepButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "sepButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickOctButton() {
	    if (this.state.octButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "octButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickNovButton() {
	    if (this.state.novButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "novButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}

	clickDecButton() {
	    if (this.state.decButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
				month_selected: "decButton"
		    });
		}
		else {
			this.setState({
				janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
				month_selected: "none"
		    });
		}
	}
		


	render() {
		console.log(this.state.selected);
		console.log(this.state.month_selected);
	    return (
	    	<article className="cf">
			  <div className="fl w-100 w-50-l tc">
			  	<ul className="list ph3 ph5-ns tc">
				  <li className="dib mr2"><a onClick={this.clickChallengerButton.bind(this)}  className={this.state.challengerBtn}>Challenger</a></li>
				  <li className="dib mr2"><a onClick={this.clickChampsButton.bind(this)}      className={this.state.champsBtn}>Champs</a></li>
				  <li className="dib mr2"><a onClick={this.clickSuperChampsButton.bind(this)} className={this.state.superChampsBtn}>Super Champs</a></li>
				  <li className="dib mr2"><a onClick={this.clickOpenButton.bind(this)}        className={this.state.openBtn}>Open</a></li>
				</ul>
			  </div>
			  <div className="fl w-100 w-50-l tc">
			  	<ul className="list ph3 ph5-ns tc">
				  <li className="dib mr2"><a onClick={this.clickJanButton.bind(this)} className={this.state.janButton}>Jan.</a></li>
				  <li className="dib mr2"><a onClick={this.clickFebButton.bind(this)} className={this.state.febButton}>Feb.</a></li>
				  <li className="dib mr2"><a onClick={this.clickMarButton.bind(this)} className={this.state.marButton}>Mar.</a></li>
				  <li className="dib mr2"><a onClick={this.clickAprButton.bind(this)} className={this.state.aprButton}>Apr.</a></li>
				  <li className="dib mr2"><a onClick={this.clickMayButton.bind(this)} className={this.state.mayButton}>May</a></li>
				  <li className="dib mr2"><a onClick={this.clickJuneButton.bind(this)} className={this.state.juneButton}>June</a></li>
				  <li className="dib mr2"><a onClick={this.clickJulyButton.bind(this)} className={this.state.julyButton}>July</a></li>
				  <li className="dib mr2"><a onClick={this.clickAugButton.bind(this)} className={this.state.augButton}>Aug.</a></li>
				  <li className="dib mr2"><a onClick={this.clickSepButton.bind(this)} className={this.state.sepButton}>Sep.</a></li>
				  <li className="dib mr2"><a onClick={this.clickOctButton.bind(this)} className={this.state.octButton}>Oct.</a></li>
				  <li className="dib mr2"><a onClick={this.clickNovButton.bind(this)} className={this.state.novButton}>Nov.</a></li>
				  <li className="dib mr2"><a onClick={this.clickDecButton.bind(this)} className={this.state.decButton}>Dec.</a></li>
				</ul>
			  </div>
			</article>	
		);
	}
}