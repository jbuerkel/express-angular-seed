# Express-Angular-Seed
[![npm](https://img.shields.io/npm/v/express-angular-seed.svg)](https://www.npmjs.com/package/express-angular-seed)
[![dependencies](https://img.shields.io/david/jbuerkel/express-angular-seed.svg)](https://david-dm.org/jbuerkel/express-angular-seed#info=dependencies&view=table)
[![devDependencies](https://img.shields.io/david/dev/jbuerkel/express-angular-seed.svg)](https://david-dm.org/jbuerkel/express-angular-seed#info=devDependencies&view=table)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project provides a simple web app which is based on [Express](http://expressjs.com/) and [AngularJS](https://angularjs.org/). Both the frontend and the backend have been kept as slim as possible to retain a high level of flexibility. The goal of this project is not to provide a fully featured application but an easy-to-use structure to improve productivity without the effort of adapting an already existing codebase.

## Getting Started

Starting a new project with this seed is easy just clone the repository and run `npm install`. Or you can get it directly via [npm](https://www.npmjs.com/):

```sh
npm install express-angular-seed
```

However this will install the package into your `node_modules/` folder and not into your project directory!

After installing the package build the application with `gulp`. This command will process your source files, launch your web server and open the sample app in your default web browser. Additionally it will watch for file changes and act accordingly (for a more detailed description please see the [Gulp](https://github.com/jbuerkel/express-angular-seed#gulp) section below).

Happy coding!

## Structure

The backend of this seed is based on the [express-generator](https://www.npmjs.com/package/express-generator). Its core router simply passes any routes which are not part of the API to the client. As security is also important the middleware [Helmet](https://www.npmjs.com/package/helmet) is included exemplarily. Of course this *does not make this application secure* but it can be seen as a starting point.

Take a look at the articles [here](http://scottksmith.com/blog/2014/09/21/protect-your-node-apps-noggin-with-helmet/) and [here](http://scottksmith.com/blog/2014/09/04/simple-steps-to-secure-your-express-node-application/) to get a better idea of how [Helmet](https://www.npmjs.com/package/helmet) works and how you can easily improve the security of your [Express](http://expressjs.com/) applications. A HTTPS setup for this project might be included in the future.

The frontend of this seed is primarily based on this [style guide](https://github.com/johnpapa/angular-styleguide) which you should absolutely read if you are planning to write a lot of [AngularJS](https://angularjs.org/) code. For client-side routing this project uses [UI-Router](https://www.npmjs.com/package/angular-ui-router). [Bootstrap](https://getbootstrap.com/) together with [UI Bootstrap](https://angular-ui.github.io/bootstrap/) will make this app (more or less) beautiful without the necessity to include [jQuery](https://jquery.com/). However these are only recommendations feel free to include any alternatives you prefer.

If you would like to write tests for your client you can simply use the built-in [Mocha](https://mochajs.org/)/[Sinon-Chai](http://chaijs.com/plugins/sinon-chai) setup. Take a look at the sample test provided and make sure to name your test files correctly (`*.spec.js`). You can run your tests with `npm test` or `gulp test`.

## Gulp

This topic is essentially one of the biggest advantages this sample application has to offer. The included [gulpfile](https://github.com/jbuerkel/express-angular-seed/blob/master/gulpfile.js) fulfils several tasks to ease your life as a developer. It processes your static source files (minification, CSS prefixing, linting, creating source maps, injecting Angular dependencies, ...) whenever they change and additionally contains [gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon) as well as [Browsersync](https://browsersync.io/) working together in harmony.

This allows you to simply write code while your web app updates itself, restarts itself and reloads itself in the web browser (in sync across multiple devices in your network if you want to). Take a look at Browsersync's [documentation](https://browsersync.io/docs/options/) to decide which options are best for your needs. My default configuration is as follows:

```js
gulp.task('browser-sync', ['nodemon'], function() {
    var port = process.env.PORT || 3000;
    return browserSync.init({
        ui: false,
        files: paths.build,
        proxy: 'localhost:' + port,
        port: port + 1,
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
