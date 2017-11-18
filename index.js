const { bot } = require('./src/lib/constants.js');

const commands = require('./src/commands');
const events = require('./src/events');
const embeds = require('./src/embeds');

const auth = require('./authenticate.json');


bot.login(auth.token);
