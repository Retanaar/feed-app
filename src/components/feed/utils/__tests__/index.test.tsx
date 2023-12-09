import { getTypeIcon, getDaysFromNow } from '../';
import { FeedType } from '../../feedTypes';

describe('getTypeIcon function', () => {
  it('returns correct icon for MESSAGE type', () => {
    expect(getTypeIcon(FeedType.MESSAGE)).toEqual(expect.any(Object));
  });
  it('returns correct icon for COFFEE type', () => {
    expect(getTypeIcon(FeedType.COFFEE)).toEqual(expect.any(Object));
  });
});

describe('getDaysFromNow function', () => {
  it('returns correct number of days from timestamp', () => {
    const timestamp = new Date().getTime() - 24 * 60 * 60 * 1000 * 8;

    const expectedDays = 8;

    expect(getDaysFromNow(timestamp)).toBe(expectedDays);
  });

  it('returns correct number of days from timestamp for today', () => {
    const timestamp = new Date().getTime();

    const expectedDays = 0;

    expect(getDaysFromNow(timestamp)).toBe(expectedDays);
  });

});
