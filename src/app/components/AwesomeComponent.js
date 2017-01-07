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

}