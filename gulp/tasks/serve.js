module.exports = function () {
	// Static server
		$.gulp.task('serve', function() {
  			 $.bs.init({
      		  server: {
           		baseDir: "./"
       		 }
    	});
  		$.gulp.watch("*.html").on('change', $.bs.reload)
  	});
}
