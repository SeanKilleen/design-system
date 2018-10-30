var gulp = require('gulp');
var log = require('fancy-log');
var del = require('del');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var options = {
  sassInputLocationGlob: '_scss/**/*.scss',
  cssOutputLocation: './_site/css',
  sassSourcemapsOutputLocation: 'TODO',
  nodeSassOptions: {
    // Per the gulp readme at https://github.com/dlmanning/gulp-sass#readme,
    // These will be passed along directly. Options reference at https://github.com/sass/node-sass#options 
    outputStyle: 'expanded',
    includePaths: [
      'node_modules/uswds/src/stylesheets',
      'node_modules/uswds/src/stylesheets/lib/'
    ]
  }
}

gulp.task('clean-css', function(){
  return del(['css']);
});

gulp.task('clean-js', function(){
  return del(['js']);
});

gulp.task('clean', ['clean-js', 'clean-css']);

gulp.task('css', ['sass', 'autoprefixer', 'css-min'], function(){
  return log('running css');
});

gulp.task('sass', ['clean-css'], function(){
  return gulp.src(options.sassInputLocationGlob)
    .pipe(sourcemaps.init())
    .pipe(sass(options.nodeSassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write(options.sassSourcemapsOutputLocation))
    .pipe(gulp.dest(options.cssOutputLocation))
});

gulp.task('autoprefixer', ['sass'], function()
{
  return log('running autoprefixer');
});

gulp.task('css-min', ['autoprefixer'], function(){
  return log('running css-min');
});

gulp.task('watch:sass', function(){
  gulp.watch(options.sassInputLocationGlob, ['sass']);
});