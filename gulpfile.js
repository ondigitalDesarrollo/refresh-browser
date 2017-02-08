// Integaración de la Libreria
const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  pug  = require('gulp-pug'),
	  autoprefixer = require('gulp-autoprefixer');

// Compilar sass
gulp.task('sass', () => {
    gulp.src('./scss/*.scss')
      .pipe(sass({
      	outputStyle: 'nested'
      }))
      .pipe(autoprefixer({
      	versions: ['last 2 browsers']
      }))
      .pipe(gulp.dest('./css'))  
});

// Compilar pug
gulp.task('pug', () => {
	gulp.src('./dev/views/*.pug')
      .pipe(pug({
      	pretty: true
      }))
      .pipe(gulp.dest('./dist'))
});

// Compilacion Total del Proyecto
gulp.task('default',['sass','pug'], () => {
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./dev/views/**/*.pug', ['pug']);
});

// Observar el proyecto 

