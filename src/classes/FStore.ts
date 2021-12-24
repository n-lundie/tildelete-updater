import { Firestore } from '@google-cloud/firestore';
import {
  IOverall,
  IRecent,
  IStatistics,
  IState,
} from '../interfaces/IStatistics';
import { IMatch } from '../interfaces/IMatch';

export class FStore {
  db;

  constructor() {
    this.db = new Firestore({
      projectId: process.env.FB_PROJECT_ID,
      keyFilename: process.env.FB_KEYFILE_LOC,
    });
  }

  syncStats(overall: IOverall, recent: IRecent): void {
    this.db
      .collection('statistics')
      .doc('overall')
      .update({ ...overall });
    this.db
      .collection('statistics')
      .doc('recent')
      .update({ ...recent });
  }

  syncTimestamp(timeStamp: number): void {
    this.db.collection('state').doc('lastUpdate').update({ timeStamp });
  }

  saveMatch(match: IMatch): void {
    this.db.collection('matches').doc(match.metadata.matchId).set(match);
  }

  async getStats(): Promise<IStatistics> {
    let stats: IStatistics = {
      overall: (
        await this.db.collection('statistics').doc('overall').get()
      ).data() as IOverall,
      recent: (
        await this.db.collection('statistics').doc('recent').get()
      ).data() as IRecent,
    };

    return stats;
  }

  async getTimestamp(): Promise<number> {
    const docRef = await this.db.collection('state').doc('lastUpdate').get();
    const timeStamp = docRef.data();
    return timeStamp!.timeStamp;
  }

  async resetData(): Promise<void> {
    const overall: IOverall = {
      currLossStreak: 0,
      currWinStreak: 0,
      longestWinStreak: 0,
      losses: 0,
      matchesPlayed: 0,
      winRate: 0,
      wins: 0,
      nearMisses: 0,
      deletions: 0,
    };

    const recent: IRecent = {
      losses: 0,
      results: [],
      winRate: 0,
      wins: 0,
    };

    const lastUpdate: IState = {
      timeStamp: 0,
    };

    await this.db
      .collection('statistics')
      .doc('overall')
      .update({ ...overall });
    await this.db
      .collection('statistics')
      .doc('recent')
      .update({ ...recent });
    await this.db
      .collection('state')
      .doc('lastUpdate')
      .update({ ...lastUpdate });
  }
}
