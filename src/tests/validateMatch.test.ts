import validateMatch from '../functions/validateMatch';
import * as matchNoEd from './mocks/match-noEd.json';
import * as matchBotEd from './mocks/match-bot-Ed.json';
import * as matchNoPigNoEd from './mocks/match-noPig-noEd.json';

describe('validateMatch', () => {
  test('return true if all filters return true', () => {
    const res = validateMatch(matchNoEd);
    expect(res).toBe(true);
  });

  test('return false if any filter returns false', () => {
    const res = validateMatch(matchBotEd);
    const res2 = validateMatch(matchNoPigNoEd);
    expect(res).toBe(false);
    expect(res2).toBe(false);
  });
});
