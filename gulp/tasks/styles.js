var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
<<<<<<< HEAD
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
=======
mixins = require('postcss-mixins');
>>>>>>> our-features

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> our-features
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
<<<<<<< HEAD
>>>>>>> footer
=======
>>>>>>> our-features
	.pipe(gulp.dest('./app/temp/styles'))
});