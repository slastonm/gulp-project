const { series, parallel, src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();

const {scss2css, postcss2css, removeOldStyle} = require('./css');
const {moveScripts, scriptLint, jsModify, delOldScript} = require('./script');
const {moveHtml, validation, pathRewrite, minify, removeOldHtml} = require('./html');
const {minimage, sprite, moveImage}=require('./image'); 
const del = require('del');

const path={
    html:'web-page/*.html',
    scss:'web-page/style/*.scss',
    js:'web-page/scripts/*.js',
    dist:'dist/'

}
function cleanOldFiles(cb){
    del(`${path.dist}**`);
    cb();
}   

function watcher(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    watch(path.scss, series(scss2css));
    watch(path.html, series(moveHtml));
    watch(path.js, series(moveScripts)); 
    watch(`${path.dist}**/*.*`).on('change', browserSync.reload);
}
exports.sprite = sprite;
exports.dev = series( cleanOldFiles, moveHtml, sprite, moveImage, moveScripts, scss2css, watcher);

exports.linter = scriptLint;
exports.htmllinter = validation;
exports.minify = minify;
exports.prod = parallel(
    series(postcss2css, removeOldStyle), 
    series(jsModify, delOldScript), 
    series(pathRewrite, minify, removeOldHtml),
    series(minimage)
    );