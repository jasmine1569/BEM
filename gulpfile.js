'use strict';

var elixir = require('laravel-elixir');

// Elixir Configurations
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

var bowerPath = './bower_components';

elixir(function(mix) {

  // Sample Vendor File
  mix.copy(`${bowerPath}/jquery/dist/jquery.min.js`, 'src/js/vendor/jquery.js');
  mix.copy(`${bowerPath}/bxslider-4/dist/jquery.bxslider.min.js`, 'src/js/vendor/bxslider-4.js');
  mix.copy('./node_modules/font-awesome/scss', 'src/sass/vendor/font-aweseome');
  mix.copy('..node_modules/font-aweseome/fonts',  'dist/fonts');

  mix.scripts([
    'vendor/jquery.js',
    'vendor/bxslider-4.js',
    'app.js'
  ],'dist/js/app.js');

  mix.sass('app.scss');
});
