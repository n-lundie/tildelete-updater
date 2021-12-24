import { IMatch } from '../interfaces/IMatch';

function noEdboy(match: IMatch): boolean {
  const puuid = process.env.EDBO_PUUID;

  const exceptions = ['EUW1_5558568766', 'EUW1_5558653380'];

  if (exceptions.includes(match.metadata.matchId)) {
    return true;
  } else {
    return !match.metadata.participants.includes(puuid!);
  }
}

export default noEdboy;
