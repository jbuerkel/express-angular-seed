# Express-Angular-Seed
[![npm](https://img.shields.io/npm/v/express-angular-seed.svg)](https://www.npmjs.com/package/express-angular-seed)
[![dependencies](https://img.shields.io/david/jbuerkel/express-angular-seed.svg)](https://david-dm.org/jbuerkel/express-angular-seed#info=dependencies&view=table)
[![devDependencies](https://img.shields.io/david/dev/jbuerkel/express-angular-seed.svg)](https://david-dm.org/jbuerkel/express-angular-seed#info=devDependencies&view=table)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project provides a simple web app which is based on [express](https://www.npmjs.com/package/express) and [angular](https://www.npmjs.com/package/angular). Both the frontend and the backend have been kept as slim as possible to retain a high level of flexibility. The goal of this project is not to provide a fully featured application but an easy-to-use structure to improve productivity without the effort of adapting an already existing codebase.

## Getting Started

Starting a new project with this seed is easy just clone the repository and run `npm install`. Or you can get it via [npm](https://www.npmjs.com/) directly:

```sh
npm install express-angular-seed
```

However this will install the package into your `node_modules` folder and not into your project directory!

After installing the package build the application with `gulp`. This command will process your source files, launch your web server and open the sample app in your default web browser. Additionally it will watch for file changes and act accordingly (for a more detailed description please see the [gulp](https://github.com/jbuerkel/express-angular-seed#gulp) section below).

If you would like to update all your dependencies you can simply run `npm run-script renew`. This will require [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to be installed globally:

```sh
npm install -g npm-check-updates
```

Note that this command might break your application depending on the corresponding changes. Happy coding!

## Structure

The backend of this seed is based on the [express-generator](https://www.npmjs.com/package/express-generator). Its core router simply passes any routes which are not part of the API to the client. As security is also important the middleware [helmet](https://www.npmjs.com/package/helmet) is included exemplarily. Of course this *does not make this application secure* but it can be seen as a starting point.

Take a look at the articles [here](http://scottksmith.com/blog/2014/09/21/protect-your-node-apps-noggin-with-helmet/) and [here](http://scottksmith.com/blog/2014/09/04/simple-steps-to-secure-your-express-node-application/) to get a better idea of how [helmet](https://www.npmjs.com/package/helmet) works and how you can easily improve the security of your [express](https://www.npmjs.com/package/express) applications. A HTTPS setup for this project might be included in the future.

The frontend of this seed is primarily based on this [style guide](https://github.com/johnpapa/angular-styleguide) which you should absolutely read if you are planning to write a lot of [angular](https://www.npmjs.com/package/angular) code. For client-side routing this project uses [angular-ui-router](https://www.npmjs.com/package/angular-ui-router). The recently added [angular-material](https://www.npmjs.com/package/angular-material) will make this app beautiful. However these are only recommendations feel free to include any alternatives you might prefer.

If you would like to write tests for your client you can simply use the built-in [mocha](https://www.npmjs.com/package/mocha)/[sinon-chai](https://www.npmjs.com/package/sinon-chai) setup. Take a look at the sample test provided and make sure to name your test files correctly (`*.spec.js`). You can run your tests with `npm test` or `gulp test`.

## Gulp

The included [gulpfile](https://github.com/jbuerkel/express-angular-seed/blob/master/gulpfile.js) fulfils several tasks to ease your life as a developer. It processes your static source files (minification, CSS prefixing, linting, creating source maps, injecting Angular dependencies, ...) whenever they change and additionally contains [gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon) as well as [browser-sync](https://www.npmjs.com/package/browser-sync).

This basically allows you to simply write code while your web app updates itself, restarts itself and reloads itself in the web browser (in sync across multiple devices in your network if you want to). Take a look at Browsersync's [documentation](https://browsersync.io/docs/options/) to decide which options are best for your needs. This project's default configuration is as follows:

```js
gulp.task('browser-sync', ['nodemon'], function() {
    var port = process.env.PORT || '3000';
    return browserSync.init({
        ui: false,
        files: paths.build,
        proxy: 'localhost:' + port,
        port: '4000',
        online: false,
        notify: false,
        reloadDelay: 500,
        minify: false
    });
});
```

So Browsersync's UI as well as its online functionalities are disabled. Enable them if you need them but keep in mind that this will slow down your build process.

## License

This project is licensed under the terms of the [MIT license](https://github.com/jbuerkel/express-angular-seed/blob/master/LICENSE).
