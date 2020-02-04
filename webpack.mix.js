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


mix
    .copy('node_modules/jquery/dist/jquery.min.js', 'dev/assets/js/')
    .copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'dev/assets/css/')
    .copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'dev/assets/js/')
    .copy('node_modules/popper.js/dist/popper.min.js', 'dev/assets/js/')
    .copy('node_modules/slick-carousel/slick/slick.min.js', 'dev/assets/js/')
    .copy('node_modules/slick-carousel/slick/slick.css', 'dev/assets/css/')
    .copy('node_modules/slick-carousel/slick/slick-theme.css', 'dev/assets/css/')
    .copy('node_modules/jquery-mask-plugin/dist/jquery.mask.min.js', 'dev/assets/js/')
    .copy('node_modules/popper.js/dist/popper.min.js', 'dev/assets/js/');


mix
    .js('dev/assets/js/dev/script.js', 'dev/assets/js/')
    .sass('dev/assets/css/scss/style.scss', 'dev/assets/css/')
    .browserSync({
        port: 3000,
        proxy: 'localhost:3000',
        host: 'localhost:3000',
        open: 'external',
        domain: '0.0.0.0',
        files: [
            'dev/assets/css/scss/*.scss',
            'dev/assets/js/dev/*.js',
            'dev/*.html',
            'dev/*.php',
            '*html'
        ],
        server:{
            baseDir: 'dev/',
            index:'index.html',
            ws:true
        }
    });