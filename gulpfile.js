'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync').create();
var resolve = require('app-root-path').resolve;
var Server = require('karma').Server;

gulp.task('test', function(done) {
    new Server({
        configFile: resolve('./karma.conf.js')
    }, function(status) {
        if (status) {
            process.exit(1);
        }

        done();
    }).start();
});

gulp.task('lint', ['lint.client', 'lint.server']);

gulp.task('lint.client', function() {
    return gulp.src('./client/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('lint.server', function() {
    return gulp.src('./server/**/@(*.js|http|https)')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('dist', ['dist.css', 'dist.html', 'dist.img', 'dist.js', 'dist.vendor']);

gulp.task('dist.css', function() {
    return gulp.src('./client/**/*.css')
        .pipe($.sourcemaps.init())
            .pipe($.concat('app.min.css'))
            .pipe($.autoprefixer())
            .pipe($.cssnano())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist.html', ['dist.html.index', 'dist.html.views']);

gulp.task('dist.html.index', function() {
    return gulp.src('./client/index.html')
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist.html.views', function() {
    return gulp.src('./client/**/!(index).html')
        .pipe($.flatten())
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/views'));
});

gulp.task('dist.img', function() {
    return gulp.src('./client/**/*.@(png|jpg|gif|svg|ico)')
        .pipe($.flatten())
        .pipe($.imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('dist.js', function() {
    return gulp.src(['./client/**/*.module.js', './client/**/!(*.spec).js'])
        .pipe($.sourcemaps.init())
            .pipe($.concat('app.min.js'))
            .pipe($.ngAnnotate())
            .pipe($.uglify())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist.vendor', function() {
    return gulp.src([
        './node_modules/angular-material/angular-material.min.css',

        './node_modules/angular/angular.min.@(js|js.map)',
        './node_modules/angular-aria/angular-aria.min.@(js|js.map)',
        './node_modules/angular-animate/angular-animate.min.@(js|js.map)',
        './node_modules/angular-material/angular-material.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js'
    ], {base: './node_modules'})
        .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('dev', ['dev.client'], function() {
    gulp.watch('./client/**/*.css', ['dist.css']);
    gulp.watch('./client/index.html', ['dist.html.index']);
    gulp.watch('./client/**/!(index).html', ['dist.html.views']);
    gulp.watch('./client/**/*.@(png|jpg|gif|svg|ico)', ['dist.img']);
    gulp.watch('./client/**/!(*.spec).js', ['dist.js']);
});

gulp.task('dev.client', ['dev.server'], function() {
    var port = process.env.PORT || 3000;
    browserSync.init({
        ui: false,
        files: './dist',
        proxy: 'localhost:' + port,
        port: port + 1,
        online: false,
        notify: false,
        reloadDelay: 500,
        minify: false
    });
});

gulp.task('dev.server', ['dist'], function() {
    $.nodemon({
        script: './server/bin/http',
        watch: resolve('./server/**/@(*.js|http|https)'),
        env: { 'NODE_ENV': 'development' }
    }).on('restart', browserSync.reload);
});

gulp.task('default', ['dev']);
