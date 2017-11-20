const { bot } = require('../lib/constants');
const channels = require('../json/channels.json');

bot.on('guildMemberAdd', member => {
  const user = bot.users.get(member.id);

  user.send(`\n**Hey, ${member.displayName}! Welcome to the Chess Room.**\n\n
  We want to make sure our members are invested, therefore you'll need to:\n
  **1)** Read the contents of the <#${channels.about}> channel _and_ find the secret.\n
  **2)** respond to this message with \`!theSecretYourFound\` (note the exclamation point)\n\n
  _Upon providing the secret, you'll be given access to read and write to all channels._`);
});
