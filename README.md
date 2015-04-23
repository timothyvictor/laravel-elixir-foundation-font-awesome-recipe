# laravel-elixir-foundation-recipe
An Elixir recipe for Foundation Framework. Be sure you've followed the instructions in the Laravel documentation to get started with Elixir.

## How to use

First, you'll need to install Foundation, using Bower, to the root directory. From the root directory, enter `bower install foundation` from termina. This will install Foundation inside of the `bower_componets` folder.

* Download or clone this repository and copy the contents of `gulpfile.js` into your Laravel project's `gulpfile.js`
* Add the `app.scss` file from this repository into the `resources/assets/sass` folder in Laravel
* Add the `app.js` file from this repository into the `resources/assets/js` folder in Laravel
* Run `gulp` from the terminal.

That should do it!

You can use app.scss file to choose which of the CSS components to import into your project and you can use gulpfile.js to chose which of the JS components to import into your project.
