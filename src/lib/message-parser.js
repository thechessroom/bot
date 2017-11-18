var tokenize = require('tokenize');

var tokenRules = [{
  type: "command",
  regex: /![A-Za-z0-9\_\-]+/
}, {
  type: "whitespace",
  regex: /\s/
}, {
  type: "word",
  regex: /[A-Za-z0-9]+/
}, {
  type: "character",
  regex: /./
}];


function getCommand(parseResults, messageText) {
  if (parseResults.length < 1) {
    return false;
  }
  //not a command
  if (parseResults[0].type !== 'command') {
    return false;
  }

  var cmdInfo = {
    command: false,
    target: false
  };

  cmdInfo.command = parseResults[0].value.replace('!', '').toLowerCase();

  if (parseResults.length >= 2 && parseResults[1].type === 'whitespace') {
    cmdInfo.target = messageText.substring(parseResults[2].index, messageText.length).trim();
  }

  return cmdInfo;
}

function parse(messageText, cb) {
  tokenize(messageText, tokenRules, function(err, results) {
    if (err || !results.length) {
      return cb(err, false);
    }

    return cb(null, getCommand(results, messageText));
  });
}

module.exports = {
  parse: parse
};
