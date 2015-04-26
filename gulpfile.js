var gulp = require('gulp');

var  livereload = require('gulp-livereload');
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
  // place code for your default task here
});




gulp.task('js', ['clean'], function() {
  // Browserify/bundle the JS.
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./src/'));
});