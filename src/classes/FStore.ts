import { Firestore } from '@google-cloud/firestore';
import { IOverall, IRecent, IStatistics } from '../interfaces/IStatistics';
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
    const timeStamp = docRef.data()!.timestamp;
    return timeStamp;
  }
}
