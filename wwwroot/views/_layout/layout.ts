/// <reference path="../../../typings/tsd.d.ts"/>

module app.View {
  
    class LayoutCtrl {

        static $inject = ['$scope', '$window', '$rootScope'];

        constructor(private $scope: ng.IScope, private $window: ng.IWindowService, private $rootScope: ng.IRootScopeService) {

        }
        
    }

    angular.module('Fieldsmarts').directive('layout', [layout]);

    function layout() {
        return {
            templateUrl: 'views/_layout/layout.html',
            controller: [LayoutCtrl],
            controllerAs: 'vm'
        };
    }
}
