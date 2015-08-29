var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	tsPath = "*.ts",
	compilePath = "",
	dist = "";

// gulp.task('compressScripts', function() {
// 	gulp.src([
// 		compilePath + '*.js'
// 	])
// 		.pipe(plumber())
// 		.pipe(concat('scripts.min.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest(dist));
// });

gulp.task('typescript', function() {
	var tsResults = gulp.src(tsPath)
				.pipe(ts({
					target: 'ES5',
					declarationFiles: false,
					noExternalResolve: true
				}));
//	tsResults.dts.pipe(gulp.dest(compilePath + '/tsdefinitions'));
	return tsResults.js.pipe(gulp.dest(compilePath + ''));
});

gulp.task('watch', function() {

	gulp.watch([tsPath], ['typescript'])

});

//gulp.task('default', ['typescript', 'watch', 'compressScripts']);
gulp.task('default', ['typescript', 'watch']);