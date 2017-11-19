const CronJob = require('cron').CronJob;

const { bot } = require('../lib/constants');
const sendMotif = require('../embeds/motif');
const channels = require('../json/channels.json');

// Every 24 hours
const dailyMotifJob = new CronJob({
  cronTime: '0 0 * * *',
  onTick() {
    const motifChannel = bot.channels.get(channels.motif);

    motifChannel.send(sendMotif());
  },
  start: false,
  timeZone: 'America/New_York',
});

dailyMotifJob.start();

console.log('dailyMotif job status: ', dailyMotifJob.running);
