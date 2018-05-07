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
			dateOffset: 2
		};
		this.worker = null;
		this.TOSupport = false;
		this.messageWebWorker = messageWebWorker.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	async main({ dateOffset }) {
		const currentDate = new Date();
		const returnedDates = getDates({ startDate: currentDate, dateOffset });
		// console.log(returnedDates);
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
		const { dateOffset } = this.state;
		this.main({ dateOffset });
	};

	handleClick(e) {
		e.preventDefault();
		this.main({ dateOffset: e.target.value});
	}

	render() {
		const { data } = this.state;
		// console.log(data);
		return (
			<div>
				<button onClick={this.handleClick} value='1'>1 day</button>
				<button onClick={this.handleClick} value='3'>3 day</button>
				<button onClick={this.handleClick} value='7'>7 day</button>
				<h1>Near Earth Objects</h1>
				<VisualisationContainer data={data} />
				<DataContainer data={data} />
			</div>
		);
	}
}


export default withSiteData(Home);