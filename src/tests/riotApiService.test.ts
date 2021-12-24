import axios, { AxiosRequestConfig } from 'axios';
import riotApiService from '../services/riotApiService';
import * as mockMatch from './mocks/match-noEd.json';
import { matchArr100 } from './mocks/matchIdArray';

jest.mock('axios');
const matchIds: string[] = matchArr100;

describe('riotApiService', () => {
  describe('getMatchIds', () => {
    const axiosRes = { data: matchIds };
    (axios as unknown as jest.Mock).mockResolvedValueOnce(axiosRes);

    test('return array of match ids', async () => {
      const res = await riotApiService.getMatchIds('MELK', 0);
      expect(res).toEqual(matchIds);
    });

    test('call axios with given arguments', async () => {
      const axiosRes = { data: matchIds };
      (axios as unknown as jest.Mock).mockResolvedValueOnce(axiosRes);

      const reqConfig: AxiosRequestConfig = {
        method: 'GET',
        headers: {
          'X-Riot-Token': process.env.RIOT_DEV_TOKEN!,
        },
        url: 'https://europe.api.riotgames.com/lol/match/v5/matches',
      };

      const puuid = process.env.MELK_PUUID;

      reqConfig.url += `/by-puuid/${puuid}/ids?startTime=0&count=100`;

      await riotApiService.getMatchIds('MELK', 0);
      expect(axios).toBeCalledWith(reqConfig);
    });
  });

  describe('getMatch', () => {
    test('return match data', async () => {
      const axiosRes = { data: mockMatch };
      (axios as unknown as jest.Mock).mockResolvedValueOnce(axiosRes);

      const res = await riotApiService.getMatch('matchId');
      expect(res).toEqual(mockMatch);
    });
  });
});
