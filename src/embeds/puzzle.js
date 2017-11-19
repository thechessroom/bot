const { Discord } = require('../lib/constants');
const puzzles = require('../json/puzzles.json');

const sendPuzzle = (opts) => {
  const options = opts || {};

  // Right now this is random for the purposes of the daily tactic but I foresee
  // options being passed, such as tactic by player, etc.
  const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];

  const puzzleEmbed = new Discord.RichEmbed()
    .setAuthor('Daily Puzzle')
    .setTitle(`${puzzle.whitePlayer} vs ${puzzle.blackPlayer}, ${puzzle.location}, ${puzzle.year}`)
    .setColor('#6650FC')
    .setDescription(puzzle.description)
    .setFooter(`To get the solution to this puzzle, use !puzzlesolution ${puzzle.id}`)
    .setImage(` http://www.fen-to-image.com/image/64/single/${puzzle.urlSlug}`);

  return puzzleEmbed;
};

module.exports = sendPuzzle;
