import React, { Component } from 'react';
import { withSiteData } from 'react-static';

import Worker from '../workers/webworkerScripts/main.worker';

import { getDates, makeAPICall } from '../Logic';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			average: 0
		};
		this.worker = null;
		this.TOSupport = false;
		this.calculateAverage = this.calculateAverage.bind(this);
	}

	async main() {
		const currentDate = new Date();
		const returnedDates = getDates(currentDate);
		let response = await makeAPICall(returnedDates);
		console.log(response);
	}

	componentDidMount() {
		// check for Worker support
		if (window.Worker) {
			this.worker = new Worker();

			// check for transferable objects support
			const ab = new ArrayBuffer(1);
			this.worker.postMessage(ab, [ab]);
			if (!ab.byteLength) {
				this.TOSupport = true;
			}

			this.worker.addEventListener('message', (event) => {
				console.log('return event', event);
				this.setState({
					[event.data.message]: event.data.payload
				});
			});
		}
		this.main();
	};

	calculateAverage() {
		const r = new ArrayBuffer(1024 * 1024 * 5);
		console.log('before', r.byteLength);
		this.worker.postMessage({
			message: 'average',
			payload: [10, 20, 30, 40, 50]
		}, [r]);
		console.log('after', r.byteLength);
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<button
					onClick={this.calculateAverage}
					type="button"
				>
					Average
				</button>
				<p>{this.state.average}</p>
			</div>
		);
	}
}

export default withSiteData(Home);