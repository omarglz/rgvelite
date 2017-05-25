import React from 'react';

export class Strategies extends React.Component {
	render() {
	    return (
	    	<div className="strategies-section">
	    		<h2 className="tc f3 fw3 bg-white o-90 forrest-green">Strategies</h2>
	    		<div className="pv3">
	    			<h2 className="f3-ns f4 fw3 tl sec-text lh-copy ph3 ph5-ns">Strategies and tips for our players that will elevate their game. Check them out below.</h2>
	    		</div>
	    		<div className="pv3">
		    		<h2 className="f3-ns f4 fw3 tl sec-text lh-copy ph3 ph5-ns">This video summarizes one of our training principles very well. We believe that high 
		    			percentage tennis is the best way to get the best results.</h2>
		    		<div className="strategy-video pv3 ph5-ns ph7-l tc bg-white">
						<video className="w-100" 
							   poster="https://firebasestorage.googleapis.com/v0/b/rgv-elite.appspot.com/o/videos%2Fvideo-poster.png?alt=media&token=9673cea1-188f-4f48-9733-6ea4f11b2e76" 
							   controls 
							   src="https://firebasestorage.googleapis.com/v0/b/rgv-elite.appspot.com/o/videos%2Ftenis.mp4?alt=media&token=59e8e889-0f30-4496-9127-c543c3be47f0">
						</video>
					</div>
				</div>
				<div className="pv3">
					<h2 className="f3-ns f4 fw3 tl sec-text lh-copy ph3 ph5-ns">Forehand tips regarding form and backswing:</h2>
		    		<div className="strategy-video pv3 ph5-ns ph7-l tc bg-white">
						<video className="w-100" 
							   poster="https://firebasestorage.googleapis.com/v0/b/rgv-elite.appspot.com/o/videos%2Fforehand-poster.png?alt=media&token=0740da0c-4559-4959-a91e-f455e6caf041" 
							   controls 
							   src="https://firebasestorage.googleapis.com/v0/b/rgv-elite.appspot.com/o/videos%2Fforehand.mp4?alt=media&token=5f53cce2-686f-4c58-9aab-58cc0b8b8e41">
						</video>
					</div>
				</div>
			</div>
		);
	}
}