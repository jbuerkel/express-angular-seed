# Express-Angular-Seed
[![dependencies](https://img.shields.io/david/jbuerkel/express-angular-seed.svg)](https://david-dm.org/jbuerkel/express-angular-seed#info=dependencies&view=table)
[![devDependencies](https://img.shields.io/david/dev/jbuerkel/express-angular-seed.svg)](https://david-dm.org/jbuerkel/express-angular-seed#info=devDependencies&view=table)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project provides a simple web app which is based on [Express](https://www.npmjs.com/package/express) and [AngularJS](https://www.npmjs.com/package/angular). Both the server and the client side have been kept as slim as possible to retain a high level of flexibility. The goal of this project is not to provide a fully featured application but an easy-to-use structure to improve productivity without having a lot of configuration overhead.

## Getting Started

Starting a new project with this seed is easy just clone and install this repository:

```sh
git clone https://github.com/jbuerkel/express-angular-seed.git
cd express-angular-seed && npm install
```

After the installation launch the application with `npm start`. If you would like to use the recently added HTTPS setup run `npm run https`. This will require a valid SSL certificate!

The following npm scripts are provided to make things easier:
- `npm run cert`: Generates a self-signed SSL certificate which can be used for the HTTPS setup.
- `npm run dev`: Launches the application in development mode. This includes file watchers as well as automated building and restarting/reloading.
- `npm run dist`: Runs the application's build process.
- `npm run lint`: Lints the application's source code.
- `npm test`: Runs the application's tests.

The client side of this seed is primarily based on this [style guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1).

Happy coding!

## License

This project is licensed under the terms of the [MIT license](https://github.com/jbuerkel/express-angular-seed/blob/master/LICENSE).
