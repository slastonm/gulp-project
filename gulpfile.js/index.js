const { series, parallel, src, dest } = require('gulp');

const {html, scriptLint} = require('./test');
const {scss2css, postcss2css, clean} = require('./css');
const {js} = require('./script');
const {minify} = require('./html');
const {minimage, sprite}=require('./image');

exports.img = series(minimage, sprite);
exports.dev = series(scss2css);
exports.build = series(html, scriptLint);
exports.prod = series(
    parallel(
        minify,
        series(postcss2css, clean),
        js), 
    );