var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initPreamble = function(files) {
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(__dirname + '/preamble.js'));
};

initPreamble.$inject = ['config.files'];

module.exports = {
  'framework:preamble': ['factory', initPreamble]
};
