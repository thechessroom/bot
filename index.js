const { bot } = require('./src/lib/constants.js');
const auth = require('./authenticate.json');
const events = require('./src/events');


bot.login(auth.token);
