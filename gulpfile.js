'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('rename');
var changed = require('gulp-change');

//////////////
// - SCSS/CSS
/////////////

var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';

// Compile SCSS
gulp.task('compile_scss', function(){
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error, sass.logError'))
  .pipe(minifyCSS())
  .pipe(rename({ suffi: '.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST))
});
