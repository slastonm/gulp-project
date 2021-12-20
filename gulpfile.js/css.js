const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const combineMediaQuery = require('postcss-combine-media-query');
const concat = require('gulp-concat');

function scss2css() {
    return src('style/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(rename('style.css'))      
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/css'));
}
  
exports.scss2css = scss2css;

function postcss2css() {
    const plugins = [
    autoprefixer(),
    combineMediaQuery(),
    cssnano()
];
return src('dist/css/*.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('all.css'))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(rename('style.min.css'))
    .pipe(dest('dist/css/'));
}
exports.postcss2css = postcss2css;

const del = require('del');
function removeOld(){
return del('dist/css/style.css');
}
exports.clean = removeOld;