import { IMatch } from '../interfaces/IMatch';

function noEdboy(match: IMatch): boolean {
  const puuid = process.env.EDBO_PUUID;

  return !match.metadata.participants.includes(puuid!);
}

export default noEdboy;
