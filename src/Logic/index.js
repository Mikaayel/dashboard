export function getDates(currentDate) {
	return {
		oneDayAgo: currentDate.setDate(currentDate.getDate() - 1),
		twoDaysAgo: currentDate.setDate(currentDate.getDate() - 1)
	};
};