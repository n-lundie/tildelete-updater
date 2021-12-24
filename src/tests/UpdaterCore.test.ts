import { UpdaterCore } from '../classes/UpdaterCore';
import * as inputStats from './mocks/inputStats.json';

describe('UpdaterCore', () => {
  const core = new UpdaterCore(inputStats, 0);

  describe('overall', () => {
    test('correctly add a win', () => {
      core.addWin(); // 1:1
      expect(core.statistics.overall.wins).toBe(1);
    });

    test('correctly add a loss', () => {
      core.addLoss(); // 1:2
      expect(core.statistics.overall.losses).toBe(1);
    });

    test('correctly update matchesPlayed', () => {
      expect(core.statistics.overall.matchesPlayed).toBe(2);
    });

    test('correctly update currWinStreak', () => {
      expect(core.statistics.overall.currWinStreak).toBe(0);

      for (let i = 0; i < 3; i++) core.addWin(); // 4:5

      expect(core.statistics.overall.currWinStreak).toBe(3);
      expect(core.statistics.overall.currLossStreak).toBe(0);
    });

    test('correctly update currLossStreak', () => {
      expect(core.statistics.overall.currLossStreak).toBe(0);

      for (let i = 0; i < 3; i++) core.addLoss(); // 4:8

      expect(core.statistics.overall.currLossStreak).toBe(3);
      expect(core.statistics.overall.currWinStreak).toBe(0);
    });

    test('correctly update longestWinStreak', () => {
      expect(core.statistics.overall.longestWinStreak).toBe(3);

      for (let i = 0; i < 5; i++) core.addWin(); // 9:13

      expect(core.statistics.overall.longestWinStreak).toBe(5);
    });

    test('correctly calculate winRate', () => {
      expect(core.statistics.overall.winRate).toBe(69);
    });
  });

  describe('recent', () => {
    test('correctly add results', () => {
      expect(core.statistics.recent.results.length).toBe(13);

      const wins = core.statistics.recent.results.reduce(
        (acc, curr) => acc + curr
      );

      expect(wins).toBe(9);
    });

    test('limit number of results to 20', () => {
      for (let i = 0; i < 9; i++) core.addLoss();

      expect(core.statistics.recent.results.length).toBe(20);
    });

    test('correctly remove results when at limit', () => {
      const resultsCopy = [...core.statistics.recent.results];
      resultsCopy.shift();
      resultsCopy.push(1);

      core.addWin();
      expect(core.statistics.recent.results).toEqual(resultsCopy);
    });

    test('correctly calculate wins, losses & winRate', () => {
      expect(core.statistics.recent.wins).toBe(8);
      expect(core.statistics.recent.losses).toBe(12);
      expect(core.statistics.recent.winRate).toBe(40);
    });
  });

  describe('lastUpdate', () => {
    test('correctly update lastUpdate value', () => {
      expect(core.lastUpdate).toBe(0);

      core.updateLastUpdate(1639361904);

      expect(core.lastUpdate).toBe(1639361904);
    });
  });
});
