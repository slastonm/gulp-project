const { src, dest } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const processhtml = require('gulp-processhtml');
const w3cjs = require('gulp-w3cjs');
const rename = require("gulp-rename");
const del = require('del');

const path ={
    dev:'web-page/*.html',
    dist:'dist/'
}

function moveHtml(){
    return src(path.dev)
    .pipe(dest(path.dist))
    .pipe(browserSync.stream());
}
exports.moveHtml = moveHtml;

function pathRewrite(){
    return src(`${path.dist}*.html`)
    .pipe(processhtml())
    .pipe(dest(path.dist));
}
exports.pathRewrite =  pathRewrite;



function validation(){
    return src(path.distHtml)
    .pipe(w3cjs())
    .pipe(w3cjs.reporter());
}
exports.validation = validation;

function minify(){
    return src(`${path.dist}*.html`)
    .pipe(plumber())
    .pipe(htmlmin({
        collapseWhitespace:true,
        removeComments: true
    }))
    .pipe(dest(`${path.dist}`));
}
exports.minify = minify

function removeOldHtml(cb){
    del(`${path.dist}main.html`);
    cb();
}

exports.removeOldHtml = removeOldHtml;