const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
.js('node_modules/react-router/esm/react-router.js','public/js/cod/frontend').sourceMaps()
.react('resources/js/admin/app.js', 'public/js/admin')
.react('resources/js/cod/backend/app.js', 'public/js/cod/backend')
.react('resources/js/cod/frontend/app.js', 'public/js/cod/frontend')
.react('resources/js/vdd/app.js', 'public/js/vdd')
.react('resources/js/wrd/app.js', 'public/js/wrd')
.react('resources/js/wrd/website/app.js', 'public/js/wrd/website')
.react('resources/js/spd/app.js', 'public/js/spd')
.react('resources/js/practice/app.js', 'public/js/practice')
.sass('resources/sass/app.scss', 'public/css')
.sass('resources/sass/admin/app.scss', 'public/css/admin')
.sass('resources/sass/cod/app.scss', 'public/css/cod')
.sass('resources/sass/spd/app.scss', 'public/css/spd')
.sass('resources/sass/vdd/app.scss', 'public/css/vdd')
.sass('resources/sass/wrd/app.scss', 'public/css/wrd')
.sass('resources/sass/practice/app.scss', 'public/css/practice');
