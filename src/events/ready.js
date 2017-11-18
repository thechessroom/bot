const { bot } = require('../lib/constants.js');
const sendPuzzle = require('../embeds/puzzle.js');
const channels = require('../json/channels.json');

bot.on('ready', () => {
  console.log('All systems operational. Bot ready for combat.');
});
