var gulp = require('gulp'),
    gulpWatch = require('gulp-watch'),
    del = require('del'),
    argv = process.argv;


/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('build:before', ['fonts', 'sass', 'build']);
gulp.task('serve:before', ['copyAssets', 'fonts', 'watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var buildWebpack = require('ionic-gulp-webpack-build');
var buildSass = require('ionic-gulp-sass-build');

var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');

gulp.task('copyAssets', function() {
  gulp.src('app/assets/fonts/**/*.+(otf|ttf|woff|woff2)').pipe(gulp.dest('www/build/fonts'));
  gulp.src('app/assets/images/**/*.+(png|gif|jpeg)').pipe(gulp.dest('www/build/images'));
});

gulp.task('watch', ['sass'], function() {
    gulpWatch('app/**/*.scss', () => gulp.start('sass'));
    gulpWatch('app/assets/**/*', () => gulp.start('copyAssets'));
    return buildWebpack({ watch: true });
});

gulp.task('build', buildWebpack);
gulp.task('sass', () => {
    return buildSass({
        dest: 'www/build',
        onError: error => console.log(error)
    })
});
gulp.task('fonts', copyFonts);
gulp.task('scripts', copyScripts);
gulp.task('clean', function(done){
  del('www/build', done);
});

gulp.task('buddybuild', ['fonts', 'sass', 'build']);
