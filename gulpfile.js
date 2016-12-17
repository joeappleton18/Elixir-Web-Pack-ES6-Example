var elixir = require('laravel-elixir');
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';
elixir.config.viewPath = './';



elixir(function(mix) {
    mix.sass('app.scss');
    mix.webpack('app.js');
    mix.browserSync({
        files: ['**/*.html', 'dist/js/**/*.js', 'dist/css/**/*.css'],
        proxy: undefined,
        server: {
            baseDir: "./"
        }
    });
});
