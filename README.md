# Travel-App

Travel App to help users check the weather forecast for the next trips in addition to displaying random images from the destination city.

---
## How To Use
* Install all project dependencies: `npm install`.
* Start the server with latest build: `npm start`.
* Build code for production: `npm run build`.
* To run existing test cases: `npm run test`.
* To run development server (host client files): `npm run dev`.
---
## Dependencies
This app is built with Native JavaScript in both client-side and server-side and depends on the following packages:
### - Shared dependencies:
- [Jest](https://jestjs.io/) - Package to help testing the app with unit testing methodology.
- [SASS](https://sass-lang.com/) - Package to empower styles by enable writing more reliable styles using SASS syntax.
- [WorkBox-Build](https://developers.google.com/web/tools/workbox) - Package to install service workers in the app and empower the app with PWA's features.

### - Server dependencies:
- [CORS](https://www.npmjs.com/package/cors) - NodeJS package to allow cross-origin requests.
- [DotEnv](https://www.npmjs.com/package/dotenv) - NodeJS package to enable the server to use `.env` file credentials.
- [Express](https://www.npmjs.com/package/express) - NodeJS package to run/serve the app and handle routes and requests.
- [Node-Fetch](https://www.npmjs.com/package/node-fetch) - NodeJS package to enable express server to fetch data from different APIs similar to embedded `fetch()` in browsers.

### - Webpack dependencies:
- [Webpack](https://webpack.js.org/) - NodeJS package to bundle app's assets, transpile files and provide environments for development and production.
- [Webpack-CLI](https://webpack.js.org/api/cli/) - NodeJS package to help using webpack commands using terminal.
- [Webpack-Dev-Server](https://www.npmjs.com/package/webpack-dev-server) - Webpack pack to help updating the app's running app without requiring re-build the whole app.
- [Clean-Webpack-Plugin](https://www.npmjs.com/package/clean-webpack-plugin) - Webpack plugin to clearly update the `dist` folder on build.
- [Babel-Loader](https://babeljs.io/) - Package to enable using latest JavaScript syntax and transpile the source code to older version of JavaScript based on configuration.
- [File-Loader](https://www.npmjs.com/package/file-loader) - NodeJS package to enable webpack to load assets to be bundled.
- [CSS-Loader](https://www.npmjs.com/package/css-loader) - NodeJS package to enable webpack to load CSS files to be bundled.
- [SASS-Loader](https://www.npmjs.com/package/sass-loader) - NodeJS package to help compiling SASS files to native CSS styles.
- [Style-Loader](https://www.npmjs.com/package/style-loader) - NodeJS package to enable shipping CSS styles to the app's main HTML in `<style>` tag.
- [HTML-Webpack-Plugin](https://www.npmjs.com/package/html-webpack-plugin) - Webpack plugin to load HTML files to be bundled.


---
## Folder Structure
```bash
├── README.md           # This file.
├── package.json        # npm package manager file.
├── webpack.dev.js      # Webpack config file for development environment.
├── webpack.prod.js     # webpack config file for production environment.
├── .gitignore          # To Ignore useless files/folder from git tracking.
├── .babelrc.json       # Babel registry config file.
├── __test__
│   ├── app.test.js     # Test file for client.
│   └── server.test.js  # Test file for server.
└── src
    ├── client/         # Client-side files.
    │   ├── images/     # App's image assets.
    │   ├── js/         # App's Logic files.
    │   │   └── app.js  # App's client file.
    │   ├── styles/     # App's styles.
    │   │   └── styles.scss # SASS file for App's styles.
    │   ├── views/      # App's HTML files.
    │   │   └── index.html  # App's index HTML file.
    │   └── index.js    # client's index file to be handled by Webpack.
    └── server/         # Server-side files.
        └── server.js   # App's server.
```
