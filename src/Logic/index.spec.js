import { getDates, formatDate } from './index';

describe('getDates function', () => {
	it('should return valid dates for two prior days in unix time', () => {
		let date = new Date('2018-03-17T23:00:00Z');
		expect(getDates(date)).toEqual({ oneDayAgo: 1521241200000, twoDaysAgo: 1521154800000 });
	});
});

describe('formatDate function', () => {
	it('should correctly format unix date', () => {
		const unixDate = 1523836800000;
		expect(formatDate(unixDate)).toEqual('2018-04-16');
	});
})