import { Firestore } from '@google-cloud/firestore';

const db = new Firestore({
  projectId: 'tildelete-744e4',
  keyFilename:
    '/mnt/c/Users/Administrator/Downloads/tildelete-744e4-243bbba415c9.json',
});

const getStats = async () => {
  const stats = await db.collection('statistics').doc('overall').get();
  console.log(stats.data());
};

getStats();
