var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/global', './assets/css/global.scss')
    .addStyleEntry('css/admin', './assets/css/admin.css')
    .enableSassLoader(function(sassOptions) {}, {
         resolveUrlLoader: false
     })
     .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
