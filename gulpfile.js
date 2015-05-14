var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	concatenate = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	include = require('gulp-include'),
	less = require('gulp-less'),
	livereload = require('gulp-livereload'),
	minifyCss = require('gulp-minify-css'),
	plumber = require('gulp-plumber'),
	rename = require("gulp-rename"),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify');

// scripts uglify
gulp.task('scripts', function() {
	gulp.src(['_/components/js/myscript.js', '_/components/js/bootstrap.js'])
		.pipe(plumber())
		.pipe(include())
		.pipe(uglify())
		.pipe(gulp.dest('_/js'))
		.pipe(livereload());
});

// sass
gulp.task('sass', function () {
    gulp.src('resources/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

// minify css
gulp.task('minify-css', function() {
  	gulp.src(['resources/assets/sass/app.scss', 'resources/assets/sass/style.scss'])
  		.pipe(plumber())
		.pipe(sass())
  		.pipe(autoprefixer())
		.pipe(concatenate('all.css'))
    	.pipe(minifyCss())	
    	.pipe(gulp.dest('css'))
    	.pipe(livereload());
});

// compress images
gulp.task('image', function() {
  	gulp.src('images/*')
  		.pipe(imagemin())
  		.pipe(gulp.dest('images'));
});

// watch
gulp.task('watch', function() {

	livereload.listen();

	gulp.watch('resources/assets/js/myscript.js', ['scripts']);
	gulp.watch(['resources/assets/sass/app.scss', 'resources/assets/sass/style.scss'], ['minify-css']);
});

gulp.task('default', ['scripts', 'minify-css', 'watch']);