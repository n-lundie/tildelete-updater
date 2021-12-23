import notBotMatch from '../functions/notBotMatch';
import * as match from './mocks/match.json';

describe('notBotMatch', () => {
  test('return true if number of players equals 10', () => {
    const res = notBotMatch(match);
    expect(res).toBe(true);
  });
});
