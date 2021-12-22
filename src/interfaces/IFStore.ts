import { IMatch } from './IMatch';
import { IOverall, IRecent, IStatistics } from './IStatistics';

export interface IFStore {
  syncStats(overall: IOverall, recent: IRecent): void;
  syncTimestamp(timestamp: number): void;
  saveMatch(match: IMatch): void;
  getStats(): Promise<IStatistics>;
}
