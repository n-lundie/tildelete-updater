interface IPlayer {
  puuid: string;
  summonerName: string;
  win: boolean;
}

export interface IMatch {
  metadata: {
    matchId: string;
    participants: string[];
  };
  info: {
    gameCreation: number;
    gameEndTimestamp: number;
    participants: IPlayer[];
  };
}
