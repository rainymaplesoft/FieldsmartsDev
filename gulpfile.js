/// <binding AfterBuild='deploy-dev' Clean='clean' />

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    project = require("./project.json");

var runSequence = require('run-sequence');
var config = require('./gulp.config')();

var args = require('yargs').argv;
var del = require('del');

var $ = require('gulp-load-plugins')({ lazy: true });

var paths = {
    webroot: "./" + project.webroot + "/"
};

gulp.task("build-vendor-js", function () {
    log("copying vendor javascript files");
    log(config.deployRoot + '/lib');
    return gulp
        .src(config.vendorJs)
        .pipe(gulp.dest(config.deployRoot + '/lib'));
    //.pipe($.concat('vendor.js'))
    //.pipe(gulp.dest(config.deployRoot + '/lib'));
});

gulp.task("build-vendor-css", function () {
    log("copying vendor css files");
    return gulp
        .src(config.vendorCss)
        .pipe(gulp.dest(config.deployRoot + '/lib'));
    //.pipe($.concat('vendor.css'))
    //.pipe(gulp.dest(config.deployRoot + '/lib'));
});


gulp.task("build-clean", function (callback) {
    log("clean up folders in wwwroot");
    var paths = [
        config.deployRoot + '/lib',
        config.deployRoot + '/app/**',
        config.deployRoot + '/components/**',
        config.deployRoot + '/images/**',
        config.deployRoot + '/css/**',
        config.deployRoot + '/views/**'
    ];

    //return del(paths, { force: true });
    //return clean(paths);
});

gulp.task("build-app-dev", function () {
    log("copying application files");
    var paths = [
        config.approot + '/app/**/*.*',
        config.approot + '/components/**/*.*',
        config.approot + '/images/**/*.*',
        config.approot + '/css/**/*.*',
        config.approot + '/views/**/*.*',
        config.approot + '/index.html'
    ];
    return gulp
        .src(paths, { base: './approot' })
        .pipe(gulp.dest(config.deployRoot));
});


gulp.task("deploy-dev", function (callback) {
    runSequence(
        //'build-clean',
        ['build-vendor-js', 'build-vendor-css'],
        // 'build-app-dev',
        callback);
});



//================
function clean(path, callback) {
    //log('Cleaning: ' + $.util.colors.yellow(path));
    return del(path, { force: true });
};



function log(msg) {
    if (typeof (msg) == 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}