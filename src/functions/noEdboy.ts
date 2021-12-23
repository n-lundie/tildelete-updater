import { IMatch } from '../interfaces/IMatch';

function noEdboy(match: IMatch): boolean {
  const puuid = process.env.EDBO_PUUID;
  if (match.metadata.participants.includes(puuid!)) return false;
  return true;
}

export default noEdboy;
