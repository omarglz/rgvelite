import React from 'react';
import firebaseApp from '../firebase.js';
// import { Modal } from 'react-bootstrap';

export class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "",
      show: false,
      galleryCol1Urls: [],
      galleryCol2Urls: [],
      galleryCol3Urls: []
    };
  } 

  componentDidMount() {
    // read all tournaments from firebase
    console.log('componentDidMount');
    var database = firebaseApp.database();
    var galleryCol1 = database.ref().child('gallery-col1');
    var galleryCol2 = database.ref().child('gallery-col2');
    var galleryCol3 = database.ref().child('gallery-col3');

    var col1Urls = [];
    galleryCol1.once('value', snap => {
        snap.val().map( (obj) => {
            col1Urls.push(obj.url);
        });    
        this.setState({
            galleryCol1Urls: col1Urls
        });
    });

    var col2Urls = [];
    galleryCol2.once('value', snap => {
        snap.val().map( (obj) => {
            col2Urls.push(obj.url);
        });    
        this.setState({
            galleryCol2Urls: col2Urls
        });
    });

    var col3Urls = [];
    galleryCol3.once('value', snap => {
        snap.val().map( (obj) => {
            col3Urls.push(obj.url);
        });    
        this.setState({
            galleryCol3Urls: col3Urls
        });
    });

  }

  // showModal(obj) {
  //   this.setState({show: true});
  //   this.setState({url: obj});
  // }

  // hideModal() {
  //   this.setState({show: false});
  // }

  render() {
      const col1List = this.state.galleryCol1Urls.map( (obj) => {
          return (
            <a className="pv2 db no-underline black">
              {/*<img className="db w-100" src={obj} onClick={() => this.showModal(obj)} />*/}
              <img className="db w-100" src={obj}/>
            </a>
          );
      })

     const col2List = this.state.galleryCol2Urls.map( (obj) => {
          return (
            <a className="pv2 db no-underline black"><img className="db w-100" src={obj} /></a>
          );
      })  

      const col3List = this.state.galleryCol3Urls.map( (obj) => {
          return (
            <a className="pv2 db no-underline black"><img className="db w-100" src={obj} /></a>
          );
      }) 

      // const imgModal = (
      //   <Modal show={this.state.show} onHide={() => this.hideModal()} backdrop dialogClassName="">
      //       <Modal.Body>
      //         <img className="db w-100" src={this.state.url} />
      //       </Modal.Body>
      //   </Modal> 
      // );

      return (
        <div className="gallery-section">
          <h2 className="tc f3 fw3 bg-white o-90 hot-pink">Gallery</h2>
          <main className="cf pa2">
            <div className="fl w-100 w-50-ns ph2">
              { col1List }
            </div>
            <div className="fl w-50 w-25-ns ph2">
              { col2List }
            </div>
            <div className="fl w-50 w-25-ns ph2">
              { col3List }
            </div>
            {/* imgModal */}
          </main>
        </div>
    );
  }
}