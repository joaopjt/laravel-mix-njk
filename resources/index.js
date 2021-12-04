const Mix = require('laravel-mix');
const glob = require('glob');
const path = require('path');
const process = require('process');
const basePath = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');

class Nunjucks {
  constructor() {
    this.entry = [];
    this.nunjucksOptions = {};
    this.pages = [];
  }

  /**
   * The API name for the component
   */
  name() {
    return ["nunjucks", "njk"];
  }

  dependencies() {
      // Example:
      return ['glob', 'html-webpack-plugin', 'html-loader', 'nunjucks-html-loader'];
  }

  /**
   * Register the component
   *
   * @param {string} from
   * @param {object} options
   */
  register(from, options = {}) {
    this.pages = glob.sync('**/*.njk', {
      cwd: path.join(basePath, from),
      root: '/',
    }).map(page => new HtmlWebpackPlugin({
      filename: page.replace('njk', 'html'),
      template: path.join(basePath, `/resources/html/${page}`)
    }));

    this.nunjucksOptions = JSON.stringify(options);
  }

  /**
   * Rules to be merged with the underlying webpack rules.
   *
   * @return {Array|Object}
   */
  webpackRules() {
    return {
      test: /\.(njk|nunjucks)$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            sources: false
          }
        },
        {
          loader: `nunjucks-html-loader?${this.nunjucksOptions}`
        }
      ]
    }
  }


  /*
   * Plugins to be merged with the underlying webpack plugins array.
   *
   * @return {Array|Object}
   */
  webpackPlugins() {
    return [
      ...this.pages
    ]
  }
}

Mix.extend('njk', new Nunjucks());