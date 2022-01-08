const { src, dest, series } = require('gulp');
const spritesmith = require('gulp.spritesmith');
const image = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const path={
    dev:'web-page/img/**',
    devSprite:'web-page/img/sprite/',
    dist:'dist/img/',
    distSprite:'./web-page/img/sprite/',
    exludeStyle:'!web-page/img/sprite/*.scss'
}

function moveImage(){
    return src([path.dev, path.exludeStyle])
    .pipe(dest(path.dist))
    .pipe(browserSync.stream());
}

exports.moveImage = moveImage;


function sprite(){
    return src(`${path.dev}.png`)
    .pipe(plumber())
    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        algorithm: 'binary-tree',
        padding: 20
    }))
    .pipe(dest(path.distSprite));
}
exports.sprite = sprite;

function minimage(){
    return src(`${path.dist}*`)
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
    .pipe(dest(path.dist));
}

exports.minimage = minimage;

