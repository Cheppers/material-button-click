const gulp = require('gulp');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const header = require('gulp-header');
const clean = require('gulp-clean');
const pkg = require('./package.json');
const fileHeader = '/* ' + [
  '<%= pkg.description %> <%= pkg.version %>',
  'https://opensource.org/licenses/<%= pkg.license %>'
].join(' | ') + ' */\n';

gulp.task('lint', () => {
  return gulp.src(['./src/**/*.js', '!node_modules/**', '!dist/**'])
    .pipe(eslint('.eslintrc.json'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('dist', ['clear'], () => {
  gulp.src('./src/*.js')
    .pipe(uglify())
    .pipe(rename((path) => {
      path.basename += ".min";
    }))
    .pipe(header(fileHeader, { pkg : pkg }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clear', () => {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});

gulp.task('default', ['lint']);
