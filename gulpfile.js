var gulp = require('gulp')
  , browserify = require('browserify')
  , transform = require('vinyl-transform')
  , sass = require('gulp-sass')
  , deploy = require('gulp-gh-pages')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , minifycss = require('gulp-minify-css')
  , neat = require('node-neat').includePaths
  , imagemin = require('gulp-imagemin')
  , pngquant = require('imagemin-pngquant');

// Browserify Task
gulp.task('browserify', function () {
  var browserified = transform(function (filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(['src/js/main.js'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// Sass Task
gulp.task('sass', function () {
  gulp.src('src/_sass/main.scss')
    .pipe(sass({
      style: 'expanded',
      includePaths: neat
    }))
    .pipe(gulp.dest('css'))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

// Imagemin
gulp.task('imagemin', function () {
  gulp.src('src/_img/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('img'));
});

// Watch Task
gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['default']);
});

// Default Task
gulp.task('default', ['browserify', 'sass']);

// Deploy task
gulp.task('deploy', function () {
  gulp.src('_site/**/*')
    .pipe(deploy());
});
