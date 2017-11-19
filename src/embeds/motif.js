const { Discord } = require('../lib/constants');
const private = require('../../private.json');
const motifs = require('../json/motifs.json');

const sendMotif = (opts) => {
  const options = opts || {};

  const motif = motifs[Math.floor(Math.random() * motifs.length)];
  const motifEmbed = new Discord.RichEmbed()
    .setAuthor('Daily Motif')
    .setTitle(`${motif.whitePlayer} vs ${motif.blackPlayer}, ${motif.location}, ${motif.year}`)
    .setColor('#6650FC')
    .setDescription(motif.description)
    .addField('Source', `[${motif.sourceTitle}](${motif.sourceUrl}?tag=${private.amazon.trackingId})`)
    .setFooter(`To get the solution to this motif, use !motifsolution ${motif.id}`)
    .setImage(` http://www.fen-to-image.com/image/64/single/${motif.urlSlug}`);

    return motifEmbed;
};

module.exports = sendMotif;
