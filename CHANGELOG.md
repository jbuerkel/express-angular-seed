<!--

<a name="0.0.0"></a>
# 0.0.0 version-name (0000-00-00)

## Bug Fixes

## Features

## Breaking Changes

-->

<a name="0.2.0"></a>
# 0.2.0 angular-material (2016-02-05)

## Bug Fixes

- Fixed globs in `paths.conf.json` which did not include files within subfolders

## Features

- Added [npm](https://www.npmjs.com/) script to update application dependencies
- Added full [angular-material](https://www.npmjs.com/package/angular-material) setup replacing [angular-ui-bootstrap](https://www.npmjs.com/package/angular-ui-bootstrap)

## Breaking Changes

- Changed [angular-ui-router](https://www.npmjs.com/package/angular-ui-router) version from `0.2.15` to `0.2.17`
- Changed [browser-sync](https://www.npmjs.com/package/browser-sync) version from `2.11.0` to `2.11.1`
- Changed [express](https://www.npmjs.com/package/express) version from `4.13.1` to `4.13.4`
- Changed [jshint](https://www.npmjs.com/package/jshint) version from `2.8.0` to `2.9.1`
- Changed [karma-phantomjs-launcher](https://www.npmjs.com/package/karma-phantomjs-launcher) version from `0.2.3` to `1.0.0`
- Changed [mocha](https://www.npmjs.com/package/mocha) version from `2.3.4` to `2.4.5`
- Changed from [phantomjs](https://www.npmjs.com/package/phantomjs) version `2.1.2` to [phantomjs-prebuilt](https://www.npmjs.com/package/phantomjs-prebuilt) version `2.1.3`
- Changed minify-js task to store source maps separately
- Changed miscellaneous parts of backend and frontend source code

<a name="0.1.2"></a>
# 0.1.2 test-runner (2016-01-27)

## Bug Fixes

- Removed deprecated `gulp.run()` in default task
- Fixed `substring()` workaround in nodemon task

## Features

- Added [karma](https://www.npmjs.com/package/karma) as test runner together with [phantomjs](https://www.npmjs.com/package/phantomjs) as web kit
- Added [mocha](https://www.npmjs.com/package/mocha) as testing framework
- Added [sinon-chai](https://www.npmjs.com/package/sinon-chai) as assertion library
- Added code sample and gulp task for testing

## Breaking Changes

- Changed [angular](https://www.npmjs.com/package/angular) version from `1.4.8` to `1.4.9`
- Changed [angular-ui-bootstrap](https://www.npmjs.com/package/angular-ui-bootstrap) version from `1.0.3` to `1.1.0`
