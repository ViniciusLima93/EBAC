const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')

function tarefasCSS (cb) {

    return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css','./src/vendor/owl/css/owl.css', 
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
            './src/vendor/jqueryUI/jquery-ui-1.13.2.custom/jquery-ui.css',
            './src/assets/css/style.css' 


    ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
}

exports.styles = tarefasCSS

function tarefasJS () {

    return gulp.src(["./node_modules/jquery/dist/jquery.js", './node_modules/bootstrap/dist/js/bootstrap.js',
    './src/vendor/owl/js/owl.js',
    './src/assets/js/custom.js'



])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
}

exports.scripts = tarefasJS

function tarefasImagem () {

    return gulp.src('./src/assets/images/*')
        .pipe(image({
            pngquant:true,
            optipng:true,
            zopflipng:true,
            jpegRecompress:false,
            mozjpeg:true,
            gifsicle:true,
            svgo:true,
            concurrent:10,
            quiet:true
        }))
        .pipe(gulp.dest('./dist/images/'))
}

exports.image = tarefasImagem
