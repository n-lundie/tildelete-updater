import { IMatch } from '../interfaces/IMatch';

function notBotMatch(match: IMatch): boolean {
  return match.metadata.participants.length === 10;
}

export default notBotMatch;
