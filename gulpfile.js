var gulp = require('gulp');
var log = require('fancy-log');
var del = require('del');

var options = {

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
  return log('running sass');
});

gulp.task('autoprefixer', ['sass'], function()
{
  return log('running autoprefixer');
});

gulp.task('css-min', ['autoprefixer'], function(){
  return log('running css-min');
});