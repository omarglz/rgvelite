import React from 'react';
import firebaseApp from '../firebase.js';
import Media from 'react-media';
var _ = require('lodash');

/**     
* Split an array into n subarrays (or columns)
* @param  {Array} flatArray Doesn't necessarily have to be flat, but this func only works 1 level deep
* @param  {Number} numCols   The desired number of columns
* @return {Array}
*/
export function splitArray(flatArray, numCols) {
  const maxColLength = Math.ceil(flatArray.length/numCols)
  const nestedArray = _.chunk(flatArray, maxColLength)
  let newArray = []
  for (var i = 0; i < numCols; i++) {
    newArray[i] = nestedArray[i] || []
  }
  return newArray
}

export class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "",
      show: false,
      galleryCol1Urls: [],
      galleryCol2AUrls: [],
      galleryCol2BUrls: [],
      galleryCol3Urls: []
    };
  } 

  componentDidMount() {
    // read all pics from firebase
    const database = firebaseApp.database();
    const galleryAll = database.ref().child('gallery-all');
    galleryAll.once('value', snap => {
        let tempUrls = snap.val().map(obj=> obj.url);
        let b1 = []
        let b2 = []
        let b3 = []
        while (tempUrls.length > 0) {
          b1.push(tempUrls.shift());
          b2.push(tempUrls.shift());
          b3.push(tempUrls.shift());
        }
        let b2split = splitArray(b2, 2);
        this.setState({
          galleryCol1Urls: b1,
          galleryCol2AUrls: b2split[0],
          galleryCol2BUrls: b2split[1],
          galleryCol3Urls: b3
        });
    });
  }

  render() {
      const { galleryCol1Urls, galleryCol2AUrls, galleryCol2BUrls, galleryCol3Urls } = this.state;
      const col1List = galleryCol1Urls.map(obj => (
        <a key={obj} className="pv2 db no-underline black"><img className="db w-100" src={obj}/></a>
      ));

      const col2AList = galleryCol2AUrls.map( (obj) => (
        <a key={obj} className="pv2 db no-underline black"><img className="db w-100" src={obj} /></a>
      ));

      const col2BList = galleryCol2BUrls.map( (obj) => (
        <a key={obj} className="pv2 db no-underline black"><img className="db w-100" src={obj} /></a>
      ));

      const col3List = galleryCol3Urls.map(obj => (
        <a key={obj} className="pv2 db no-underline black"><img className="db w-100" src={obj}/></a>
      ));

      return (
        <div className="gallery-section">
          <h2 className="tc f3 fw3 bg-white o-90 forrest-green">Gallery</h2>
          <main className="cf pa2">
            {/* small */}
            <Media query={{maxWidth: "30em"}}>
              <div>
                <div className="fl w-100 ph2">
                  { col1List.concat(col2AList) }
                </div>
                <div className="fl w-100 ph2">
                  { col2BList.concat(col3List) }
                </div>
              </div>
            </Media>
            {/* medium */}
            <Media query={{minWidth: "30em", maxWidth: "60em"}}>
              <div>
                <div className="fl w-50 ph2">
                  { col1List.concat(col2AList) }
                </div>
                <div className="fl w-50 ph2">
                  { col2BList.concat(col3List) }
                </div>
              </div>
            </Media>
            {/* large */}
            <Media query={{minWidth: "60em"}}>
              <div>
                <div className="fl w-third ph2">
                  { col1List }
                </div>
                <div className="fl w-third ph2">
                  { col2AList.concat(col2BList) }
                </div>
                <div className="fl w-third ph2">
                  { col3List }
                </div>
              </div>
            </Media>
          </main>
        </div>
    );
  }
}