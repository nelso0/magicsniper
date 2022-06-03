let mix = require('laravel-mix');

mix.setPublicPath('./')
    .copy(['src/manifest.json','src/popup.html'], 'dist')
    .copy('src/fonts/', 'dist/fonts')
    .copy('src/icons/', 'dist/icons')
    .copy('src/img/', 'dist/img')
    .copy('src/css/', 'dist/css')
    .js('src/js/content.js', 'dist/js')
    .js('src/js/app.js', 'dist/js').vue();