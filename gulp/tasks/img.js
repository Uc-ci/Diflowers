module.exports = function () {
	$.gulp.task('img', function () {
    return $.gulp.src('./img/*.{png,jpg,jpeg}')
        .pipe($.image({
            key: 'y5PCxsR0Lr49Q1tZy5Mcl1rMtJvFj9cc',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe($.gulp.dest('./img'));
	});
}


