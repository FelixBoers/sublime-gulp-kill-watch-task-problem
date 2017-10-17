var gulp = require('gulp');

gulp.task('default', function() {
    gulp.watch('*.js', function(evt) {
    	console.log('file ' + evt.path + ' was ' + evt.type);
    });
});