import { IMatch } from '../interfaces/IMatch';
import { IMatchAnalysis } from '../interfaces/IMatchAnalysis';
import validateMatch from './validateMatch';
import getPlayerIndex from './getPlayerIndex';

function analyzeMatch(match: IMatch): IMatchAnalysis {
  const valid = validateMatch(match);

  if (valid) {
    const MelkIndex = getPlayerIndex('MELK', match);
    const win = match.info.participants[MelkIndex].win;
    return { valid: true, win };
  } else {
    return { valid: false, win: false };
  }
}

export default analyzeMatch;
