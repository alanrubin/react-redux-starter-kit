# React Starter Kit

This starter kit is designed to get you up and running with a bunch of awesome new front-end technologies, all on top of a configurable, feature-rich webpack build system that's already setup to provide hot reloading, CSS preprocessing with Sass, unit testing, code coverage reports, bundle splitting, and more.

The primary goal of this project is to remain as **unopinionated** as possible. Its purpose is not to dictate your project structure or to demonstrate a complete sample application, but to provide a set of tools intended to make front-end development robust, easy, and, most importantly, fun. Check out the full feature list below!

Finally, This project wouldn't be possible without the help of our many contributors, so [thank you](#thank-you) for all of your help.

## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Development](#development)
  1. [Developer Tools](#developer-tools)
  1. [Routing](#routing)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Build System](#build-system)
  1. [Configuration](#configuration)
  1. [Globals](#globals)
  1. [Styles](#styles)
  1. [Server](#server)
  1. [Production Optimization](#production-optimization)
1. [Learning Resources](#learning-resources)
1. [FAQ](#troubleshooting)
1. [Thank You](#thank-you)

## Features
* [react](https://github.com/facebook/react)
* [mobx](https://github.com/mobxjs/mobx)
* [react-router](https://github.com/rackt/react-router)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [express](https://github.com/expressjs/express)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org) (with airbnb guide)
* [nvm](https://github.com/creationix/nvm) + [avn](https://github.com/wbyoung/avn)
* [yarn](https://code.facebook.com/posts/1840075619545360)
* [SASS](http://sass-lang.com/) + [styled-components](https://github.com/styled-components/styled-components)
* [Storybook](https://getstorybook.io/)

## Requirements
* node `^6.3.0` : We recommend using [avn](https://github.com/wbyoung/avn) with [nvm](https://github.com/creationix/nvm) for automatic node version switching. The project comes with AVN `.node-version` file to auto select node version on entering the directory.
* yarn `^0.16.1`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can create a new project based on `react-starter-kit` in one of two ways:

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/alanrubin/react-starter-kit.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works

```bash
$ yarn                          # Install project dependencies
$ yarn start                # Compile and launch
```
If everything works, you should see the following:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `yarn run start`, but enables nodemon for the server as well.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; generate coverage reports as well.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
|`storybook`|Runs storybook server.|

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── components           # Global Reusable Presentational Components
│   ├── containers           # Global Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   │   └── CoreLayout.js    # CoreLayout which receives children for each route
│   │   └── CoreLayout.scss  # Styles related to the CoreLayout
│   │   └── index.js         # Main file for layout
│   ├── routes               # Main route definitions and async split points
│   │   ├── index.js         # Bootstrap main application routes with store
│   │   ├── Home             # Fractal route
│   │   │   ├── index.js     # Route definitions and async split points
│   │   │   ├── assets       # Assets required to render components
│   │   │   ├── components   # Presentational React Components
│   │   │   └── routes **    # Fractal sub-routes (** optional)
│   │   └── Counter          # Fractal route
│   │       ├── index.js     # Counter route definition
│   │       ├── container    # Connect components to actions and store
│   │       ├── stores       # Collections of local stores
│   │       └── routes **    # Fractal sub-routes (** optional)
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── store                # Store-specific pieces
│   │   ├── createStore.js   # Create and instrument mobx stores
│   │   └── stores.js        # Stores registry and injection
│   │   └── UiStore.js       # A Ui store which is store that is globaly available
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests
```

## Development

#### Developer Tools

We install by default [Mobx DevTools](https://github.com/mobxjs/mobx-react-devtools), you should be able to see when running in the development mode.

However, adding the DevTools components to your project is simple. First, grab the packages from yarn:

### Routing
We use `react-router` [route definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [application structure](#application-structure) section for more information.

## Testing
To add a unit test, simply create a `.spec.jsx` or `.spec.js` file anywhere in the file structure, we recommend having it side by side in same directory of the file being tested. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them. Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/index.js`.

## Deployment
Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `yarn run deploy` (make sure to specify your target `NODE_ENV` as well). This project does not concern itself with the details of server-side rendering or API structure, since that demands an opinionated structure that makes it difficult to extend the starter kit. However, if you do need help with more advanced deployment strategies, here are a few tips:

### Static Deployments
If you are serving the application via a web server such as nginx, make sure to direct incoming routes to the root `~/dist/index.html` file and let react-router take care of the rest. If you are unsure of how to do this, you might find [this documentation](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#configuring-your-server) helpful. The Express server that comes with the starter kit is able to be extended to serve as an API or whatever else you need, but that's entirely up to you.

## Build System

### Configuration

Default project configuration can be found in `~/config/index.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation settings, tweak your vendor dependencies, and more. For the most part, you should be able to make changes in here **without ever having to touch the actual webpack build configuration**.

If you need environment-specific overrides (useful for dynamically setting API endpoints, for example), you can edit `~/config/environments.js` and define overrides on a per-NODE_ENV basis. There are examples for both `development` and `production`, so use those as guidelines. Here are some common configuration options:

|Key|Description|
|---|-----------|
|`dir_src`|application source code base path|
|`dir_dist`|path to build compiled application to|
|`server_host`|hostname for the Express server|
|`server_port`|port for the Express server|
|`compiler_devtool`|what type of source-maps to generate (set to `false`/`null` to disable)|
|`compiler_vendor`|packages to separate into to the vendor bundle|

Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/index.js`. When adding new globals, make sure you also add them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|
|`__TEST__`|True when `process.env.NODE_ENV` is `test`|

### Styles

Both `.scss` and `.css` file extensions are supported out of the box. After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.

We are also using [styled-components](https://github.com/styled-components/styled-components) for styles inside components, so SASS should only be used for global wide styles.

### Server

This starter kit comes packaged with an Express server. It's important to note that the sole purpose of this server is to provide `webpack-dev-middleware` and `webpack-hot-middleware` for hot module replacement. Using a custom Express app in place of [webpack-dev-server](https://github.com/webpack/webpack-dev-server) makes it easier to extend the starter kit to include functionality such as API's, universal rendering, and more -- all without bloating the base boilerplate.

### Production Optimization

Babel is configured to use [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined. In production, webpack will extract styles to a `.css` file, minify your JavaScript, and perform additional optimizations such as module deduplication.

## Learning Resources

* [Starting out with react-redux-starter-kit](https://suspicious.website/2016/04/29/starting-out-with-react-redux-starter-kit/) is an introduction to the components used in this starter kit with a small example in the end.

## FAQ

Having trouble? Check out our [FAQ](https://github.com/davezuko/react-redux-starter-kit/wiki/FAQ:-Frequently-Asked-Questions) or submit an issue. Please be considerate by only posting issues that are directly related to this project; questions about how to implement certain React or Redux features are both best suited for StackOverflow or their respective repositories.

## Thank You

This project wouldn't be possible without help from the community, so I'd like to highlight some of its biggest contributors. Thank you all for your hard work, you've made my life a lot easier and taught me a lot in the process.

* [Justin Greenberg](https://github.com/justingreenberg) - For all of your PR's, getting us to Babel 6, and constant work improving our patterns.
* [Roman Pearah](https://github.com/neverfox) - For your bug reports, help in triaging issues, and PR contributions.
* [Spencer Dixon](https://github.com/SpencerCDixon) - For your creation of [redux-cli](https://github.com/SpencerCDixon/redux-cli).
* [Jonas Matser](https://github.com/mtsr) - For your help in triaging issues and unending support in our Gitter channel.

And to everyone else who has contributed, even if you are not listed here your work is appreciated.
