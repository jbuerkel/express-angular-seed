<!--

<a name="0.0.0"></a>
# 0.0.0 version-name (0000-00-00)

## Bug Fixes

## Features

-->

<a name="0.3.0"></a>
# 0.3.0 run-secure (2016-06-16)

## Bug Fixes

- Fixed gulp crashes on test failure

## Features

- Added HTTPS setup script
- Rewrote and improved application code
- Updated dependencies

<a name="0.2.1"></a>
# 0.2.1 load-plugins (2016-02-29)

## Features

- Added [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) to decrease overhead in gulpfile
- Updated dependencies

<a name="0.2.0"></a>
# 0.2.0 angular-material (2016-02-05)

## Bug Fixes

- Fixed globs in `paths.conf.json` which did not include files within subfolders

## Features

- Added [npm](https://www.npmjs.com/) script to update application dependencies
- Added full [angular-material](https://www.npmjs.com/package/angular-material) setup replacing [angular-ui-bootstrap](https://www.npmjs.com/package/angular-ui-bootstrap)
- Changed minify-js task to store source maps separately
- Changed parts of backend and frontend source code
- Updated dependencies

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
- Updated dependencies
