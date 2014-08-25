var gulp        = require('gulp');
var connect     = require('gulp-connect');
var clean       = require('gulp-clean');
var ejs         = require('gulp-ejs');
var watch       = require('gulp-watch');
var bower       = require('main-bower-files');
var concat      = require('gulp-concat');
var filter      = require('gulp-filter');
//this might be replaced one day, because it's a hack
var runSequence = require('run-sequence');
	
gulp.task('clean', function() {
	return gulp.src('./build/*', {read: false})
		.pipe(clean());
});

gulp.task('connect', function() {
  	connect.server({
    	livereload: true,
    	root: 'build'
  	});
});

gulp.task('ejs', function () {
  	gulp.src('./src/ejs/**/*.ejs')
  		.pipe(ejs())
  		.pipe(connect.reload())
  		.pipe(gulp.dest('./build'));
});

gulp.task('scripts', function() {
	gulp.src('./src/js/**/*.js')
		.pipe(concat('app.js'))
		.pipe(connect.reload())
		.pipe(gulp.dest('./build/js'));
});

gulp.task('css', function() {
	gulp.src('./src/css/**/*.css')
		.pipe(connect.reload())
		.pipe(gulp.dest('./build/css'));
});

gulp.task('bowerjs', function() {
	gulp.src(bower())
		.pipe(filter('**/*.js'))
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('./build/js'));
});

gulp.task('build', function() {
	runSequence('clean', ['scripts', 'ejs', 'css', 'bowerjs']);
});

gulp.task('watch', ['build', 'connect'], function() {
	gulp.watch('./src/js/**/*.js', ['scripts']);
	gulp.watch('./src/ejs/**/*.ejs', ['ejs']);
	gulp.watch('./src/css/**/*.css', ['css']);
});

gulp.task('default', ['watch']);
