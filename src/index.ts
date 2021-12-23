import { FStore } from './classes/FStore';
import { UpdaterCore } from './classes/UpdaterCore';
import analyzeMatch from './functions/analyzeMatch';
import formatTime from './functions/formatTime';
import riotApiService from './services/riotApiService';

async function main() {
  const store = new FStore();

  // await store.resetData();

  const core = new UpdaterCore(
    await store.getStats(),
    await store.getTimestamp()
  );

  function runService() {
    console.log('start');
    const timer = setInterval(async () => {
      const matchList = await riotApiService.getMatchIds(
        'MELK',
        core.lastUpdate
      );

      if (matchList.length) {
        clearInterval(timer);
        const matchId = matchList[matchList.length - 1];

        const match = await riotApiService.getMatch(matchId);

        const endTime = match.info.gameEndTimestamp;

        const matchAnalysis = analyzeMatch(match);

        if (matchAnalysis.valid) {
          if (matchAnalysis.win) {
            core.addWin();
          } else {
            core.addLoss();
          }

          core.calcWinRate();
          core.calcRecentResults();

          store.saveMatch(match);
          store.syncStats(core.statistics.overall, core.statistics.recent);
        }

        core.updateLastUpdate(formatTime(endTime) + 1);
        store.syncTimestamp(core.lastUpdate);

        // console.clear();
        console.log(matchAnalysis);
        console.log(matchId);
        console.log(core);
        console.log('timeout');
      }
    }, 1500);

    return timer;
  }

  runService();
}

main();
