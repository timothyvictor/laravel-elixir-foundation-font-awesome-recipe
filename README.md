# laravel-elixir-foundation-recipe
An Elixir recipe for Foundation

## How to use

First, you'll need to install foundation with bower to the `resources/assets` folder. After you've done that...

* Download or clone this repository and copy the contents of gulpfile.js into your Laravel project's gulpfile.js
* Run `gulp` from the terminal
* Create a file called `app.scss` into the `resources/assets/sass` folder
* Open `app.scss` and add this to the first line: `@import 'foundation/foundation';`
* You can also add Normalize to your project by adding this line before the previous line `@import 'foundation/normalize';`
* Create a file called `app.js` into the `resources/assets/js` folder
* Open `app.js` and add this to the first line: `$(document).foundation();`
* Run `gulp` one more time

That should do it!
