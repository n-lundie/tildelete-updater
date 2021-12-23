import { IMatch } from '../interfaces/IMatch';
import notBotMatch from './notBotMatch';
import teamPresent from './teamPresent';
import noEdboy from './noEdboy';

function validateMatch(match: IMatch): boolean {
  const filters = [teamPresent, notBotMatch, noEdboy];

  let valid = true;

  for (let filter of filters) {
    const conditionValid = filter(match);
    console.log('condition valid', conditionValid);
    if (!conditionValid) {
      valid = false;
      break;
    }
  }

  return valid;
}

export default validateMatch;
