var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var bourbon = require('bourbon').includePaths;
var neat = require('bourbon-neat').includePaths;


gulp.task('buildcssfromsass', function () {
    gulp.src('./node_modules/usajobs-design-system/_scss/all-usajobs.scss')
        .pipe(sass({
            includePaths: [
                bourbon,
                neat,
                './node_modules/uswds/src/stylesheets/',
                './node_modules/uswds/src/stylesheets/lib/',
                './node_modules/usajobs-design-system/_scss/'
            ]
        }).on('error', sass.logError))
        .pipe(rename('usajobs-design-system-base.css'))
        .pipe(gulp.dest('./Content/usaj-design-system/css'));

    gulp.src('./node_modules/usajobs-design-system/_scss/components.scss')
        .pipe(sass({
            includePaths: [
                bourbon,
                neat,
                './node_modules/uswds/src/stylesheets/',
                './node_modules/uswds/src/stylesheets/lib/',
                './node_modules/usajobs-design-system/_scss/'
            ]
        }).on('error', sass.logError))
        .pipe(rename('usajobs-design-system-components.css'))
        .pipe(gulp.dest('./Content/usaj-design-system/css'));
});