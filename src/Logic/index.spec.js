import { getDates } from './index';

describe('getDates function', () => {
	it('should return valid dates for two prior days in unix time', () => {
		let date = new Date('2018-03-17T23:00:00Z');
		console.log(date);
		expect(getDates(date)).toEqual({ oneDayAgo: 1521241200000, twoDaysAgo: 1521154800000});
	});
});