import React from 'react';

import DataItem from './dataItem';

const DataGroup = ({ dataGroup, title }) => {
	return(
		<div>
			<h2>{ title }</h2>
			{dataGroup.map((datum, key) => {
				return <DataItem key={key} datum={datum} />; 
			})}
		</div>
	);
};

export default DataGroup;