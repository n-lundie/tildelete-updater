import { UpdaterCore } from './UpdaterCore';
import { IStatistics } from '../interfaces/IStatistics';

const inputStats: IStatistics = {
  overall: {
    wins: 0,
    losses: 0,
    currWinStreak: 0,
    currLossStreak: 0,
    longestWinStreak: 0,
    matchesPlayed: 0,
    winRate: 0,
  },
  recent: {
    wins: 0,
    losses: 0,
    winRate: 0,
    results: [],
  },
};

describe('UpdaterCore', () => {
  const core = new UpdaterCore(inputStats, 0);

  it('should correctly add a win', () => {
    core.addWin();

    expect(core.statistics.overall.matchesPlayed).toBe(1);
    expect(core.statistics.overall.wins).toBe(1);
    expect(core.statistics.recent.results[0]).toBe(1);
  });

  it('should correctly add a loss', () => {
    core.addLoss();

    expect(core.statistics.overall.matchesPlayed).toBe(2);
    expect(core.statistics.overall.losses).toBe(1);
    expect(core.statistics.recent.results[1]).toBe(0);
  });

  it('should correctly update streaks', () => {
    expect(core.statistics.overall.currWinStreak).toBe(0);
    expect(core.statistics.overall.currLossStreak).toBe(1);
    core.addLoss();
    core.addLoss();
    expect(core.statistics.overall.currLossStreak).toBe(3);
    core.addWin();
    core.addWin();
    expect(core.statistics.overall.currWinStreak).toBe(2);
    expect(core.statistics.overall.currLossStreak).toBe(0);
  });

  it('should correctly calculate overall win rate', () => {
    core.calcWinRate();
    expect(core.statistics.overall.winRate).toBe(50);
  });

  it('should correctly update recent statistics', () => {
    core.calcRecentResults();
    expect(core.statistics.recent.wins).toBe(3);
    expect(core.statistics.recent.losses).toBe(3);
    expect(core.statistics.recent.winRate).toBe(50);
  });

  it('should correctly update "lastUpdated" timestamp', () => {
    core.updateLastUpdate(111);
    expect(core.lastUpdate).toBe(111);
  });
});
