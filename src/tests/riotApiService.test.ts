import axios from 'axios';
import riotApiService from '../services/riotApiService';
import * as mockMatch from './mocks/matchIdArray.json';
import * as mockMatches from './mocks/matchIdArray.json';

describe('riotApiService', () => {
  jest.mock('axios');
  describe('getMatchIds', () => {
    const axiosRes = { data: mockMatches };
    (axios as unknown as jest.Mock).mockResolvedValue(axiosRes);

    test('return array of match ids', async () => {
      const res = await riotApiService.getMatchIds(0);
      expect(res).toEqual(mockMatches);
    });
  });

  describe('getMatch', () => {
    const axiosRes = { data: mockMatch };
    (axios as unknown as jest.Mock).mockResolvedValue(axiosRes);

    test('return match data', async () => {
      const res = await riotApiService.getMatch('matchId');
      expect(res).toEqual(mockMatch);
    });
  });
});
