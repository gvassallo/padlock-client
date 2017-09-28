var gulp = require('gulp'); 
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var sass = require('gulp-sass'); 

const paths = {
  bundle: 'app.js',
  srcJsx: 'index.js',
  srcScss: 'scss/*.scss',
  dist: 'dist',
  distJs: 'dist/js',
  distCss: 'dist/css'
};

gulp.task('styles', () => {
  return gulp.src(paths.srcScss)
  .pipe(sass({
    errLogToConsole: true,
    includePaths: [
      'node_modules/bootstrap-sass/assets/stylesheets',
      'node_modules/font-awesome', 
      'node_modules/spinkit/scss'
    ]
  }))
  .on('error', function(err) {
    util.log('Sass', util.colors.red(err.message));
    this.emit('end');
  })
  .pipe(gulp.dest(paths.distCss));
});

gulp.task('default', ['styles']); 
