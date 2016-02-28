<!--

<a name="0.0.0"></a>
# 0.0.0 version-name (0000-00-00)

## Bug Fixes

## Features

## Dependency Changes

## Breaking Changes

-->

<a name="0.2.1"></a>
# 0.2.1 load-plugins (2016-02-29)

## Features

- Added [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) to decrease overhead in gulpfile

## Dependency Changes

- Changed all [angular](https://www.npmjs.com/package/angular) versions from `1.4.9` to `1.5.0`
- Changed [angular-material](https://www.npmjs.com/package/angular-material) version from `1.0.4` to `1.0.5`
- Changed [angular-ui-router](https://www.npmjs.com/package/angular-ui-router) version from `0.2.17` to `0.2.18`
- Changed [gulp](https://www.npmjs.com/package/gulp) version from `3.9.0` to `3.9.1`
- Changed [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano) version from `2.1.0` to `2.1.1`
- Changed [gulp-ng-annotate](https://www.npmjs.com/package/gulp-ng-annotate) version from `1.1.0` to `2.0.0`
- Changed [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) version from `1.5.1` to `1.5.3`
- Changed [karma](https://www.npmjs.com/package/karma) version from `0.13.19` to `0.13.21`
- Changed [karma-mocha](https://www.npmjs.com/package/karma-mocha) version from `0.2.1` to `0.2.2`
- Changed [karma-sinon-chai](https://www.npmjs.com/package/karma-sinon-chai) version from `1.1.0` to `1.2.0`
- Changed [morgan](https://www.npmjs.com/package/morgan) version from `1.6.1` to `1.7.0`
- Changed [phantomjs-prebuilt](https://www.npmjs.com/package/phantomjs-prebuilt) version from `2.1.3` to `2.1.4`
- Added new peer dependencies [chai](https://www.npmjs.com/package/chai), [lolex](https://www.npmjs.com/package/lolex), [sinon](https://www.npmjs.com/package/sinon) and [sinon-chai](https://www.npmjs.com/package/sinon-chai)

<a name="0.2.0"></a>
# 0.2.0 angular-material (2016-02-05)

## Bug Fixes

- Fixed globs in `paths.conf.json` which did not include files within subfolders

## Features

- Added [npm](https://www.npmjs.com/) script to update application dependencies
- Added full [angular-material](https://www.npmjs.com/package/angular-material) setup replacing [angular-ui-bootstrap](https://www.npmjs.com/package/angular-ui-bootstrap)

## Dependency Changes

- Changed [angular-ui-router](https://www.npmjs.com/package/angular-ui-router) version from `0.2.15` to `0.2.17`
- Changed [browser-sync](https://www.npmjs.com/package/browser-sync) version from `2.11.0` to `2.11.1`
- Changed [express](https://www.npmjs.com/package/express) version from `4.13.1` to `4.13.4`
- Changed [jshint](https://www.npmjs.com/package/jshint) version from `2.8.0` to `2.9.1`
- Changed [karma-phantomjs-launcher](https://www.npmjs.com/package/karma-phantomjs-launcher) version from `0.2.3` to `1.0.0`
- Changed [mocha](https://www.npmjs.com/package/mocha) version from `2.3.4` to `2.4.5`
- Changed from [phantomjs](https://www.npmjs.com/package/phantomjs) version `2.1.2` to [phantomjs-prebuilt](https://www.npmjs.com/package/phantomjs-prebuilt) version `2.1.3`

## Breaking Changes

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

## Dependency Changes

- Changed all [angular](https://www.npmjs.com/package/angular) versions from `1.4.8` to `1.4.9`
- Changed [angular-ui-bootstrap](https://www.npmjs.com/package/angular-ui-bootstrap) version from `1.0.3` to `1.1.0`
