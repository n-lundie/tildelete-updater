# tildelete-updater

<h3 align="center" size="2">Automate collection, processing and storage of Til Delete data.<h3>

## Features

- Automatically retrieve new matches.
- Verify and filter matches.
- Extract match data.
- Calculate team statistics.

## Getting Started

1. Clone the repo

   `git clone https://github.com/n-lundie/tildelete-updater.git`

2. Navigate into the directory and install dependancies

   `cd tildelete-updater && npm install`

3. Create file for test enviroment variables

   tildelete-updater/

   `mkdir .jest && touch .jest/setEnvVars.js`

   tildelete-updater/.jest/setEnvVars.js

   ```
   // API keys for Riot API
   process.env.RIOT_DEV_TOKEN = '<api_key>'
   process.env.RIOT_APP_TOKEN = '<api_key>'

   // Player PUUID's for Riot API
   process.env.MELK_PUUID = '<puuid>'
   process.env.PIGS_PUUID = '<puuid>'
   process.env.V4VN_PUUID = '<puuid>'
   process.env.EDBO_PUUID = '<puuid>'

   // Details for Firestore connection
   process.env.FB_PROJECT_ID = '<firebase_project_id>'
   process.env.FB_KEYFILE_LOC = 'path/to/key/file'
   ```

4. Create file for app enviroment variables

   tildelete updater/

   `touch .env`

   tildelete-updater/.env

   ```
   # API keys for Riot API
   RIOT_DEV_TOKEN="<api_key>"
   RIOT_APP_TOKEN="<api_key>"

   # Player PUUID's for Riot API
   MELK_PUUID="<puuid>"
   PIGS_PUUID="<puuid>"
   V4VN_PUUID="<puuid>"
   EDBO_PUUID="<puuid>"

   # Details for Firestore connection
   FB_PROJECT_ID="<firebase_project_id>"
   FB_KEYFILE_LOC="path/to/key/file"
   ```

5. Run tests

   `npm run test`

6. Run build

   `npm run build`

7. Run app
