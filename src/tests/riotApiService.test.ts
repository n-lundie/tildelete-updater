import axios from 'axios';
import riotApiService from '../services/riotApiService';
import * as mockMatch from './mocks/match.json';
import * as mockMatchIds from './mocks/matchIdArray.json';

jest.mock('axios');
const matchIds: string[] = mockMatchIds as string[];

describe('riotApiService', () => {
  describe('getMatchIds', () => {
    const axiosRes = { data: matchIds };
    (axios as unknown as jest.Mock).mockResolvedValueOnce(axiosRes);

    test('return array of match ids', async () => {
      const res = await riotApiService.getMatchIds(0);
      expect(res).toEqual(matchIds);
    });
  });

  describe('getMatch', () => {
    const axiosRes = { data: mockMatch };
    (axios as unknown as jest.Mock).mockResolvedValueOnce(axiosRes);

    test('return match data', async () => {
      const res = await riotApiService.getMatch('matchId');
      expect(res).toEqual(mockMatch);
    });
  });
});
