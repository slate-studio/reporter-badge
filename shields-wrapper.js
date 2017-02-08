'use strict';
const shields = require('shields-lightweight');

function getStatusText(count, substring) {
  let status = '';

  if (count) {
    status = count + ' ' + substring;

    if (count > 1) {
      status += 's';
    }
  }

  return status;
}

module.exports = function (summary) {
  const subject = process.env.BADGE_SUBJECT || 'result';
  const okColor = process.env.BADGE_OK_COLOR || 'brightgreen';
  const warnColor = process.env.BADGE_WARN_COLOR || 'yellow';
  const errorColor = process.env.BADGE_ERROR_COLOR || 'red';
  const style = process.env.BADGE_STYLE || 'plastic';

  const errors = summary.errors;
  const warnings = summary.warnings;

  let color = okColor;
  let status = 'ok';
  const statusAr = [];

  if (warnings) {
    color = warnColor;
    statusAr.push(getStatusText(warnings, 'warning'));
  }

  if (errors) {
    color = errorColor;
    statusAr.push(getStatusText(errors, 'error'));
  }

  if (statusAr.length) {
    status = statusAr.join(', ');
  }

  process.stdout.write(shields.svg(subject, status, color, style));
};
