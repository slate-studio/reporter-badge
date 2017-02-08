(function () {

  const shieldWrapper = require('./shields-wrapper');

  module.exports = function (results = []) {

    // accumulate the errors and warnings
    const summary = results.reduce(function (seq, current) {
      seq.errors += current.errorCount;
      seq.warnings += current.warningCount;
      return seq;
    }, {errors: 0, warnings: 0});

    return shieldWrapper(summary);
  };

}).call(this);
