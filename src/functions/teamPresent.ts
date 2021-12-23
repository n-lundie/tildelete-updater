import { IMatch } from '../interfaces/IMatch';

function teamPresent(match: IMatch): boolean {
  const team = [process.env.PIGS_PUUID, process.env.V4VN_PUUID];

  let valid = true;

  for (const player of team) {
    if (!match.metadata.participants.includes(player!)) {
      valid = false;
      break;
    }
  }

  return valid;
}

export default teamPresent;
