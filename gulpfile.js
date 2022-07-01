const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function () {
    return gulp.src('./src/style/scss/**/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest('./src/style/css'))
});

gulp.task('watch', function () {
    gulp.watch('./src/style/scss/**/*.scss', gulp.series('sass-compile'));
});
