import notBotMatch from '../functions/notBotMatch';
import * as match from './mocks/match.json';
import * as botMatch from './mocks/match-bot-edboy.json';

describe('notBotMatch', () => {
  test('return true if number of players equals 10', () => {
    const res = notBotMatch(match);
    expect(res).toBe(true);
  });

  test('return false if number of players is not 10', () => {
    const res = notBotMatch(botMatch);
    expect(res).toBe(false);
  });
});
