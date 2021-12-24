import notBotMatch from '../functions/notBotMatch';
import * as match from './mocks/match-noEd.json';
import * as match2 from './mocks/match-noPig-noEd.json';
import * as botMatch from './mocks/match-bot-Ed.json';

describe('notBotMatch', () => {
  test('return true if number of players equals 10', () => {
    const res = notBotMatch(match);
    const res2 = notBotMatch(match2);
    expect(res).toBe(true);
    expect(res2).toBe(true);
  });

  test('return false if number of players is not 10', () => {
    const res = notBotMatch(botMatch);
    expect(res).toBe(false);
  });
});
