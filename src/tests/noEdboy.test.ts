import noEdboy from '../functions/noEdboy';
import * as match from './mocks/match.json';

describe('noEdboy', () => {
  test('return true if Edboy is not present', () => {
    const res = noEdboy(match);
    expect(res).toBe(true);
  });
});
