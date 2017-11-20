const { bot } = require('../lib/constants');
const private = require('../../private.json');
const roles = require('../json/roles.json');

module.exports = (message) => {
  const guild = bot.guilds.get(private.server.id);
  
  // We need to get a reference to the actual member class
  // in order to have access to the `addRole` method.``
  const member = guild.members.get(message.author.id);

  member.addRole(roles.verified);
  member.send('Nicely done! You are now a _verified_ member of _The Chess Room_.');
};
