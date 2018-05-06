import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class BubbleVisualisation extends Component {
	constructor(props) {
		super(props);
		this.createBarChart = this.createBarChart.bind(this);
	}
	componentDidMount() {
		const { data } = this.props;
		this.createBarChart(data);
	}
	componentDidUpdate() {
		const { data } = this.props;
		this.createBarChart(data);
	}

	createBarChart(data) {
		const height = 250;
		const width = 250;
		const dataMax = max(data); // get highest value in array
		const dataLength = data.length;

		const yScale = scaleLinear()
			.domain([0, dataMax]) // this translates to the peak and trough of the data
			.range([0, height]); // this translates to the height of the svg on screen

		const node = this.node;
		select(node)
			.selectAll('rect')
			.data(data, (d) => d)
			.enter()
			.append('rect')
			.attr('x', (d, i) => i * (width / dataLength))
			.attr('y', datum => height - yScale(datum))
			.attr('width', width / dataLength)
			.attr('height', d => d)
			.attr('fill', '#fe9922')
			.attr('stroke', '#fff');
	}
	render() {
		return(
			<svg
				ref={node => this.node = node}
				width={250} height={250}>
			</svg>
		);
	}
}

export default BubbleVisualisation;