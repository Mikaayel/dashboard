import React, { Component } from 'react';

import DataGroup from './dataGroup';

class DataContainer extends Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps) {
		return nextProps.data !== this.props.data;
	}

	renderDataGroup(data) {
		return Object.entries(data).map((dataGroup, key) => {
			return <DataGroup key={key} title={dataGroup[0]} dataGroup={dataGroup[1]} />;
		});
	}
	render() {
		const { data = {} } = this.props;
		return(
			<div>
				{ this.renderDataGroup(data) }
			</div>
		);
	}	
}

export default DataContainer;