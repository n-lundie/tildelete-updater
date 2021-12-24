import noEdboy from '../functions/noEdboy';
import * as matchEd from './mocks/match-bot-Ed.json';
import * as matchExcpEd from './mocks/match-excp-Ed.json';
import * as matchExcpEd2 from './mocks/match-excp-Ed-2.json';
import * as matchNoEd from './mocks/match-noEd.json';
import * as matchNoEd2 from './mocks/match-noPig-noEd.json';

describe('noEdboy', () => {
  test('return true if Edboy is NOT present', () => {
    const res = noEdboy(matchNoEd);
    const res2 = noEdboy(matchNoEd2);
    expect(res).toBe(true);
    expect(res2).toBe(true);
  });

  test('return false if Edboy IS present', () => {
    const res = noEdboy(matchEd);
    expect(res).toBe(false);
  });

  test('return true if match is exception', () => {
    const res = noEdboy(matchExcpEd);
    const res2 = noEdboy(matchExcpEd2);
    expect(res).toBe(true);
    expect(res2).toBe(true);
  });
});
