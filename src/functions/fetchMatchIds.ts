import riotApiService from '../services/riotApiService';

const fetchMatchIds = async (
  player: string,
  startTime: number
): Promise<string[]> => {
  let matchIds = await riotApiService.getMatchIds(player, startTime);

  if (matchIds.length > 19) {
    matchIds = matchIds.slice(-19).reverse();
  } else if (matchIds.length > 1) {
    matchIds.reverse();
  }

  return matchIds;
};

export default fetchMatchIds;
