const { src, dest, series } = require('gulp');
const spritesmith = require('gulp.spritesmith');
const image = require('gulp-imagemin');
const plumber = require('gulp-plumber');
function sprite(){
    return src('img/*.png')
    .pipe(plumber())
    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        algorithm: 'alt-diagonal',
        padding: 20
    }))
    .pipe(dest('img/sprite/'));
}
exports.sprite = sprite;

// https://www.npmjs.com/package/gulp-imagemin
function minimage(){
    return src('img/*')
    .pipe(plumber())
    .pipe(image([
        image.svgo({
            plugins: [
                {
                    removeViewBox: true,
                    removeAttrs: true
                }
            ]
        }),
        image.gifsicle({
            plugins:[
                {
                    optimizationLevel:3
                }
            ]
        })
    ], {
        verbose: true
    }))
    .pipe(dest('dist/img'));
}

exports.minimage = minimage;
