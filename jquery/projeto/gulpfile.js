const gulp = require('gulp')
const {parallel,series} = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefasCSS (cb) {

    gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css','./vendor/owl/css/owl.css', 
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
            './vendor/jqueryUI/jquery-ui-1.13.2.custom/jquery-ui.css',
            './src/assets/css/style.css' 


    ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
    cb()    
}


function tarefasJS (callback) {

    gulp.src(["./node_modules/jquery/dist/jquery.js", './node_modules/bootstrap/dist/js/bootstrap.js',
    './vendor/owl/js/owl.js',
    './src/assets/js/custom.js'



])
        .pipe(babel({
            comments:false,
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))

callback()        
}



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



function tarefasHTML(callback) {
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'))

    return callback()    
}


    gulp.task('serve', function() {
        browserSync.init({
            server:{
                baseDir: "./dist"
            }
        })
        gulp.watch('./src/**/*').on('change',process)
        gulp.watch('./src/**/*').on('change',reload)

    })



exports.image = tarefasImagem
exports.scripts = tarefasJS
exports.styles = tarefasCSS


const process =  series(tarefasHTML,tarefasJS, tarefasCSS)

exports.default = process
