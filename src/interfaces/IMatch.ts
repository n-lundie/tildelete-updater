interface IPlayer {
  puuid: string;
  summonerName: string;
  win: boolean;
  teamId: number;
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
