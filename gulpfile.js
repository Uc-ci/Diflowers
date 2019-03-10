'use strict';

global.$ = {
	gulp: require('gulp'),
	scss: require('gulp-sass'),
	prefixer: require('gulp-autoprefixer'),
	gp: require('gulp-load-plugins')(),
	
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
}; 

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task('default',$.gulp.series('sass','watch'));
