import validateMatch from '../functions/validateMatch';
import * as match from './mocks/match.json';

describe('validateMatch', () => {
  test('return true if all filters return true', () => {
    const res = validateMatch(match);
    expect(res).toBe(true);
  });
});
