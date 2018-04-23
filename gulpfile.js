let gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint');

gulp.task('sass', function() {
    return gulp.src(['assets/sass/style.sass', 'assets/sass/style.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
    gulp.watch(['assets/sass/**/*.sass', 'assets/sass/**/*.scss'], ['sass']);

});

gulp.task('default', function () {
    return gulp.src('assets/scss/**/*.s+(a|c)ss')
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError())
  });

gulp.task('default', ['watch']); 