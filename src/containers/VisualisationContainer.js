import React, { Component } from 'react';

import BubbleVisualisation from '../components/bubbleVisualisation/bubbleVisualisation';
class VisualisationContainer extends Component {
	constructor(props) {
		super(props);
	}
	processData(data = {}) {
		const mappedData = [];
		let dataMax = 0;
		Object.entries(data).map((dataGroup) => {
			dataGroup && dataGroup[1].map((d) => {
				// console.log(d);
				const height = d.estimated_diameter.meters.estimated_diameter_max;
				const neo_id = d.neo_reference_id;
				height > dataMax ? dataMax = height : null;
				mappedData.push({
					neo_id,
					date: dataGroup[0],
					height,
					hazard: d.is_potentially_hazardous_asteroid,
					miss_distance: d.close_approach_data[0].miss_distance.lunar
				});
			});
		});
		return <BubbleVisualisation data={mappedData} dataMax={dataMax}/>;
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