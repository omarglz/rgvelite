import React from 'react';

export class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><a onClick={this.onLike} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">Like Me</a></div>
      </div>
    );
  }

  // TOGGLING BUTTONS SECTIONS

  constructor() {
    super();
    this.state = {
      tournaments: [],
      challengerBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
      champsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
      superChampsBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green",
      openBtn: "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green"
    };
  }

  componentDidMount() {
    tournamentsRef.once('value', snap => {
      this.setState({
        tournaments: snap.val()
      });
    });
    // Find all dinosaurs whose height is exactly 25 meters.
    // var ref = firebase.database().ref("dinosaurs");
    // var tournamentsRef2 = firebaseApp.database().ref('tournaments');
    // tournamentsRef2.orderByChild("level").equalTo("Super Champs").once("value", function(snapshot) {
    //   console.log(snapshot.key);
    // });
  }

  toggleChallengerButton() {
      var css = (this.state.challengerBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") ? "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer" : "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green";
      this.setState({
        challengerBtn: css
      });
  }

  toggleChampsButton() {
      var css = (this.state.champsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") ? "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer" : "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green";
      this.setState({
        champsBtn: css
      });
  }

  toggleSuperChampsButton() {
      var css = (this.state.superChampsBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") ? "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer" : "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green";
      this.setState({
        superChampsBtn: css
      });
  }

  toggleOpenButton() {
      var css = (this.state.openBtn === "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green") ? "f6 link br-pill ba ph3 pv2 mb2 dib white bg-blue pointer" : "f6 link br-pill ba ph3 pv2 mb2 dib dark-blue pointer hover-green";
      this.setState({
        openBtn: css
      });
  }

}

