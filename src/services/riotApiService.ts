import axios, { AxiosRequestConfig } from 'axios';
import { IMatch } from '../interfaces/IMatch';

const riotDevToken: string = process.env.RIOT_DEV_TOKEN!;
const melkPuuid: string = process.env.MELK_PUUID!;

const reqConfig: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    'X-Riot-Token': riotDevToken,
  },
  url: 'https://europe.api.riotgames.com/lol/match/v5/matches',
};

const getMatchIds = async (timestamp: number): Promise<string[]> => {
  const config = { ...reqConfig };
  config.url += `/by-puuid/${melkPuuid}/ids?start=${timestamp}&count=100`;
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
