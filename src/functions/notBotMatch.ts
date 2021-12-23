import { IMatch } from '../interfaces/IMatch';

function notBotMatch(match: IMatch): boolean {
  if (match.metadata.participants.length === 10) return true;
  return false;
}

export default notBotMatch;
