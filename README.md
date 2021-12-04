# laravel-mix-nunjucks-2

Laravel Mix extension to compile Nunjucks templates.

## Install

```bash
npm install laravel-mix-nunjucks-2 --save-dev
```

## Usage

```javascript
const mix = require('laravel-mix');
require('laravel-mix-nunjucks-2');

mix.njk('resources/views/', {
  searchPath: '/',
  context: {
    foo: 'bar'
  }
});
```

* `searchPath` - Search path for templates/partials
* `context` - Data passed to template

*Feature*: Usage of a ready enviroment for sass, js and nunjucks with laravel-mix on it: [webpack-nunjucks-boilerplate](https://github.com/joaopjt/webpack-nunjucks-boilerplate/tree/laravel-mix).

For more info about nunjucks, check [https://mozilla.github.io/nunjucks/api.html](https://mozilla.github.io/nunjucks/api.html)