const { bot } = require('../lib/constants');
const motifs = require('../json/motifs.json');

module.exports = (message) => {
  const user = bot.users.get(message.author.id);
  const parsedMsg = message.content.replace('!motifsolution ', '');
  
  let motifName = "";
  let solution = "";

  motifs.forEach((motif) => {
    if(motif.id === parsedMsg) {
      motifName = motif.motif;
      solution = motif.solution;
    }
  });

  user.send(`${solution} _(${motifName})_`);
};
