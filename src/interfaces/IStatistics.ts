export interface IOverall {
  wins: number;
  currWinStreak: number;
  longestWinStreak: number;
  losses: number;
  currLossStreak: number;
  matchesPlayed: number;
  winRate: number;
}

export interface IRecent {
  wins: number;
  losses: number;
  winRate: number;
  results: number[];
}

export interface IStatistics {
  overall: IOverall;
  recent: IRecent;
}

export interface IState {
  timeStamp: number;
}
