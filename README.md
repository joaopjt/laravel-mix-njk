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
* `context` - Nunjucks data passed to the template

For more info about Nunjucks API, check [https://mozilla.github.io/nunjucks/api.html](https://mozilla.github.io/nunjucks/api.html)