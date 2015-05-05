var gulp = require('gulp');

var server = require('gulp-express');

var rename = require('gulp-rename');
var watch = require("gulp-watch");

var browserify = require('gulp-browserify');
 
gulp.task('watch', function() {

	watch("react/**/*.js", function(){
		gulp.src('react/reactClient.js')
		    .pipe(browserify({
		      transform: ['reactify']
		    }))
		    .pipe(rename('bundle.js'))
		    .pipe(gulp.dest('public/javascripts'))

		});
	  
});

gulp.task("browserify", function(){
	gulp.src('react/reactClient.js')
	    .pipe(browserify({
	      transform: ['reactify']
	    }))
	    .pipe(rename('bundle.js'))
	    .pipe(gulp.dest('public/javascripts'))
	});

gulp.task('default', function() {
   server.run(['bin/www']);
});


gulp.task('server', function () {
    // Start the server at the beginning of the task 
    server.run(['bin/www']);
 
    // Restart the server when file changes 
    gulp.watch(['react/**/*.js'], 
    	function(){
    		gulp.src('react/reactClient.js')
			    .pipe(browserify({
			      transform: ['reactify']
			    }))
			    .pipe(rename('bundle.js'))
			    .pipe(gulp.dest('public/javascripts'))
			    .pipe( server.notify() );

    	});

});

