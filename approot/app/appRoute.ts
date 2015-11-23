/// <reference path="../../typings/tsd.d.ts" />
module App {

    class AppRoute {
        static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider) {
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
    }

    angular.module('Fieldsmarts').config(AppRoute);
}
