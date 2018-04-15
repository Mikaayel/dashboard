self.addEventListener('message', function({ data: { message, payload} }) {
	switch(message) {
		case 'average':
			self.postMessage(CalculateAverage(payload));
			break;
	}
});

function CalculateAverage(payload) {
	const payloadLength = payload.length;
	let total = 0;
	payload.map((item) => {
		total = total + item;
	});
	return {
		message: 'average',
		payload: total / payloadLength
	};
};