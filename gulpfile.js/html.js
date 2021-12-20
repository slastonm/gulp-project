const { src, dest } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
function minify(){
    return src('*.html')
    .pipe(plumber())
    .pipe(htmlmin({
        collapseWhitespace:true,
        removeComments: true
    }))
    .pipe(dest('dist'))
}

exports.minify = minify