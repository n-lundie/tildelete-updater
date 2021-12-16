import axios, { AxiosRequestConfig } from 'axios';
import { IMatch } from '../interfaces/IMatch';

const reqConfig: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    'X-Riot-Token': process.env.RIOT_DEV_TOKEN!,
  },
  url: 'https://europe.api.riotgames.com/lol/match/v5/matches',
};

const getMatchIds = async (
  player: string,
  startTime: number
): Promise<string[]> => {
  const puuid = process.env[`${player}_PUUID`];

  const config = { ...reqConfig };
  config.url += `/by-puuid/${puuid}/ids?startTime=${startTime}&count=100`;

  const data = (await axios(config)).data;

  return data;
};

const getMatch = async (matchId: string): Promise<IMatch> => {
  const config = { ...reqConfig };
  config.url += `/${matchId}`;

  const data = (await axios(config)).data;

  return data;
};

const riotApiService = {
  getMatchIds,
  getMatch,
};

export default riotApiService;
