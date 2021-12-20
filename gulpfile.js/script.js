const { src, dest, series, watch } = require('gulp');


const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;

function js() {
    return src('scripts/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env'],
            plugins:['@babel/plugin-transform-spread']
        }))
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write())
		.pipe(uglify())
        .pipe(dest('dist/script'))
}

exports.js = js;