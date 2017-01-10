import React from 'react';
import { PillsTournaments } from './PillsTournaments.js';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAXsLD2wshwu-Mql6vWgdhkwtXtmILXitM",
    authDomain: "rgv-elite.firebaseapp.com",
    databaseURL: "https://rgv-elite.firebaseio.com",
    storageBucket: "rgv-elite.appspot.com",
    messagingSenderId: "670684505884"
};

var firebaseApp = firebase.initializeApp(config);
var tournamentsRef = firebaseApp.database().ref().child('tournaments');

export class Tournaments extends React.Component {
	
	constructor() {
		super();
		this.state = {
			tournaments: []
			// challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
			// champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
			// superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
			// openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
			// janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
			// selected: "none",
			// month_selected: "none"
		};
	}

	componentDidMount() {
		// tournamentsRef.once('value', snap => {
		// 	this.setState({
		// 		tournaments: snap.val()
		// 	});
		// });


		// Find all dinosaurs whose height is exactly 25 meters.
		// var ref = firebase.database().ref("dinosaurs");
		// var tournamentsRef2 = firebaseApp.database().ref('tournaments');
		// tournamentsRef2.orderByChild("level").equalTo("Super Champs").once("value", function(snapshot) {
		//   console.log(snapshot.key);
		// });


		var tournamentsRef2 = firebaseApp.database().ref('tournaments/');
		// sort by date:
		// var dummyList = [];
		// tournamentsRef2.orderByChild("month").on("child_added", data => {
		//    console.log("order by filter: " + data.val());
		//    dummyList.push(data.val());
		//    this.setState ({
		// 		tournaments: dummyList
		// 	});
		// });
		
		// filter by super champs:
		// var dummyList = [];
		// tournamentsRef2.orderByChild("level").equalTo("Super Champs").on("child_added", data => {
		//    console.log("Equal to filter: " + data.val());
		//    dummyList.push(data.val());
		//    this.setState ({
		//    	tournaments: dummyList
		//    });
		// });

		//filter by january:
		var dummyList = [];
		tournamentsRef2.orderByChild("month").equalTo(1).on("child_added", data => {
		   console.log("Equal to filter: " + data.val());
		   dummyList.push(data.val());
		   this.setState ({
		   	tournaments: dummyList
		   });
		});
		
		// super champs and january
		// var dummyList = [];
		// tournamentsRef2
		//   .orderByChild("level")
		//   .startAt("Super Champs").endAt("Super Champs")
		//   .on("child_added", snapshot => { 
		//       var obj = snapshot.val();
		//       if (obj.month === 1) {
		//           dummyList.push(obj);
		//       }
		// 	  this.setState ({
		// 		tournaments: dummyList
		// 	  });
		//   });

		// filter by champs:
		// var dummyList = [];
		// tournamentsRef2.orderByChild("level").equalTo("Champs").on("child_added", data => {
		//    console.log("Equal to filter: " + data.val());
		//    dummyList.push(data.val());
		//    this.setState ({
		//    	tournaments: dummyList
		//    });
		// });
		
	}

	// clickChallengerButton() {
	// 	if (this.state.challengerBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
	// 		this.setState({
	// 			challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer", 
	// 			champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 	    	selected: "challengerBtn"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
	// 			champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 	    	selected: "none"
	// 	    });
	// 	}
	// }

	// clickChampsButton() {
	// 	if (this.state.champsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
	// 		this.setState({
	// 			challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
	// 			champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
	// 			superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 	    	selected: "champsBtn"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
	// 			champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 	    	selected: "none"
	// 	    });
	// 	}
	// }

	// clickSuperChampsButton() {
	//     if (this.state.superChampsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
	// 		this.setState({
	// 			challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
	// 			champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
	// 			openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 	    	selected: "superChampsBtn"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
	// 			champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 	    	selected: "none"
	// 	    });
	// 	}
	// }

	// clickOpenButton() {
	//     if (this.state.openBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") {
	// 		this.setState({
	// 			challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
	// 			champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer",
	// 	    	selected: "openBtn"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green", 
	// 			champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 			openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
	// 	    	selected: "none"
	// 	    });
	// 	}
	// }

	// clickJanButton() {
	//     if (this.state.janButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "janButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickFebButton() {
	//     if (this.state.febButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "febButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickMarButton() {
	//     if (this.state.marButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "marButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickAprButton() {
	//     if (this.state.aprButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "aprButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickMayButton() {
	//     if (this.state.mayButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "mayButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }
	
	// clickJuneButton() {
	//     if (this.state.juneButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "juneButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickJulyButton() {
	//     if (this.state.julyButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "julyButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickAugButton() {
	//     if (this.state.augButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "augButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickSepButton() {
	//     if (this.state.sepButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "sepButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickOctButton() {
	//     if (this.state.octButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "octButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickNovButton() {
	//     if (this.state.novButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "novButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }

	// clickDecButton() {
	//     if (this.state.decButton === "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue") {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib white bg-green pointer",
	// 			month_selected: "decButton"
	// 	    });
	// 	}
	// 	else {
	// 		this.setState({
	// 			janButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			febButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			marButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			aprButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			mayButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			juneButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			julyButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			augButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			sepButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			octButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			novButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			decButton: "f6 link br-pill ba ph3 pv2 mb2 dib dark-green pointer hover-blue",
	// 			month_selected: "none"
	// 	    });
	// 	}
	// }


	render() {
		// console.log("tournaments: " + this.state.tournaments);
		// Level	Name	City	Start Date	Sign Up By	Link
		// Dynamically build table rows from database
        var tournList = this.state.tournaments.map( (obj) => {
    //     	if (this.state.selected === "challengerBtn") {
    //     		if (obj.level === "Challenger") {
    //     			return (
				// 		<tr className="stripe-dark" key={obj.id}>
				// 			<td className="pa3">{obj.level}</td>
				// 			<td className="pa3">{obj.name}</td>
				// 			<td className="pa3">{obj.city}</td>
				// 			<td className="pa3">{obj.date}</td>
				// 			<td className="pa3">{obj["sign up"]}</td>
				// 			<td className="pa3">
				// 				<a target="_blank" className="db blue underline link hover-green" href={obj.link}>link to tournament</a>			
				// 			</td>		
				// 		</tr>
				// 	);
    //     		}
    //     	}
    //     	else if (this.state.selected === "champsBtn") {
    //     		if (obj.level === "Champs") {
    //     			return (
				// 		<tr className="stripe-dark" key={obj.id}>
				// 			<td className="pa3">{obj.level}</td>
				// 			<td className="pa3">{obj.name}</td>
				// 			<td className="pa3">{obj.city}</td>
				// 			<td className="pa3">{obj.date}</td>
				// 			<td className="pa3">{obj["sign up"]}</td>
				// 			<td className="pa3">
				// 				<a target="_blank" className="db blue underline link hover-green" href={obj.link}>link to tournament</a>			
				// 			</td>		
				// 		</tr>
				// 	);
    //     		}
    //     	}
    //     	else if (this.state.selected === "superChampsBtn") {
    //     		if (obj.level === "Super Champs") {
    //     			return (
				// 		<tr className="stripe-dark" key={obj.id}>
				// 			<td className="pa3">{obj.level}</td>
				// 			<td className="pa3">{obj.name}</td>
				// 			<td className="pa3">{obj.city}</td>
				// 			<td className="pa3">{obj.date}</td>
				// 			<td className="pa3">{obj["sign up"]}</td>
				// 			<td className="pa3">
				// 				<a target="_blank" className="db blue underline link hover-green" href={obj.link}>link to tournament</a>			
				// 			</td>		
				// 		</tr>
				// 	);
    //     		}
    //     	}
    //     	else if (this.state.selected === "openBtn") {
    //     		if (obj.level === "Open") {
    //     			return (
				// 		<tr className="stripe-dark" key={obj.id}>
				// 			<td className="pa3">{obj.level}</td>
				// 			<td className="pa3">{obj.name}</td>
				// 			<td className="pa3">{obj.city}</td>
				// 			<td className="pa3">{obj.date}</td>
				// 			<td className="pa3">{obj["sign up"]}</td>
				// 			<td className="pa3">
				// 				<a target="_blank" className="db blue underline link hover-green" href={obj.link}>link to tournament</a>			
				// 			</td>		
				// 		</tr>
				// 	);
    //     		}
    //     	}
    //     	else if (this.state.selected === "none") {
    // 			return (
				// 	<tr className="stripe-dark" key={obj.id}>
				// 		<td className="pa3">{obj.level}</td>
				// 		<td className="pa3">{obj.name}</td>
				// 		<td className="pa3">{obj.city}</td>
				// 		<td className="pa3">{obj.date}</td>
				// 		<td className="pa3">{obj["sign up"]}</td>
				// 		<td className="pa3">
				// 			<a target="_blank" className="db blue underline link hover-green" href={obj.link}>link to tournament</a>			
				// 		</td>		
				// 	</tr>
				// );
    //     	}
			return (
				<tr className="stripe-dark" key={obj.id}>
					<td className="pa3">{obj.level}</td>
					<td className="pa3">{obj.name}</td>
					<td className="pa3">{obj.city}</td>
					<td className="pa3">{obj.date}</td>
					<td className="pa3 red">{obj["sign up"]}</td>
					<td className="pa3">
						<a target="_blank" className="db blue underline link hover-green" href={obj.link}>link to tournament</a>			
					</td>		
				</tr>
			);
         });

	    return (
			<div className="mw9 center ph3-ns">
				<h2 className="tc f3 ttu tracked">Tournaments 2017</h2>

				{/* ------------pill buttons 2 columns start----------------------- 
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
				 ------------pill buttons 2 columns end----------------------- */}
				
				<PillsTournaments />

				<div className="pa1">
				  <div className="overflow-auto">
				    <table className="f6 w-100 mw8 center" cellSpacing="0">
				      <thead>
				        <tr className="stripe-dark">
				          <th className="fw6 tl pa3 bg-white">Level</th>
				          <th className="fw6 tl pa3 bg-white">Name</th>
				          <th className="fw6 tl pa3 bg-white">City</th>
				          <th className="fw6 tl pa3 bg-white">Start Date</th>
				          <th className="fw6 tl pa3 bg-white">Sign Up By</th>
						  <th className="fw6 tl pa3 bg-white">Link</th>
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