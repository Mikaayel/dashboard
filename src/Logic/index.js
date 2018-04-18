export function getDates(currentDate) {
	return {
		oneDayAgo: currentDate.setDate(currentDate.getDate() - 1),
		twoDaysAgo: currentDate.setDate(currentDate.getDate() - 1)
	};
};

export function formatDate(date) {
	const d = new Date(date);
	let day = '' + d.getDate();
	let month = '' + (d.getMonth() + 1);
	const year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return `${year}-${month}-${day}`;
};

export async function makeAPICall({ oneDayAgo, twoDaysAgo }) {
	const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formatDate(twoDaysAgo)}&end_date=${formatDate(oneDayAgo)}&api_key=${process.env.REACT_APP_NASA_API_KEY}`);
	const data = await response.json();
	return data;
}