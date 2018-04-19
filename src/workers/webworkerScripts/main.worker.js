self.addEventListener('message', function({ data: { message, payload } }) {
	switch(message) {
		case 'initial':
			initial(payload);
			break;
		default:
			break;
	}
});

function initial({ near_earth_objects }) {
	Object.entries(near_earth_objects).map((dayObject) => {
		let result = sortByMeters(dayObject);
		transferToMain({ payload: {[dayObject[0]]: result }});
	});
}

function sortByMeters(dayObject) {
	return dayObject[1].sort(function(obj1, obj2) {
		return obj1.estimated_diameter.meters.estimated_diameter_max - obj2.estimated_diameter.meters.estimated_diameter_max;
	});
}

function transferToMain({ payload }) {
	const buffer = new ArrayBuffer(1024 * 1024 * 5);
	self.postMessage({
		payload
	}, [buffer]);
};