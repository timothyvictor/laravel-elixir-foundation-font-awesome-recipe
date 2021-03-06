var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
  mix
  /* Compile the app.scss file to public/css/app.css */
  .sass('app.scss')
  
  /* Copy the Foundation JS folder from bower_components to a js/foundation folder */
  .copy('resources/assets/bower_components/foundation/js', 'resources/assets/js/foundation')

  /* Copy the Font Awesome fonts folder from bower_components to a fonts folder */
  .copy('resources/assets/bower_components/fontawesome/fonts', 'public/fonts')
  
  /* Copy the Modernizr.js library into it's own file at public/js/modernizr.js */
  .scripts('foundation/vendor/modernizr.js', 'public/js/modernizr.js', 'resources/assets/js')
  
  /* Compile/Merge all of the js files to public/js/app.js */
	.scripts([
		/* Grab Fastclick.js and jQuery.js first */
		'foundation/vendor/fastclick.js',
		'foundation/vendor/jquery.js',
		
		/* Use the entire Foundation JS library */
		'foundation/foundation.js',
		
		/* Or use Foundation JS components individually */
		//'foundation/foundation/foundation.js',	
		//'foundation/foundation/foundation.abide.js',
		//'foundation/foundation/foundation.accordion.js',
		//'foundation/foundation/foundation.alert.js',
		//'foundation/foundation/foundation.clearing.js',
		//'foundation/foundation/foundation.dropdown.js',
		//'foundation/foundation/foundation.equalizer.js',
		//'foundation/foundation/foundation.interchange.js',
		//'foundation/foundation/foundation.joyride.js',
		//'foundation/foundation/foundation.magellan.js',
		//'foundation/foundation/foundation.offcanvas.js',
		//'foundation/foundation/foundation.orbit.js',
		//'foundation/foundation/foundation.reveal.js',
		//'foundation/foundation/foundation.slider.js',
		//'foundation/foundation/foundation.tab.js',
		//'foundation/foundation/foundation.tooltip.js',
		//'foundation/foundation/foundation.topbar.js',
		
		/* Finally, include your custom javascript file */
		'app.js'
		
	], 'public/js/app.js', 'resources/assets/js')
	
	/* Setup versioning for the app.css, app.js and modernizr.js files */
	.version(["css/app.css", "js/app.js", 'js/modernizr.js'])
	
	/* Use Livereload to keep the browser refreshed */
	// .livereload();
});
