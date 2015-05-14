var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	less = require('gulp-less'),
	include = require('gulp-include'),
	plumber = require('gulp-plumber'),
	minifyCss = require('gulp-minify-css');

// scripts uglify
gulp.task('scripts', function() {
	gulp.src(['_/components/js/myscript.js', '_/components/js/bootstrap.js'])
		.pipe(plumber())
		.pipe(include())
		.pipe(uglify())
		.pipe(gulp.dest('_/js'))
		.pipe(livereload());
});

// minify css
gulp.task('minify-css', function() {
  	gulp.src('assets/sass/*.scss')
  		.pipe(plumber())
		.pipe(sass())
    	.pipe(minifyCss())
    	.pipe(gulp.dest('css'))
});

// watch
gulp.task('watch', function() {
	gulp.watch('_/components/js/myscript.js', ['scripts']);
	gulp.watch('_/components/less/mystyle.less', ['minify-css']);
});

gulp.task('default', ['scripts', 'minify-css', 'watch']);