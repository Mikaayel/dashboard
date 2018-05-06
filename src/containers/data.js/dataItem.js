import React from 'react';

const DataItem = ({ datum }) => {
	const name = datum.name;
	const diameter = datum.estimated_diameter.meters.estimated_diameter_max;
	return (
		<div>
			<h3>name: { name }</h3>
			<p>max diameter: { diameter.toFixed(1) }m</p>
		</div>
	);
};

export default DataItem;