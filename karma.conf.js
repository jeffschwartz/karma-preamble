module.exports = function(config) {
  config.set({
    frameworks: ['preamble'],

    files: [
      'lib/preamble.js',
      'src/*.js'
    ],

    autoWatch: true
  });
};
