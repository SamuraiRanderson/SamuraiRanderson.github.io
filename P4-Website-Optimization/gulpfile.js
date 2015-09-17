var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css');
	// Imagemin = require('gulp-imagemin'),
	// imageminJpegtran = require('gulp-imagemin-jpegtran'),
	// browserSynch = require('gulp-browser-synch');

// Minify JavaScript and renames the minified file.
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js/'));
	// "*" will look for all js files.
	// "**" will look for all subfolders.
	// "pipe" (like water pipes) will push changes into specified files.
});

// Minify css and renames the minified file
gulp.task('styles', function(){
	gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('css/'));
});

// Optimizes, and compresses, image files.
// gulp.task('images', function(){
// 	return gulp.src('images/*.jpg')
// 		.pipe(imageminJpegtran({progressive: true})())
// 		.pipe(gulp.dest('images/'));
// });

//
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.css', ['styles']);
	gulp.watch('images/*.jpg', ['images']);
});

// gulp.task('serve', ['scripts', 'styles', 'images', 'watch']);
