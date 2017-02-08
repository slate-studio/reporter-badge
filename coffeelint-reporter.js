(function () {

  const shieldWrapper = require('./shields-wrapper');
  let BadgeReporter;

  module.exports = BadgeReporter = (function () {
    function BadgeReporter(errorReport) {
      this.errorReport = errorReport;
    }

    BadgeReporter.prototype.publish = function () {
      const summary = this.errorReport.getSummary();
      summary.errors = summary.errorCount;
      summary.warnings = summary.warningCount;
      summary.paths = summary.pathCount;

      shieldWrapper(summary);
      return this;
    };

    return BadgeReporter;

  })();

}).call(this);

