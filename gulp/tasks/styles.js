var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
<<<<<<< HEAD
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
});
=======
mixins = require('postcss-mixins');
>>>>>>> footer

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
<<<<<<< HEAD
=======
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
>>>>>>> footer
	.pipe(gulp.dest('./app/temp/styles'))
});