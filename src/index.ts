// import { Firestore } from '@google-cloud/firestore';
import { riotApiService } from './services/riotApiService';

riotApiService.getMatchIds(0).then((res) => console.log(res));
// const db = new Firestore({
//   projectId: 'tildelete-744e4',
//   keyFilename:
//     '/mnt/c/Users/Administrator/Downloads/tildelete-744e4-243bbba415c9.json',
// });
