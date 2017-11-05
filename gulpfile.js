var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint');

gulp.task('sass', function() {
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']);

});

gulp.task('default', function () {
    return gulp.src('sass/**/*.s+(a|c)ss')
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError())
  });

gulp.task('default', ['watch']); 