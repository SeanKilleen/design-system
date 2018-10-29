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

gulp.task('css', ['clean-css'], function(){

});

