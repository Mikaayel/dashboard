import React, { Component } from 'react';
import { withSiteData } from 'react-static';

import worker from '../workers/workerScripts/main';
import WebWorker from '../workers/WebWorker';

class Home extends Component {
	constructor(props) {
		super(props);
		if (window.Worker) {
			console.log('worker supported');
		}
	}

	componentDidMount() {
		this.worker = new WebWorker(worker);
		this.worker.postMessage('hello');
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