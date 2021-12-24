import noEdboy from '../functions/noEdboy';
import * as matchEdYes from './mocks/match.json';
import * as matchEdNo from './mocks/match-bot-edboy.json';

describe('noEdboy', () => {
  test('return true if Edboy is NOT present', () => {
    const res = noEdboy(matchEdYes);
    expect(res).toBe(true);
  });

  test('return false if Edboy IS present', () => {
    const res = noEdboy(matchEdNo);
    expect(res).toBe(false);
  });
});
