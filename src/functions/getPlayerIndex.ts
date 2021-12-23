import { IMatch } from '../interfaces/IMatch';

function getPlayerIndex(player: string, match: IMatch): number {
  const puuid = process.env[`${player}_PUUID`];

  let index = match.metadata.participants.indexOf(puuid!);

  return index;
}

export default getPlayerIndex;
