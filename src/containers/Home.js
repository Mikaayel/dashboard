import React, { Component } from 'react';
import { withSiteData } from 'react-static';

import Worker from '../workers/webworkerScripts/main.worker';

import DataContainer from './data.js/dataContainer';
import VisualisationContainer from './VisualisationContainer';


import { getDates, makeAPICall, messageWebWorker } from '../Logic';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			average: 0,
			data: undefined,
			gpuAvailable: false,
			offline: false,
			gpuAcceleration: false,
			webWorkerAvailable: false,
			webWorkerAcceleration: false,
		};
		this.worker = null;
		this.TOSupport = false;
		this.messageWebWorker = messageWebWorker.bind(this);
	}

	async main() {
		const currentDate = new Date();
		const returnedDates = getDates(currentDate);
		const response = await makeAPICall(returnedDates);
		this.messageWebWorker({ message: 'initial', payload: response });
	}

	componentDidMount() {
		this.worker = new Worker();
		this.worker.addEventListener('message', (event) => {
			this.setState({
				data: {
					...this.state.data,
					...event.data.payload
				}
			});
		});
		this.main();
	};

	render() {
		const { data } = this.state;
		return (
			<div>
				<h1>Near Earth Objects</h1>
				<VisualisationContainer data={data} />
				<DataContainer data={data} />
			</div>
		);
	}
}


export default withSiteData(Home);