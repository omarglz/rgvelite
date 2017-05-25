import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import PillsRankings from './PillsRankings.js';
import firebaseApp from '../firebase.js';

class UpdateGallery extends React.Component {
	constructor() {
		super();
		this.state = {
			file: null,
			images: []
		};
	} 

	write(name, level, rank, age, date) {
		const division = level + " " + age;
		var database = firebaseApp.database();
		database.ref('rankings/' + name + '/as of').set(date);
		database.ref('rankings/' + name + '/division').set(division);
		database.ref('rankings/' + name + '/level').set(level);
		if (rank != "") {
			database.ref('rankings/' + name + '/rank position').set(Number(rank));
		}
	}

	componentDidMount() {
		// read all rankings from firebase
		var dummyList = [];
		var database = firebaseApp.database();
		var rankingsRef = database.ref('gallery-all/');
		rankingsRef.on("child_added", snap => {
		    dummyList.push(snap.val());
			this.setState({
				images: dummyList
			});
		});
	}

	componentWillMount() {
	    this.authListener = this.authListener.bind(this);
	    this.authListener();
	}
	logoutWithPass() {
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		}, function(error) {
		  // An error happened.
		  console.log("ERROR");
		});
	}
	authListener() {
		this.fireBaseListener = firebase.auth().onAuthStateChanged((user) => {
	      if (user) {
	      } else {
	        // No user is signed in.
			window.location.href = "../sign-in";
	      }
	    });
	}

	componentDidUpdate() {
	    componentHandler.upgradeDom();
	}

	uploadFile() {
		var file = document.getElementById("image-file");
		if (file.files[0].name != null) {
			console.log(file.files[0].name);
		}
		// var filename = document.getElementById("image-file").value;

		// var uploadTask = storageRef.child('images/' + file.name).put(file);

		// var storageRef = firebase.storage().ref('test/');

		// // Create a reference to 'mountains.jpg'
		// var mountainsRef = storageRef.child('audience.png');

		// // Create a reference to 'images/mountains.jpg'
		// var mountainImagesRef = storageRef.child('test/audience.png');

		// var uploadTask = storageRef.child('test/' + file.name).put(file, metadata);
	}

	render() {
		// const allLevels = ["Super Champs", "Champs", "Challenger"];
		// const allAges = ["G12", "G14", "G16", "G18", "B12", "B14", "B16", "B18"];
		const imageList = this.state.images.map( (obj) => {
			return (
				<h2 className="f2 fw3">
					{obj.filename}
				</h2>
			);
        })  
	    return (
			<div className={"mw9 center update-gallery"}>
				<h2 className="tc f3 fw3 bg-white o-90 forrest-green">Update Gallery</h2>
				<div className="ph5">
					<h2 className="f3 fw3">Upload Image: </h2>
					<input type="file" id="image-file" accept="image/*" />
					<h2 onClick={() => this.uploadFile()} className="underline pointer f3 fw3 blue">Upload Image</h2>
				</div>
				<div className="ph5 pb4 pt0">
			    	<h2 className>image list: </h2>
			    	{imageList}
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


export default connect(mapStateToProps)(UpdateGallery);

