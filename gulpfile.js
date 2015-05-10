var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


var config = {
	path: {
		public: './',
		jquery: './bower_components/jquery-legacy/dist',
		modernizr: './bower_components/modernizr',
		bootstrap: './bower_components/bootstrap-sass',
		fontAwesome: './bower_components/font-awesome'
	}
};

gulp.task('css', function () {
	return gulp.src('./css/app.scss')
		.pipe(sass({
			includePaths: [
				config.path.bootstrap + '/assets/stylesheets'
			]
		}))
		.pipe(gulp.dest(config.path.public + '/css'));
});

gulp.task('fonts', function () {
	return gulp.src(config.path.bootstrap + '/assets/fonts/**/*')
		.pipe(gulp.dest(config.path.public + '/fonts'));
});

gulp.task('compress_js', function() {
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./js'));
});

gulp.task('default', ['css', 'fonts']);
