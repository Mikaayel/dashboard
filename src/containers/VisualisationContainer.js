import React, { Component } from 'react';

import BubbleVisualisation from '../components/bubbleVisualisation/bubbleVisualisation';
class VisualisationContainer extends Component {
	constructor(props) {
		super(props);
	}

	processData(data = {}) {
		return Object.entries(data).map((dataGroup, key) => {
			const mappedData = dataGroup[1].map((datum) => {
				return datum.estimated_diameter.meters.estimated_diameter_max;
			});
			return <BubbleVisualisation key={key} data={mappedData}/>;
		});
	}

	render() {
		const { data } = this.props;
		return (
			<div>
				{this.processData(data)}
			</div>
		);
	}
}

export default VisualisationContainer;