import fetchMatchIds from '../functions/fetchMatchIds';
import riotApiService from '../services/riotApiService';
import { matchArr100 } from './mocks/matchIdArray';

jest.mock('../services/riotApiService', () => {
  const ogModule = jest.requireActual('../services/riotApiService');
  const resolveVal = jest.requireActual('./mocks/matchIdArray');

  return {
    __esModule: true,
    ...ogModule,
    default: { getMatchIds: jest.fn(() => resolveVal.matchArr100) },
  };
});

describe('fetchMatchIds', () => {
  test('call service function with given argument', async () => {
    const res = await fetchMatchIds('MELK', 25);
    expect(riotApiService.getMatchIds).toBeCalledWith('MELK', 25);
  });

  test('reduce list length to 20', async () => {
    const res = await fetchMatchIds('MELK', 0);
    expect(res.length).toBe(19);
  });

  test('reverse list', async () => {
    const res = await fetchMatchIds('MELK', 0);
    expect(res).toEqual(matchArr100.slice(-19).reverse());
  });
});
