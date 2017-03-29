//
//REQUIRED
//
var gulp 					= require('gulp'),
		uglify 				= require('gulp-uglify'),
		browserSync		= require('browser-sync'),
		reload				=	browserSync.reload,
		rename 				= require('gulp-rename'),
		sass	 				= require('gulp-sass'),
		autoprefixer	=	require('gulp-autoprefixer'),
		plumber				= require('gulp-plumber');
//
//MAIN SCRIPTS Tasks
//
gulp.task('scripts', function(){
	gulp.src(['js/**/*.js','!js/**/*.min.js'])
	.pipe(plumber())
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(reload({stream:true}));
});

//SASS Task
//
gulp.task('sass', function(){
	gulp.src('sass/*.scss')
	.pipe(plumber())
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(autoprefixer('last 2 versions'))
	.pipe(gulp.dest('dist/css'))
	.pipe(reload({stream:true}));
});
//
//Browser-Sync Task
//
gulp.task('browser-sync', function(){
	var files = [

			'**/*.php',
			'**/*.{png,jpg,gif}'
		];
	browserSync.init(files, {
			proxy: 'http://192.168.33.10/',
			injectChanges: true
	});
});
//
//WATCH Task
//
gulp.task('watch', function(){
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('sass/**/*.scss', ['sass']);
});
//
//DEFAULT TASK
//
gulp.task('default', ['scripts','sass','browser-sync','watch']);