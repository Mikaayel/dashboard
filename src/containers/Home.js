import React, { Component } from 'react'
import { withSiteData } from 'react-static'
//
// import logoImg from '../logo.png'

// export default withSiteData(() => (
//   <div>
//     <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
//     <img src={logoImg} alt="" />
//   </div>
// ))

class Home extends Component {
	constructor(props) {
		super(props);
		if(window.Worker) {
			console.log('worker supported');
		}	

	}
	render() {
		return (
			<div>
				<h1>Home</h1>
			</div>
		);
	}
}

export default withSiteData(Home);