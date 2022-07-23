const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('ibk/**/*.scss') // change the index.scss to *.scss this means monitor every file the .scss extensions
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['ibk/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)


//This compiler will not compile any file starting with an underscore(_)