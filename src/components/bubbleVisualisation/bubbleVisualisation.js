import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';

class BubbleVisualisation extends Component {
	constructor(props) {
		super(props);
		this.createBarChart = this.createBarChart.bind(this);
	}
	componentDidMount() {
		const { data, dataMax } = this.props;
		this.createBarChart(data, dataMax);
	}
	componentDidUpdate() {
		const { data, dataMax } = this.props;
		this.createBarChart(data, dataMax);
	}
	createBarChart(data, dataMax) {
		const height = 250;
		const yScale = scaleLinear()
			.domain([0, dataMax]) // this translates to the peak and trough of the data
			.range([0, height]); // this translates to the height of the svg on screen

		const node = this.node;
		select(node)
			.selectAll('rect')
			.data(data, (d) => d.height)
			.enter()
			.append('rect')
			.attr('x', (d, i) => i * 10)
			.attr('y', d => height - yScale(d.height))
			.attr('width', 10)
			.attr('height', (d) => { return d.height;})
			.attr('fill', '#fe9922')
			.attr('stroke', '#fff');

		select(node)
			.selectAll('rect')
			.exit().remove();

	}
	render() {
		return(
			<svg
				ref={node => this.node = node}
				width={350} height={250}>
			</svg>
		);
	}
}

export default BubbleVisualisation;