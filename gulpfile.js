var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();
 gulp.watch("aqua/less/*.less", ['less']);
 gulp.watch("aqua/*.html").on('change', browserSync.reload);

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('styles', function() {
	gulp.src('less/**/*.less')
	.pipe(less())
	.pipe(autoprefixer({
            browsers: ['last 2 versions']
        }
        ))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
});

var jquery = require('gulp-jquery');
gulp.task('jquery', function () {
    return gulp.src('./node_modules/jquery-custom/jquery.1/src')
        .pipe(jquery({
            flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
        }))
        .pipe(gulp.dest('./public/vendor/'));
    // creates ./public/vendor/jquery.custom.js 
});