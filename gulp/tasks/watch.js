module.exports = function () {
	$.gulp.task('watch', function(done) {
  		$.gulp.watch('./sass/**/*.scss',$.gulp.series('sass'));
 		done();
});
}