/// <reference path="../../typings/tsd.d.ts" />
var App;
(function (App) {
    var AppRoute = (function () {
        function AppRoute($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/quotation");
            $stateProvider
                .state("quotation", {
                url: '/quotation',
                template: "<quotation></quotation>"
            })
                .state("siding", {
                url: '/siding',
                template: "<siding></siding>"
            });
        }
        AppRoute.$inject = ["$stateProvider", "$urlRouterProvider"];
        return AppRoute;
    })();
    angular.module('Fieldsmarts').config(AppRoute);
})(App || (App = {}));
//# sourceMappingURL=appRoute.js.map