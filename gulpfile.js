'use strict';

global.$ = {
	gulp: require('gulp'),
	scss: require('gulp-sass'),
	prefixer: require('gulp-autoprefixer'),
	image: require('gulp-tinypng-extended'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
}; 

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
	$.gulp.parallel('sass'),
	$.gulp.parallel('watch','serve')
	));


