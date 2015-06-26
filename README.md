# laravel-elixir-foundation-recipe
An Elixir recipe for Foundation Framework. Be sure you've followed the instructions in the Laravel documentation to get started with Elixir.

Then install Livereload:

`npm install --save-dev laravel-elixir-livereload`

## How to use

First, you'll need to install Foundation, using Bower, into resources/assets. From the assets directory, enter `bower install foundation` in terminal. This will install Foundation inside of the `bower_componets` folder.

* Download or clone this repository and copy the contents of `gulpfile.js` into your Laravel project's `gulpfile.js`
* Add the `app.scss` and `_settings.scss` files from this repository into the `resources/assets/sass` folder in Laravel
* Add the `app.js` file from this repository into the `resources/assets/js` folder in Laravel
* Run `gulp` from the terminal.
* Add this to the bottom of the main Layout file 

`@if ( env('APP_ENV') === 'development' )

	<script type="text/javascript">
		document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
	</script> 
	
@endif`

That should do it!

You can use app.scss file to choose which of the CSS components to import into your project and you can use gulpfile.js to chose which of the JS components to import into your project.
