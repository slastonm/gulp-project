const { series, src, dest } = require('gulp');

const {htmlValidator} = require('gulp-w3c-html-validator');
const plumber = require('gulp-plumber');
function html(){
    return src('index.html')
    .pipe(plumber())
    .pipe(htmlValidator.analyzer())
    .pipe(htmlValidator.reporter());
} 

exports.html = html;

const eslint = require('gulp-eslint');

function scriptLint(){
    return src('scripts/*.js')
    .pipe(eslint({fix:true}))
    .pipe(eslint.format())
    .pipe(dest(file => file.base))
    .pipe(eslint.failAfterError())
}

exports.scriptLint = scriptLint;