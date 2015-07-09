# A Laravel Elixir potion for Zurb Foundation and Font Awesome integration

This is a fork of the [zacksmash/laravel-elixir-foundation-recipe](https://github.com/zacksmash/laravel-elixir-foundation-recipe) that I've tweaked to incorporate Font Awesome. I've also tinkered a little with the folder structure - this is just taste.

## How to use

Follow the instructions in the [Laravel documentation](http://laravel.com/docs/5.0/elixir#installation) to get started with Elixir.

If you want to use Livereload with this, then cd into the project's root and:

```npm install --save-dev laravel-elixir-livereload```


Make sure you have bower installed:

```npm install -g bower```

Then cd into the root of your project and create a bower.json file and place the following in it:

```
{
  "name": "name-of-your-project"
}
```

next create a .bowerrc file and place the following in it to configure bower to install components in the resource directory

```
{
  "directory": "resources/assets/bower_components"
}
```

Install Foundation:

```
bower install foundation —save
```

Install Font Awesome

```
bower install font-awesome -save
```


* Download or clone this repository and copy the contents of `gulpfile.js` into your Laravel project's `gulpfile.js`
* Add the `app.scss` and `_settings.scss` files from this repository into the `resources/assets/sass` directory (if it doesn't exist, then create it) in Laravel
* Add the `app.js` file from this repository into the `resources/assets/js` directory (if it doesn't exist, then create it) in Laravel 
* If you're using Livereload then uncomment the relevant line (.livereload();) in the gulpfile.js and add the follwing to the bottom of the main layout file:

```@if ( env('APP_ENV') === 'development' )
	<script type="text/javascript">
		document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
	</script> 
@endif
```

* Add the following in your head tags:

```
<!-- Custom CSS -->
<link rel="stylesheet" href="{{ elixir("css/app.css") }}"/>
<!-- Modernizer -->
<script src="{{ elixir("js/modernizr.js") }}"></script>
```
*and the following just beofre your closing body tag:
```
<script src="{{ elixir("js/app.js") }}"></script>
```

* Run `gulp` from the terminal.




There you go...

You can use app.scss file to choose which of the CSS components to import into your project and you can use gulpfile.js to chose which of the JS components to import into your project.
