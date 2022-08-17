# laravel-mix-njk

Laravel Mix extension to compile Nunjucks templates.

## Install

```bash
npm install laravel-mix-njk --save-dev
```

## Usage

```javascript
const mix = require('laravel-mix');
require('laravel-mix-njk');

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
