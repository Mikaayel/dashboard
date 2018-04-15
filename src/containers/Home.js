import React, { Component } from 'react';
import { withSiteData } from 'react-static';

// import worker from ''

import Worker from '../workers/webworkerScripts/main.worker';
// import WebWorker from '../workers/WebWorker';

class Home extends Component {
	constructor(props) {
		super(props);
		if (window.Worker) {
			console.log('worker supported');
		}
	}

	componentDidMount() {
		const worker = new Worker();
		worker.postMessage({a: 1});
		// this.worker = new WebWorker(worker);
		// this.worker.postMessage('hello');
	};

	render() {
		return (
			<div>
				<h1>Home</h1>
			</div>
		);
	}
}

export default withSiteData(Home);