# reporter-badge

*A simple lint reporter that produces a badge inspired by shields.io*

Supported linters:
- ESLint
- CoffeeLint

## Install

    npm install https://github.com/slate-studio/reporter-badge

## usage

    eslint file.js -f node_modules/reporter-badge/eslint-reporter.js > eslint-badge.svg
    coffeelint file.js --reporter node_modules/reporter-badge/coffeelint-reporter.js > coffeelint-badge.svg

You can configure it using environment variables, for example:

    export JSHINT_BADGE_SUBJECT=result
    export JSHINT_BADGE_OK_COLOR=green
    export JSHINT_BADGE_WARN_COLOR=orange
    export JSHINT_BADGE_ERROR_COLOR=red
    export JSHINT_BADGE_STYLE=plastic
