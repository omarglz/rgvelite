import React from 'react';
import { NavBar } from './NavBar.js';

export class Root extends React.Component {
	render() {
	    return (
			<div>
				<NavBar>
					{this.props.children}
				</NavBar>
			</div>
		);
	}
}