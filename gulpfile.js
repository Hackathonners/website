var elixir = require('laravel-elixir');

require('laravel-elixir-webpack');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
    'fontawesome': 'node_modules/font-awesome/',
};

elixir(function(mix) {
    mix.sass('app.scss');
    mix.webpack('app.js');

    mix.styles([
        'public/css/app.css',
        paths.fontawesome + 'css/font-awesome.css',
    ], 'public/css/app.css', './');

    mix.copy([
        paths.fontawesome + 'fonts/**'
    ], 'public/fonts');
});
