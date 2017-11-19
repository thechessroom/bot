const CronJob = require('cron').CronJob;

const { bot } = require('../lib/constants');
const sendPuzzle = require('../embeds/puzzle');
const channels = require('../json/channels.json');

// Every 24 hours
const dailyPuzzleJob = new CronJob({
  cronTime: '0 0 * * *',
  onTick() {
    const puzzleChannel = bot.channels.get(channels.puzzle);

    puzzleChannel.send(sendPuzzle());
  },
  start: false,
  timeZone: 'America/New_York',
});

dailyPuzzleJob.start();

console.log('dailyPuzzle job status: ', dailyPuzzleJob.running);
