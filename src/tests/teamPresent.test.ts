import teamPresent from '../functions/teamPresent';
import * as match from './mocks/match.json';

describe('teamPresent', () => {
  test('return true if all team members are present', () => {
    const res = teamPresent(match);
    expect(res).toBe(true);
  });
});
