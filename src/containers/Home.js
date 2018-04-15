import React, { Component } from 'react';
import { withSiteData } from 'react-static';

import Worker from '../workers/webworkerScripts/main.worker';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			average: 0
		};
		this.calculateAverage = this.calculateAverage.bind(this);
	}
	componentDidMount() {
		if (window.Worker) {
			this.worker = new Worker();
			this.worker.addEventListener('message', (event) => {
				console.log('return event', event);
				this.setState({
					[event.data.message]: event.data.payload
				});
			});
		}
	};
	calculateAverage() {
		this.worker.postMessage({
			message: 'average',
			payload: [10, 20, 30, 40, 50]
		});
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