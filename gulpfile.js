var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    svgstore = require('gulp-svgstore'),
    inject = require('gulp-inject'),
    svgmin = require('gulp-svgmin'),
    jquery = require('gulp-jquery'),
    path = require('path');

var config = {
    server: {
        baseDir: ["./"]
    }
};


gulp.task('styles', function() {
    gulp.src('less/**/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});


gulp.task('jquery', function() {
    return gulp.src('./node_modules/jquery-custom/jquery.1/src')
        .pipe(jquery({
            flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
        }))
        .pipe(gulp.dest('./public/vendor/'));
    // creates ./public/vendor/jquery.custom.js 
});

gulp.task('svgstore', function() {
    return gulp
        .src('images/src/*.svg')
        .pipe(svgmin())
        .pipe(svgstore({ fileName: 'icons.svg', prefix: 'ico-' }))
        .pipe(gulp.dest('images/dest'));
});

gulp.task("watch", function () {
        gulp.watch("less/*.less", ['styles']);
        gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task("server", function () {
    browserSync(config);
});

gulp.task("default", ["styles", "jquery", "svgstore", "watch", "server"]);