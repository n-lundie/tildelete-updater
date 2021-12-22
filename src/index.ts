import { UpdaterCore } from './classes/UpdaterCore';
import { FStore } from './classes/FStore';
import riotApiService from './services/riotApiService';

async function main() {
  const store = new FStore();

  const core = new UpdaterCore(
    await store.getStats(),
    await store.getTimestamp()
  );

  const matchIdList = await riotApiService.getMatchIds('MELK', core.lastUpdate);

  if (matchIdList.length) {
    const matchId = matchIdList[matchIdList.length - 1];
    const match = await riotApiService.getMatch(matchId);
  }
}

main();
