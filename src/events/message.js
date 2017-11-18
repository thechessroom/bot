const { bot } = require('../lib/constants');
const parser = require('../lib/message-parser');
const commands = require('../commands');

bot.on('message', message => {
  // Don't allow bot to reply to itself
  if(message.author.bot) return;

  parser.parse(message.content, (err, cmdInfo) => {
    // User has provided a command, so proceed
    if(!err && cmdInfo.command) {
      const cmd = cmdInfo.command;

      if(commands[cmd]) {
        commands[cmd](message);
      }
    }
  });
});
