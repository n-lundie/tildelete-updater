import axios, { AxiosRequestConfig } from 'axios';

const riotToken: string = process.env.RIOT_TOKEN!;
const melkPuuid: string = process.env.MELK_PUUID!;

const reqConfig: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    'X-Riot-Token': riotToken,
  },
  url: 'https://europe.api.riotgames.com/lol/match/v5/matches',
};

const getMatchIds = async (timestamp: number): Promise<string[]> => {
  const config = { ...reqConfig };
  config.url += `/by-puuid/${melkPuuid}/ids?start=${timestamp}&count=100`;
  const data = (await axios(config)).data;

  return data;
};

const getMatch = async (matchId: string): Promise<any> => {
  const config = { ...reqConfig };
  config.url += `/${matchId}`;
  const data = (await axios(config)).data;

  return data;
};

export const riotApiService = {
  getMatchIds,
  getMatch,
};
