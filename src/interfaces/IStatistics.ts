export interface IOverall {
  wins: number;
  losses: number;
  matchesPlayed: number;
  currWinStreak: number;
  currLossStreak: number;
  longestWinStreak: number;
  winRate: number;
  nearMisses: number;
  deletions: number;
}

export interface IRecent {
  results: number[];
  wins: number;
  losses: number;
  winRate: number;
}

export interface IStatistics {
  overall: IOverall;
  recent: IRecent;
}

export interface IState {
  timeStamp: number;
}
