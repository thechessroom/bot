const { bot } = require('../lib/constants');
const puzzles = require('../json/puzzles.json');

module.exports = (message) => {
  const user = bot.users.get(message.author.id);
  const parsedMsg = message.content.replace('!puzzlesolution ', '');
  let solution = "";

  puzzles.forEach((puzzle) => {
    if(puzzle.id === parsedMsg) {
      solution = puzzle.solution;
    }
  });

  user.send(solution);
};
