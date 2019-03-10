module.exports = function () {
	$.gulp.task('sass', function () {
  		return $.gulp.src('./sass/**/*.scss')
    		.pipe($.scss().on('error', $.scss.logError))
    		.pipe($.prefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    		.pipe($.gulp.dest('./css'))
    		.pipe($.bs.reload({
    			stream:true
    		}));
	});
}
