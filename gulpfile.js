let gulp = require('gulp'),
    sass = require('gulp-sass'),
    build = require('gulp-build'),
    sassLint = require('gulp-sass-lint');


var options = {
    /*partials: [{
        name: 'footer',
        tpl: '<p>Copyright 2013</p>'
    }],*/
    layout: './index.html'
};

gulp.task('build', function() {
    gulp.src('./*.html')
        .pipe(build({ title: 'Some page' }, options))
        .pipe(gulp.dest('dist'))
});


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