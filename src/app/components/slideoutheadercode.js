<div className="mdl-layout__drawer">
			  	<div className="mdl-layout__title">
			  		<div className="cf ph3 pt3 dtc tc bb b--black-10">
			  			<img src={"../images/icon-152.png"} className="br3 tc" />
			  			<h2 className="f3 fw4 tc prim-text fl lh-copy pv3">RGV Elite Tennis Academy</h2>
			  		</div>
			  	</div>
			    <div className="cf">
		    		<div className="pv1 bb b--black-10">
		    			<Link to={"/"}    onClick={() => this.hideDrawer()} className="no-underline">
			    			<h2 className="ph3 tl w-100 f3 fw4 prim-text bg-animate hover-bg-white-80">
								<i className="material-icons dib v-mid pr4">home</i>
		    					<span className="v-mid">Home</span>
			    			</h2>
		    			</Link>
		    	    	<Link to={"/about-us"}  onClick={() => this.hideDrawer()} className="no-underline"> 
			    	    	<h2 className="ph3 tl w-100 f3 fw4 prim-text bg-animate hover-bg-white-80">
								<i className="material-icons dib v-mid pr4">info</i>
		    					<span className="v-mid">About Us</span>
				    		</h2>
		    	    	</Link>
				    	<Link to={"/programs"}    onClick={() => this.hideDrawer()} className="no-underline">
					    	<h2 className="ph3 tl w-100 f3 fw4 prim-text bg-animate hover-bg-white-80">
								<i className="material-icons dib v-mid pr4">people</i>
		    					<span className="v-mid">Programs</span>
					    	</h2>
				    	</Link>
				    </div>
		            <div className="pv1 bb b--black-10">
		            	<Link to={"/tournaments"} onClick={() => this.hideDrawer()} className="no-underline">
			            	<h2 className="ph3 tl w-100 f3 fw4 prim-text bg-animate hover-bg-white-80">
								<i className="fa fa-trophy dib v-mid pr4"></i>
		    					<span className="v-mid">Tournaments</span>
						    </h2>
		            	</Link>
						<Link to={"/rankings"}    onClick={() => this.hideDrawer()} className="no-underline">
							<h2 className="ph3 tl w-100 f3 fw4 prim-text bg-animate hover-bg-white-80">
								<i className="material-icons dib v-mid pr4">trending_up</i>
		    					<span className="v-mid">Rankings</span>
						    </h2>
						</Link>
		            	<Link to={"/strategies"}     onClick={() => this.hideDrawer()} className="no-underline">
			            	<h2 className="ph3 tl w-100 f3 fw4 prim-text bg-animate hover-bg-white-80">
								<i className="material-icons dib v-mid pr4">lightbulb_outline</i>
		    					<span className="v-mid">Strategies</span>
						    </h2>
		            	</Link>
		            </div>
		            <div className="pv1">
		            	<Link to={"/gallery"}     onClick={() => this.hideDrawer()} className="no-underline">
			            	<h2 className="ph3 tl w-100 f3 fw4 prim-text bg-animate hover-bg-white-80">
								<i className="material-icons dib v-mid pr4">photo_camera</i>
		    					<span className="v-mid">Gallery</span>
						    </h2>
		            	</Link>
		            </div>
			    </div>
			  </div>