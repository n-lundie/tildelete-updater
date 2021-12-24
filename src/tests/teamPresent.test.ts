import teamPresent from '../functions/teamPresent';
import * as match from './mocks/match-noEd.json';
import * as match2 from './mocks/match-bot-Ed.json';
import * as matchNoPig from './mocks/match-noPig-noEd.json';

describe('teamPresent', () => {
  test('return true if all team members are present', () => {
    const res = teamPresent(match);
    const res2 = teamPresent(match2);
    expect(res).toBe(true);
    expect(res2).toBe(true);
  });

  test('return false if a team member is not present', () => {
    const res = teamPresent(matchNoPig);
    expect(res).toBe(false);
  });
});
