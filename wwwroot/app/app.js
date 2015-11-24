/// <reference path="../../typings/tsd.d.ts" />
var App;
(function (App) {
    var module = angular.module('Fieldsmarts', [
        'ui.router'
    ]);
    var AppConfig = (function () {
        function AppConfig() {
            this._messageConfig = {
                consoleLog: false,
                alert: false,
                toastr: true
            };
            this.messageConfig = this._messageConfig;
            this.loginEndpoint = '/api/login';
            this.apiBaseUrl = 'http://localhost:52089/api/';
        }
        AppConfig.prototype.getApiUrl = function (endpoint) { return this.apiBaseUrl + endpoint; };
        return AppConfig;
    })();
    App.AppConfig = AppConfig;
    module.value('app.config', new AppConfig());
})(App || (App = {}));
//# sourceMappingURL=app.js.map