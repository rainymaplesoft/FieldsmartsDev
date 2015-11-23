module.exports = function () {
    var approot = './approot';
    var rainModule = './rainModules';
    var bowerLibs = approot+'/bower_components';
    var extraLibs = './libs';   // manually added, cannot be installed by bower
    var deployRoot = './wwwroot';


    var config = {
        approot: approot,
        rainModule: rainModule,
        rainModuleTmp: rainModule + '/tmp',
        temp: './tmp/',
        distribution: './dist',
        extra_libs: extraLibs,
        deployRoot: deployRoot,
        appJs: getAppJs(approot),
        appCss: getAppCss(approot),
        vendorJs: getVendorJs(bowerLibs, extraLibs),
        vendorJsMap: getVendorJsMap(bowerLibs),
        vendorCss: getVendorCss(bowerLibs, extraLibs),
        vendorCssMap: bowerLibs + "/**/*.css.map",
        vendorFonts: getVendorFonts(bowerLibs)
    };
    return config;
};

function getAppJs(approot) {
    return [approot + '/**/*.js'];
}

function getAppCss(approot) {
    return [approot + '/**/*.css'];
}

function getVendorJs(bowerLibs, extraLibs) {
    return [
        // bower_libs
        bowerLibs + "/jquery/dist/jquery.min.js",
        bowerLibs + "/angular/angular.min.js",
        bowerLibs + "/angular-ui-router/release/angular-ui-router.min.js",
        bowerLibs + "/bootstrap/dist/js/bootstrap.min.js"
    ];
}

function getVendorCss(bowerLibs, extraLibs) {
    return [
        bowerLibs + "/bootstrap/dist/css/bootstrap.css"
    ];
}

function getVendorFonts(bowerLibs) {
    return [
        //bower_libs + '/fontawesome/fonts/**/*.*',
        bowerLibs + '/bootstrap/dist/fonts/**/*.*'
    ];
}

function getVendorJsMap(bowerLibs) {
    return [
        bowerLibs + '/angular-chart.js/dist/angular-chart.min.js.map',
        bowerLibs + '/angular-messages/angular-messages.min.js.map'
    ];
}