import { IStatistics } from '../interfaces/IStatistics';

export class UpdaterCore {
  statistics: IStatistics;

  lastUpdate: number;

  constructor(stats: IStatistics, lastUpdate: number) {
    this.statistics = stats;
    this.lastUpdate = lastUpdate;
  }

  addWin(): void {
    // Check for near miss
    if (this.statistics.overall.currLossStreak === 4) {
      this.addNearMiss();
    }

    // Update matches and win count
    this.statistics.overall.matchesPlayed++;
    this.statistics.overall.wins++;

    // Update loss and win streaks
    if (this.statistics.overall.currLossStreak) {
      this.statistics.overall.currLossStreak = 0;
    }
    this.statistics.overall.currWinStreak++;

    // Update longest win streak
    this.updateLongestWinStreak();

    // Update recent match results
    if (this.statistics.recent.results.length === 20) {
      this.statistics.recent.results.shift();
    }
    this.statistics.recent.results.push(1);

    // Update win rates
    this.calcWinRate();
    this.calcRecentResults();
  }

  addLoss(): void {
    // Update matches and loss count
    this.statistics.overall.matchesPlayed++;
    this.statistics.overall.losses++;

    // Update loss and win streaks
    if (this.statistics.overall.currWinStreak) {
      this.statistics.overall.currWinStreak = 0;
    }
    this.statistics.overall.currLossStreak++;

    // Update recent match results
    if (this.statistics.recent.results.length === 20) {
      this.statistics.recent.results.shift();
    }
    this.statistics.recent.results.push(0);

    // Check for deletion
    if (this.statistics.overall.currLossStreak === 5) {
      this.addDeletion();
    }

    // Update win rates
    this.calcWinRate();
    this.calcRecentResults();
  }

  private calcWinRate(): void {
    const { matchesPlayed, wins } = this.statistics.overall;

    const newWinRate = Math.floor((wins * 100) / matchesPlayed);

    this.statistics.overall.winRate = newWinRate;
  }

  private calcRecentResults(): void {
    const { results } = this.statistics.recent;

    // Calculate new values
    const newWins = results.reduce((acc, curr) => acc + curr);
    const newLosses = results.length - newWins;
    const newWinRate = Math.floor((newWins * 100) / results.length);

    // Assign new values
    this.statistics.recent.wins = newWins;
    this.statistics.recent.losses = newLosses;
    this.statistics.recent.winRate = newWinRate;
  }

  private updateLongestWinStreak(): void {
    const oldStreak = this.statistics.overall.longestWinStreak;
    const currStreak = this.statistics.overall.currWinStreak;

    if (currStreak > oldStreak) {
      this.statistics.overall.longestWinStreak = currStreak;
    }
  }

  private addNearMiss(): void {
    this.statistics.overall.nearMisses++;
  }

  private addDeletion(): void {
    this.statistics.overall.deletions++;
    this.statistics.overall.currLossStreak = 0;
  }

  updateLastUpdate(time: number): void {
    this.lastUpdate = time;
  }
}
