self.addEventListener('message', function ({ data: { message, payload } }) {
	switch (message) {
		case 'initial':
			initial(payload);
			break;
		default:
			break;
	}
});

function initial({ near_earth_objects }) {
	const sortedByDate = sortByDate(near_earth_objects);
	sortedByDate.map((dayObject) => {
		const result = sortByMeters(dayObject);
		transferToMain({ payload: { [dayObject[0]]: result } });
	});
};

function sortByDate(near_earth_objects) {
	return Object.entries(near_earth_objects).sort(function (obj1, obj2) {
		return (new Date(obj2[0]) - new Date(obj1[0]));
	});
};

function sortByMeters(dayObject) {
	return dayObject[1].sort(function (obj1, obj2) {
		return obj1.estimated_diameter.meters.estimated_diameter_max - obj2.estimated_diameter.meters.estimated_diameter_max;
	});
};

function transferToMain({ payload }) {
	const buffer = new ArrayBuffer(1024 * 1024 * 5);
	self.postMessage({
		payload
	}, [buffer]);
};