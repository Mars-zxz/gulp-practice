var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
gulp.task('js', function() {
    gulp.src(['./main.js', './main2.js', './jquery.js'])
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'))
})
gulp.task('css', function() {
    gulp.src(['./style.css', './fonts/iconfont.css'])
        .pipe(minifycss())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('css'))
})
gulp.task('html', function() {
    gulp.src('./index.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('html'))
})
gulp.task('watch', function() {
    gulp.watch('./css/all.css', ['css'])
    gulp.watch('./js/all.js', ['js'])
    gulp.watch('./html/index.html', ['html'])
})
gulp.task('default', ['css', 'js', 'html'], function() {
    console.log(9);
})