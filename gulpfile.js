'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var path = require('path');
var paths = require('./paths.conf');
var Server = require('karma').Server;
var $ = require('gulp-load-plugins')();

function lint(src) {
    return gulp.src(src)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail'));
}

function minifyHTML(src, dest) {
    return gulp.src(src)
        .pipe($.flatten())
        .pipe($.changed(dest))
        .pipe($.htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(dest));
}

gulp.task('browser-sync', ['nodemon'], function() {
    var port = process.env.PORT || '3000';
    browserSync.init({
        ui: false,
        files: paths.build,
        proxy: 'localhost:' + port,
        port: '4000',
        online: false,
        notify: false,
        reloadDelay: 500,
        minify: false
    });
});

gulp.task('lint-client', function() {
    return lint(paths.clientjs);
});

gulp.task('lint-server', function() {
    return lint(paths.serverjs);
});

gulp.task('minify-css', function() {
    return gulp.src(paths.css)
        .pipe($.concat('app.min.css'))
        .pipe($.autoprefixer('last 3 versions'))
        .pipe($.cssnano())
        .pipe(gulp.dest(paths.build));
});

gulp.task('minify-html-index', function() {
    return minifyHTML(paths.htmlindex, paths.build);
});

gulp.task('minify-html-views', function() {
    return minifyHTML(paths.htmlviews, paths.buildviews);
});

gulp.task('minify-img', function() {
    return gulp.src(paths.img)
        .pipe($.changed(paths.buildimg))
        .pipe($.imagemin())
        .pipe(gulp.dest(paths.buildimg));
});

gulp.task('minify-js', ['lint-client'], function() {
    return gulp.src([paths.clientjsmodule, paths.clientjs, paths.clientjsnotest])
        .pipe($.sourcemaps.init())
            .pipe($.concat('app.min.js'))
            .pipe($.ngAnnotate())
            .pipe($.stripDebug())
            .pipe($.uglify())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(paths.build));
});

gulp.task('nodemon', ['lint-server', 'minify-css', 'minify-html-index', 'minify-html-views', 'minify-img', 'minify-js', 'nsp'], function() {
    $.nodemon({
        script: paths.serverscript,
        watch: path.join(__dirname, paths.serverjs),
        env: { 'NODE_ENV': 'development' },
        tasks: ['lint-server']
    }).on('restart', browserSync.reload);
});

gulp.task('nsp', function(done) {
    $.nsp({
        package: path.join(__dirname, paths.packagejson)
    }, done);
});

gulp.task('test', function(done) {
    new Server({
        configFile: path.join(__dirname, paths.karmaconf)
    }, done).start();
});

gulp.task('default', ['browser-sync'], function() {
    gulp.watch(paths.css, ['minify-css']);
    gulp.watch(paths.htmlindex, ['minify-html-index']);
    gulp.watch(paths.htmlviews, ['minify-html-views']);
    gulp.watch(paths.img, ['minify-img']);
    gulp.watch(paths.clientjs, ['minify-js']);
    gulp.watch(paths.packagejson, ['nsp']);
});
