console.log('script works');

self.addEventListener('message', function(event) {
	console.log(event.data);
});