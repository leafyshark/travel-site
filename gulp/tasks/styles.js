var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
nested = require('postcss-nested'),
cssvars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
<<<<<<< HEAD
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
=======
mixins = require('postcss-mixins');
>>>>>>> testimonials

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> our-features
=======
>>>>>>> testimonials
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> footer
=======
>>>>>>> our-features
=======
>>>>>>> testimonials
	.pipe(gulp.dest('./app/temp/styles'))
});