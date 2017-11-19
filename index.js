const { bot } = require('./src/lib/constants.js');

const commands = require('./src/commands');
const events = require('./src/events');
const embeds = require('./src/embeds');
const crons = require('./src/crons');

const private = require('./private.json');


bot.login(private.bot.token);
